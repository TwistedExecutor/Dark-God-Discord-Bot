const Discord = require('discord.js');
const botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
   
    let bot1embed = new Discord.MessageEmbed()
  //  .addField('Prefix' , `${botconfig["bot_setup"].prefix}`)
    .addField('`Help Menu - Fun commands' , `${botconfig["bot_commands"].Fun}`)
    .setColor(botconfig["bot_setup"].main_embed_color)
    message.author.send(bot1embed);
}
module.exports.help = {
    name: "help-fun",
    cooldown: 5,
}