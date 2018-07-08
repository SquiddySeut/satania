
const Discord = require('discord.js');
const client = new Discord.Client();
var cs;
var sp;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content==="I'll call my friends"){
        cs=1;
    }
    if (message.content==="Satania-sama, how are you?"&&cs===1){
        sp=getRandomInt(2);
        if (sp===0){
            message.reply("I'm fine...");
        }
        if (sp===1){
            message.reply("you lowlife dare ask about the superior archdemon?");
        }
        if (sp===3){
            message.reply("I've seen better days...");
        }
    }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
