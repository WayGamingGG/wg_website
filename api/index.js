require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const JSONBIN_ID = process.env.JSONBIN_ID || '6a10b3b2ee5a733b12032dd5';
const JSONBIN_KEY = process.env.JSONBIN_KEY;

app.use(cors());
app.use(express.json());

async function readNews() {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}/latest`, {
    headers: { 'X-Master-Key': JSONBIN_KEY },
  });
  if (!res.ok) throw new Error(`JSONBin read failed: ${res.status}`);
  const data = await res.json();
  return data.record;
}

async function writeNews(news) {
  const res = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_ID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': JSONBIN_KEY,
    },
    body: JSON.stringify(news),
  });
  if (!res.ok) throw new Error(`JSONBin write failed: ${res.status}`);
}

app.get('/news', async (req, res) => {
  try {
    const news = await readNews();
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read news' });
  }
});

app.post('/news', async (req, res) => {
  const { title, content, imageUrl } = req.body;

  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({ error: 'title and content are required' });
  }

  try {
    const news = await readNews();
    const newItem = {
      id: Date.now(),
      title: title.trim(),
      content: content.trim(),
      imageUrl: imageUrl || null,
      date: new Date().toISOString(),
    };

    news.unshift(newItem);
    await writeNews(news.slice(0, 3));

    res.status(201).json(newItem);
  } catch (err) {
    console.error('[API] Error:', err.message);
    res.status(500).json({ error: 'Failed to save news' });
  }
});

app.listen(PORT, () => {
  console.log(`[API] News API running on http://localhost:${PORT}`);
});
