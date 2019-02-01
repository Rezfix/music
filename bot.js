const Discord = require('discord.js');
const Util = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const ytdl = require('ytdl-core');
const fs = require('fs');
const gif = require("gif-search");
const client = new Discord.Client({disableEveryone: true});

client.on('ready',  () => {
console.log('------------------------------------');
console.log(' ,');
console.log(`Servers | " ${client.guilds.size} " |`); 
console.log(`Users | " ${client.users.size} " |`); 
console.log('Bot By BLUTICK.#0001 ,');
console.log('For Tune Music ,');
console.log('Nexta-Tune,');
console.log('------------------------------------');
});

client.on('ready',async () => {
console.log("Starting..");
let g = client.guilds.get("540155995796668434");
let c = g.channels.get("540171973490245642");
if(c.type === 'voice') {
c.join();
setInterval(() => {
if(!g.me.voiceChannel) c.join();
}, 1);
} else {
console.log("Failed To Join:\n The Channel Type isn't \"text\"");
}
});

client.login(process.env.BOT_TOKEN);
