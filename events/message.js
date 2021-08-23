const messageParser = require('../custom_modules/messageParser.js');
const TikTokScraper = require('tiktok-scraper');
const { MessageEmbed } = require('discord.js');
// const instagramGetUrl = require("instagram-url-direct")
module.exports = {
	name: 'messageCreate',
	execute(message) {
		console.log(`${message.author.username} in #${message.channel.name}, (${message.guild.name}) sent ${message.content}.`);
		let url = messageParser.checkForURLs(message.content);
		if (url) {
			if (messageParser.checkForTikTok(url)) {
				TikTokScraper.getVideoMeta(url).then(data => {
					let embed = new MessageEmbed()
						.setTitle('Click To See Video')
						.setColor(Math.random() > 0.5 ? '#69c9d0' : '#ee1d52')
						.setImage(data.collector[0].imageUrl)
						.setURL(data.collector[0].videoUrl);
					message.channel.send({ embeds: [embed] });
				});
			} 
			// else if (messageParser.checkForInstagram(url)) {
			// 	let path = new URL(url).pathname;
			// 	let code = path.substring(3, path.length - 1)
			// 	instagramGetUrl(url).then((result) => {
			// 		console.log(result)
			// 		for (const url of result.url_list) {
			// 			let embed = new MessageEmbed()
			// 				.setTitle('Instagram Media')
			// 				.setColor(Math.random() > 0.5 ? '#F56040' : '#833AB4')
			// 				.setImage(url)
			// 				.setURL(url);
			// 			console.log(embed);
			// 			message.channel.send({ embeds: [embed] });
			// 		}
			// 	});
			// }
		}
	}
}