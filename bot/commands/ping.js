const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ping',
	run: async (client, message, args) => {
		const m = await message.channel.send('ping...').then(async msg => {
			let embed = new MessageEmbed()
				.setColor('PURPLE')
				.setTitle("PING")
				.addField(
					'<:7962_arrow_join:817855785462923285> Velocidade da API:',
					client.ws.ping + 'ms'
				)
				.addField(
					`<:7962_arrow_join:817855785462923285> Velocidade de resposta:`,
					msg.createdTimestamp - message.createdTimestamp + 'ms'
				);
			await msg.delete();
			await message.channel.send(embed);
		});
	}
};
