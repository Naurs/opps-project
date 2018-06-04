const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Undertale Literature Club!", 'https://www.twitch.tv/naurs07');
  client.user.setStatus("dnd");
});
      
client.on('message', msg => {
  let prefix = botconfig.prefix;
  let timems = Date.now() - msg.createdTimestamp;

  if (msg.content == `${prefix}ping`)  {
    msg.channel.send('Pong!🏓 '+ `${timems}` + ' ms');
  }
  if (msg.content == `${prefix}avatar`) {
    msg.channel.send(msg.author.avatarURL);
  }
});


client.login(botconfig.token);