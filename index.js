 
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

client.login("MTQ4NjMwMjEyNzY3NTQxMjU4NA.G3Fa8L.VQfU5suDOfU6H1Y8Ta7eWg4dNwfptRScxzLYUE");