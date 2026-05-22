require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const NEWS_FILE = path.join(__dirname, 'news.json');

app.use(cors());
app.use(express.json());

async function readNews() {
  try {
    const data = await fs.readFile(NEWS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeNews(news) {
  await fs.writeFile(NEWS_FILE, JSON.stringify(news, null, 2));
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
    res.status(500).json({ error: 'Failed to save news' });
  }
});

app.listen(PORT, () => {
  console.log(`[API] News API running on http://localhost:${PORT}`);
});
