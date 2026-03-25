 
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('clientReady', () => {
  console.log('LUMEN đã online');
});

client.on('messageCreate', message => {
  if (message.content === "svl") {
    message.reply(`mày mới lồn á ${message.author}`);
  }
});

client.login(process.env.TOKEN);