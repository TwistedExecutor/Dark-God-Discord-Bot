const Discord = require('discord.js');
const imageColor = ".//images//sonic.png";
const newImageColor = ".//images//sonicNewColor.png"
var Jimp = require('jimp');

exports.run = (client, message, args) => {  

    message.delete();
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    var hexColor = '0x'+Jimp.rgbaToInt(r, g, b, 0);
    var colorResult =  r + ', ' + g + ', ' + b ;

    Jimp.read(imageColor)
    .then(lenna => {
        return lenna
            .quality(60)
            .color([
                { apply: 'red', params: [r] },
                { apply: 'green', params: [g] },
                { apply: 'blue', params: [b] }
            ])
            .write(newImageColor);
    })
    .catch(err => {
        console.error(err);
    });

    const embed = new Discord.RichEmbed()    
        .addField("Hex",`${hexColor}`)
        .addField("RGB", colorResult)
        .attachFile(newImageColor);
    
    message.channel.send({embed});
}
module.exports.help = {
    name: "randomcolor",
    cooldown: 5,
}