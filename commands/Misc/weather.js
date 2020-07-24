const weather = require('weather-js');
const discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
    message.delete();
    
    if(!args.length) {
      return message.channel.send("Please give the weather location")
    }
    
 weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
try {
 
    let botembed = new discord.RichEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.setColor("#FC0000")
.setDescription("Temperature units can may be differ some time")
.addField("Temperature", `${result[0].current.temperature} Celcius`, true)
.addField("Sky", result[0].current.skytext, true)
.addField("Humidity", result[0].current.humidity, true)
.addField("Wind Speed", result[0].current.windspeed, true)//What about image
.addField("Observation Time", result[0].current.observationtime, true)
.addField("Wind Display", result[0].current.winddisplay, true)
.setTimestamp()
.setFooter('© 2020 Twisted X Modz - All Rights Reserved')
.setThumbnail(result[0].current.imageUrl);

message.channel.send(botembed);

} catch(err) {
  return message.channel.send("Unable To Get the data of Given location")
}
});   
    //LETS CHECK OUT PKG
    
  }

module.exports.help = {
name: "weather",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  cooldown: 5,
}