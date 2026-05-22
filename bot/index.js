require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const API_URL = process.env.API_URL || 'http://localhost:3001';
const CHANNEL_ID = process.env.CHANNEL_ID;
const TARGET_CHANNEL_NAME = 'anuncios-site';

client.once('ready', () => {
  console.log(`[Bot] Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const isTarget = CHANNEL_ID
    ? message.channel.id === CHANNEL_ID
    : message.channel.name === TARGET_CHANNEL_NAME;

  if (!isTarget) return;
  if (!message.content.startsWith('!news ')) return;

  const body = message.content.slice(6).trim();
  const separatorIndex = body.indexOf('|');

  if (separatorIndex === -1) {
    return message.reply('Formato inválido. Use: `!news Título | Conteúdo`');
  }

  const title = body.slice(0, separatorIndex).trim();
  const content = body.slice(separatorIndex + 1).trim();

  if (!title || !content) {
    return message.reply('Título e conteúdo não podem estar vazios.');
  }

  const imageUrl = message.attachments.first()?.url || null;

  try {
    const res = await fetch(`${API_URL}/news`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, imageUrl }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `API returned ${res.status}`);
    }

    await message.reply(`Anúncio **"${title}"** publicado no site com sucesso.`);
  } catch (err) {
    console.error('[Bot] Error posting news:', err.message);
    await message.reply('Erro ao publicar o anúncio. Verifique se a API está online.');
  }
});

client.login(process.env.DISCORD_TOKEN);
