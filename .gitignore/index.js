const Discord = require("discord.js"); 
const { Client, RichEmbed } = require('discord.js');
const client = new Discord.Client();

bot.login(process.env.TOKEN)

client.on('ready', async () => {
    console.log("je suis pret")
    client.user.setStatus('je test')
    client.user.setPresence({
        game: {
            name: 'je suis le bot 7EI',
            type: "STREAMING",
            url: "https://www.twitch.tv/neytoux1"
        }
    })
});
