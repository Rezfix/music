const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms'); // npm i ms
const cool = [];
const prefix = "!";

client.on('ready', () => {
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
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

client.on('message', message => {
  let argresult = message.content.split(``).slice(1).join(' ');
  if (message.content.startsWith(prefix + 'setStreaming')) {
    if (!devs.includes(message.author.id)) return message.channel.send("<@480407581085532180> only this guy can do restart the bot so don't try again 😉.");
    message.delete();
    client.user.setGame(argresult, 'https://twitch.tv/DynastyShop');

  } else if(message.content.startsWith(prefix + 'setWatching')) {
      client.user.setActivity(argresult,{type: 'WATCHING'});

    } else if(message.content.startsWith(prefix + 'setListening')) {
      client.user.setActivity(argresult,{type: 'LISTENING'});

    } else if(message.content.startsWith(prefix + 'setPlaying')) {
      client.user.setActivity(argresult,{type: 'PLAYING'});

    } else if(message.content.startsWith(prefix + 'setName')) {
      client.user.setUsername(argresult);

    } else if(message.content.startsWith(prefix + 'setAvatar')) {
      client.user.setAvatar(argresult);


    } else if(message.content.startsWith(prefix + 'setStatus')) {
      if(!argresult) return message.channel.send('online,DND(Do not Distrub),`idle, invisible(Offline) :notes: أختر أحد الحالات');
      client.user.setStatus(argresult);


  }

});

client.login(process.env.BOT_TOKEN);
