const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Undertale Literature Club!");
  client.user.setStatus("dnd");
});

client.on('message', msg => {
  let prefix = botconfig.prefix;
  let cmd = msg.content;

  if (cmd == `${prefix}ping`)  {
   msg.channel.send('Pong!🏓 '+ `${msg.client.ping}` + ' ms');
  }
  if (cmd == `${prefix}avatar`) {
    msg.channel.send(msg.author.avatarURL);
  }
  if (cmd == `${prefix}botinfo`){
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
  if (cmd == `${prefix}serverinfo`){
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
  if(cmd == `${prefix}kick`){
    let kUser = msg.guild.member(msg.mentions.user);
    if(!kUser){
      msg.channel.send("Can't find user!!!");
    }
    if(!msg.member.hasPermission("MANAGE_MESSAGES")){
      msg.channel.send("You have no power here");
    }
    if(kUser.hasPermission){
      msg.channel.send("This man is good, also i can't kick");
    }
    msg.guild.member(kUser).kick("Bo tak"); 
    msg.channel.send("Pal has kicked");
  }
});


client.login(botconfig.token);
