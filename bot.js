const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('ready', () => { bot.user.setGame('with Har-Akens Tentacles') })
client.registry.registerGroup('random', 'Random');
client.registry.registerGroup('bosses', 'Bosses');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.login('MzczOTYxMjg2OTc2OTI5Nzky.DO81Rw.M5IASL5Lav7yj-2I2N_XXNl5qpQ');
