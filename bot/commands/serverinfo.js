const  { MessageEmbed } = require('discord.js');
const { Menu } = require('discord.js-menu');
const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt-br');



module.exports.run = async (bot, message, args) => {

  	let region = {
		brazil: 'Brasil :flag_br:',
		'eu-central': 'Central Europe',
		singapore: 'Singapore',
		'us-central': 'U.S. Central',
		sydney: ':Sydney',
		'us-east': 'U.S. East',
		'us-south': 'U.S. South',
		'us-west': 'U.S. West',
		'eu-west': 'Western Europe',
		'vip-us-east': 'VIP U.S. East',
		london: 'London',
		amsterdam: 'Amsterdam',
		hongkong: 'Hong Kong',
		russia: 'Russia',
		southafrica: 'South Africa'
	};

let members = message.guild.members.cache.filter(member => !member.user.bot).size
let onlineMembers = message.guild.members.cache.filter(member => !member.user.bot).filter(member => member.presence.status !== "offline").size
	let texto = message.guild.channels.cache.filter(ch => ch.type === 'text');
	let voz = message.guild.channels.cache.filter(bh => bh.type === 'voice');
  let bots = message.guild.members.cache.filter(member => member.user.bot).size
  let onlineBots = message.guild.members.cache.filter(member => member.user.bot).filter(member => member.presence.status !== "offline").size


	let guildaid = bot.guilds.cache.get(args[0]) || message.guild;

    console.log(message)
let helpMenu = new Menu(message.channel, message.author.id, [
    {
        name: 'main',
        content: new MessageEmbed()
        .setTitle("<a:7007_Blue_campfire:817903253600731217> Informações do servidor!")
  .addField("<:7355_arrow:817907058031984650> Nome:", `${guildaid.name}`)
  .addField("<:7355_arrow:817907058031984650> Criador:", `${guildaid.owner}`) 
  .addField("<:7355_arrow:817907058031984650> ID",`${guildaid.id}`)
  .addField("<:7355_arrow:817907058031984650> Local:", `${region[guildaid.region]}`)
  .addField("<:7355_arrow:817907058031984650> Boosters:", `${message.guild.premiumSubscriptionCount} Boost(s) (Nível ${message.guild.premiumTier})`)
  
  .setColor("PURPLE")
        .setFooter('Página 1/2')
        ,
        reactions:{
        '▶': "next"
        }
        },
    {
        name: "Página",
        content: new MessageEmbed()
        .setTitle("<a:7007_Blue_campfire:817903253600731217> Informações do servidor!")
    .addField("<:7355_arrow:817907058031984650> Membros:", `${guildaid.memberCount}`)
    .addField(`<:7355_arrow:817907058031984650> Canais de Texto:`, `${texto.size}`)
		.addField(`<:7355_arrow:817907058031984650> Canais de Voz:`, `${voz.size}`)
    .addField(`<:7355_arrow:817907058031984650> Cargos:`,message.guild.roles.cache.size)
    .addField('<:7355_arrow:817907058031984650> Criado em', `${moment(guildaid.createdAt).format('LLL')}`)
		
		
    .setColor("PURPLE")
        .setFooter('Página 2/2')
        ,
        reactions:{  
        '◀': 'previous'
        
 
    }
    },
    ], 300000)
        helpMenu.start()
}


module.exports.help = {
    name : 'embedpage'
    }