const commando = require('discord.js-commando');
const fs = require("fs");

const bot = new commando.Client();

bot.on('ready', () => { bot.user.setGame('with Har-Akens Tentacles') })
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('bosses', 'Bosses');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

bot.login('MzczOTYxMjg2OTc2OTI5Nzky.DNaWHg.Hl3Laqn6NsTNhaIVaByLnGPmp6A');
