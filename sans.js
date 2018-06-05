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

  if (msg.content == `${prefix}ping`)  {
    msg.channel.send('Pong!🏓 '+ `${Date.now() - msg.createdTimestamp}` + ' ms');
  }
  if (msg.content == `${prefix}avatar`) {
    msg.channel.send(msg.author.avatarURL);
  }
  if (msg.content == `${prefix}botinfo`){
    const embed = new Discord.RichEmbed()
    .setDescription("BOT INFO")
    .setColor(0x2839FF)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Bot name:", client.user.username)
    .addField("Bot created:", client.user.createdAt  )
    .setFooter('Made by Naurs')
    .setTimestamp();

    msg.channel.send({embed});
  }
  if (msg.content == `${prefix}serverinfo`){
    const embed = new Discord.RichEmbed()
    .setDescription("BOT INFO")
    .setColor(0x2839FF)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Sever name:", msg.guild.name)
    .addField("Created On :", msg.guild.createdAt)
    .addField("You joined:", msg.member.joinedAt)
    .addField("All users in server :", msg.guild.memberCount)
    .setFooter('Made by Naurs')
    .setTimestamp();

    msg.channel.send({embed});
  }
});


client.login(botconfig.token);
