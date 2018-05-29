const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) =>{
	
	if(message.content == 'ping'){
		messege.channel.sendMessage('pong');
	}
	
});

bot.login('token do bota');
