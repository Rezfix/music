const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms'); // npm i ms
const cool = [];
const prefix = "!";

client.on('ready', () => {
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
});

   client.on('message', message => {
    const prefix = '*'
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "Not Playing....";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('Name :',`**<@` + `${z.id}` + `>**`, true)
.addField('ID :', "**"+ `${z.id}` +"**",true)
.addField('Playing :','**'+y+'**' , true)
.addField('Discrim :',"**#" +  `${z.discriminator}**`,true)
.addField('**Created At**', message.author.createdAt.toLocaleString())
.addField("**Joined At**", message.member.joinedAt.toLocaleString())    

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});

client.on("message", message => {
    if (message.content.startsWith(prefix + "obc")) { ///@» MHSTR 🇮🇶#1119
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return; //@» MHSTR 🇮🇶#1119
  let args = message.content.split(" ").slice(1); ///@» MHSTR 🇮🇶#1119
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => { //@» MHSTR 🇮🇶#1119
  m.send(`${argresult}\n ${m}`); ///@» MHSTR 🇮🇶#1119
  }) /// @» MHSTR 🇮🇶#1119
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
  message.delete(); ///@» MHSTR 🇮🇶#1119
  }; ///@» MHSTR 🇮🇶#1119
  }); //// @» MHSTR 🇮🇶#1119
 
 
 
  client.on("message", message => {
  ///@» MHSTR 🇮🇶#1119
              if (message.content.startsWith(prefix + "bc")) { //@» MHSTR 🇮🇶#1119
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return; //@» MHSTR 🇮🇶#1119
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); // @» MHSTR 🇮🇶#1119
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`); //@» MHSTR 🇮🇶#1119
  }) ///@» MHSTR 🇮🇶#1119
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `);
   message.delete(); //@» MHSTR 🇮🇶#1119
  };     /// @» MHSTR 🇮🇶#1119
  }); ///@» MHSTR 🇮🇶#1119

const developers = ["547113238588817409"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(prefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (prefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(prefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(prefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

client.on('ready',async () => {
	console.log("Starting..");
	let g = client.guilds.get("514860264600895529");
	let c = g.channels.get("548673819192197140");
	if(c.type === 'voice') {
	c.join();
	setInterval(() => {
	if(!g.me.voiceChannel) c.join();
	}, 1);
	} else {
	console.log("Failed To Join:\n The Channel Type isn't \"text\"");
	}
	});

});

client.login(process.env.BOT_TOKEN);
