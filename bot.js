const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("529670914128871437")
setInterval(function() {
channel.send(`Hamo Hamo Hamo Hamo Hamo Hamo`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
