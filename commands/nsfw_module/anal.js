const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  msg.delete();
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'anal'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("This isn't NSFW channel!")
  }
};

module.exports.help = {
  name: "anal",
  cooldown: 5,
}


