const Discord = require('discord.js');
const botconfig = require('./botconfig.json');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Undertale Literature Club!");
  client.user.setStatus("dnd");
});

client.on('message', message => {
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`)  {
   message.channel.send('Pong!🏓 '+ `${message.client.ping}` + ' ms');
  }
  if (cmd === `${prefix}avatar`) {
    message.channel.send(message.author.avatarURL);
  }
  if (cmd === `${prefix}botinfo`){
    const embed = new Discord.RichEmbed()
    .setDescription("BOT INFO")
    .setColor(0x2839FF)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Bot name:", client.user.username)
    .addField("Bot created:", client.user.createdAt  )
    .setFooter('Made by Naurs')
    .setTimestamp();

    message.channel.send({embed});
  }
  if (cmd === `${prefix}serverinfo`){
    const embed = new Discord.RichEmbed()
    .setDescription("BOT INFO")
    .setColor(0x2839FF)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Sever name:", message.guild.name)
    .addField("Created On :", message.guild.createdAt)
    .addField("You joined:", message.member.joinedAt)
    .addField("All users in server :", message.guild.memberCount)
    .setFooter('Made by Naurs')
    .setTimestamp();

    message.channel.send({embed});
  }
  if(cmd === `${prefix}kick`){
    let kUser = message.guild.member(message.mentions.users.first());
    if(message.member.hasPermission("MANAGE_MESSAGES")){
      let bReason = args.join(" ").slice(22);
      if(!kUser){
        return message.channel.send("Can't find user!!!");
      } else if(kUser.hasPermission("MANAGE_MESSAGES")){
        return message.channel.send("This man is good, also i can't kick");
      } else{
        kUser.ban(kReason); 
        message.channel.send("(Not)Pal has kicked");
      }
    } else{
      message.channel.send("You have no power here!");
    }
  }

  if(cmd === `${prefix}ban`){
    let bUser = message.guild.member(message.mentions.users.first());
    if(message.member.hasPermission("MANAGE_MESSAGES")){
      let bReason = args.join(" ").slice(22);
      if(!bUser){
        return message.channel.send("Can't find user!!!");
      } else if(bUser.hasPermission("MANAGE_MESSAGES")){
        return message.channel.send("This man is good, also i can't ban");
      } else{
        bUser.ban(bReason); 
        message.channel.send("(Not)Pal has banned🔨");
      }
    } else{
      message.channel.send("You have no power here!");
    }
  }
});


client.login(botconfig.token);
