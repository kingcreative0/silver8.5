const Discord = require('discord.js');
const db = require("quick.db")

exports.run = (client, message, args) => {
    const umutbey = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(client.ayarlar.botİsim, client.user.avatarURL) 
.setThumbnail(client.user.avatarURL)
.setDescription(`
 Sunucunuza ` + client.ayarlar.botİsim + ` botunu eklemek istiyorsaniz

 **  Davet Linki ** [➾ Bot Davet Linki](https://discord.com/api/oauth2/authorize?client_id=981655993039593532&permissions=8&scope=bot)
 ** Botun Sitesi ** [➾ Yakında..`)
.setFooter(`${client.user.username} - Tüm hakları saklıdır.`, client.user.avatarURL)
.setImage('')
    .setTimestamp()
    message.channel.send(umutbey).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'davet',
      category: 'bY Selçuk',
      description: 'CODE SELCUK.',
};