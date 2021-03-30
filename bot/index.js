
express = require('express');
const app = express();
const { prefix , token , state } = require('./config.json')
app.get("/", (request, response) => {
    const ping = new Date();
    ping.setHours(ping.getHours() - 3);
    console.log(` ping recebido (${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()})`);
    response.sendStatus(200);
});
app.listen(process.env.PORT); 

const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 

client.on("ready", () => {
    let activities = [
        `use ${prefix}ajuda`,
        `ROI`,
        `estou em ${client.guilds.cache.size} servidores `,
        `${client.users.cache.size} usuários!`
    ]
    i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
    }), 1000 * 3); 
    client.user
        .setStatus("dnd")
        .catch(console.error);
        console.log(" ")
    console.log(`o bot foi iniciado corretamente!\nBot: ${client.user.tag}\nServidores: ${client.guilds.cache.size}`)
});



client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(config.prefix)) return;
    if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
   
    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
        console.error('Erro:' + err);
    }
});


process.on('unhandledRejection', (err, p) => {
    if (err)
        return;
});



client.login(config.token).catch(err => {
    if (err.message === "Incorrect login details were provided.") {
        return console.log(`verifique se o token está correto.`)
    }
})