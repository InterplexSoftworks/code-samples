const {Client, MessageEmbed, Message} = require("discord.js")
const client = new Client()
require('dotenv').config()
const token = process.env.login
const config = require('./config.json')
const prefix = config.prefix
const pfps = require('vsc-logos')

client.on("ready", () => {
    client.user.setActivity(config.status)
    client.user.setUsername(config.name)
   // client.user.setAvatar(pfps.RandomLogo())
    console.log(`Successfully signed in as ${client.user.tag}, and you can invite me using https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot and my prefix is ${prefix}`)
})

client.on("message", async message=> {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    const args = message.content.slice(1).trim().split(/ +/g); 
    const command = args.shift().toLowerCase();

    if(command == "cmd"){
        message.channel.send(`Message`)
}

if(command == "embedcmd"){
    const embed = new MessageEmbed()
        .setTitle(`Title`)
        .setDescription("Desc")
        .setFooter("Footer")
        .setColor("CDC0EA");
        message.channel.send(embed)
}
})

client.login(null)