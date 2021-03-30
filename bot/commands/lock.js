const Discord = require("discord.js")
exports.run = async (bot, message, argumentos, arg_texto, chat) => {
  
   if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(` ${message.author} você não tem permissão de **adminstrador**!`)


var cor = ["PURPLE"]

  const ajuda = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("")
    
    .setDescription(` olá ${message.author.username} vejo que está querendo trancar/destrancar o chat ${message.channel}\n\n<:7962_arrow_join:817855785462923285> Reaja com "🔒" para trancar\n<:7962_arrow_join:817855785462923285> Reaja com "🔓" para destrancar `)

    
    
    .setTimestamp()
       
    
  message.channel.send(ajuda).then(msg => {
    msg.react('🔒').then(r => {
      msg.react('🔓').then(r => {
    
      
      
    })
    
    })
  
    const infosFilter = (reaction, user) => reaction.emoji.name === '🔒' && user.id === message.author.id;
        const admFilter = (reaction, user) => reaction.emoji.name === '🔓' && user.id === message.author.id;
  
    const infos = msg.createReactionCollector(infosFilter);
        const adm = msg.createReactionCollector(admFilter);
   
    infos.on('collect', r2 => {
      
      message.channel.overwritePermissions([

     {

        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
    
    
      ajuda.setColor('PURPLE')
      ajuda.setTitle("Canal Trancado!")
      ajuda.setDescription(`🔒• O chat ${message.channel} foi trancado pelo staff ${message.author}. `)
      
      ajuda.setThumbnail("")
      message.reactions.removeAll()
      msg.edit(ajuda)
     
    })
    
    adm.on('collect', r2 => {
      
      message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
    
    
      ajuda.setColor('PURPLE')
      ajuda.setTitle("Canal Destrancado!")
      ajuda.setDescription(`🔓• o chat ${message.channel} foi destrancado pelo staff ${message.author}.`)
      ajuda.setThumbnail("")
      ajuda.setImage("")
      message.reactions.removeAll()
      msg.edit(ajuda)
      
      
    })
    

    })
    }
