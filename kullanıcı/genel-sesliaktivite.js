const Discord = require("discord.js");
const client = new(require("discord.js").Client)
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch')
const database = require('croxydb');
const db = require('croxydb');

exports.run = async (client, message, args) => {
  if(!message.member.voice.channel) return message.channel.send('Bir sesli kanala gir!')
if(!args[0]) return message.channel.send('Yanlış kullanım. Doğru kullanım: u!sesli-aktivite yt/bio/pn/fio')
if(args[0] == 'yt') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin. Eğer çalışmıyorsa 100 sunucu sınırında olabilirsin.`)
                    embed.setColor("BLUE")
                    embed.setFooter( client.ayarlar.botİsim + " / Discord'da Yeni Devrim!", client.user.avatarURL())
                        message.channel.send(embed)
                })
} else if(args[0] == 'bio') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                  method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                       target_application_id: "773336526917861400",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin. Eğer çalışmıyorsa 100 sunucu sınırında olabilirsin.`)
                    embed.setColor("BLUE")
                    embed.setFooter( client.ayarlar.botİsim + " / Discord'da Yeni Devrim!", client.user.avatarURL())
                        message.channel.send(embed)
                })
} else if(args[0] == 'pn') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
                  method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755827207812677713",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin. Eğer çalışmıyorsa 100 sunucu sınırında olabilirsin.`)
                    embed.setColor("BLUE")
                    embed.setFooter( client.ayarlar.botİsim + " / Discord'da Yeni Devrim!", client.user.avatarURL())
                        message.channel.send(embed)
                })
} else if(args[0] == 'fio') {
const embed = new MessageEmbed()
fetch(`https://discord.com/api/v8/channels/${message.member.voice.channel.id}/invites`, {
             method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "814288819477020702",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setDescription(`[${message.member.voice.channel.name}](https://discord.gg/${invite.code})\n> Tıklayarak aktif hale getirebilirsin. Eğer çalışmıyorsa 100 sunucu sınırında olabilirsin.`)
                    embed.setColor("BLUE")
                    embed.setFooter( client.ayarlar.botİsim + " / Discord'da Yeni Devrim!", client.user.avatarURL())
                        message.channel.send(embed)
                })
} else {
  const embed = new MessageEmbed()
  embed.setDescription(`Geçersiz Değer, değerler:\nYoutube: yt\nBetrayal.io: bio\nPoker Night: pn\nFishington.io: fio`)
  embed.setColor('BLUE')
  embed.setFooter( client.ayarlar.botİsim + " / Discord'da Yeni Devrim!", client.user.avatarURL())
  message.channel.send(embed)
}

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sesliaktivite"],
  permLevel: 0
};

exports.help = {
  name: 'sesli-aktivite',
  description: 'Ses kanalında youtube oyun v.s açmanıza yarar',
  usage: 'ses'
};