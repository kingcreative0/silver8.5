const Discord = require("discord.js");
const data = require("croxydb");


exports.run = async (client, message, args) => {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return;

  if (args[0] === "ayarla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (kanalbelirle)
      return message.channel.send(
        `Mesajı göndereceğim kanal zaten ayarlı: ${client.ayarlar.prefix}ticket-kanal sıfırla`
      );
    let kanal = message.mentions.channels.first();
    if (!args[1]) return message.channel.send(`Bir kanalı etiketlemelisin.`);
    if (!kanal)
      return message.channel.send(`Etiketlediğin kanalı bulamıyorum.`);
    data.set(`kanal.${message.guild.id}`, kanal.id);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setFooter( client.ayarlar.botİsim +" / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setDescription(
          `Mesajın kanalı başarıyla ayarlandı: ${client.ayarlar.prefix}ticket-mesaj gönder yazarak ticket kanal açma mesajını atabilirsin.`
        )
    );
  }

  if (args[0] === "sıfırla") {
    const kanalbelirle = await data.fetch(`kanal.${message.guild.id}`);
    if (!kanalbelirle)
      return message.channel.send(
        `Mesajı göndereceğim kanal zaten ayarlı değil: l!ticket-kanal sıfırla`
      );

    data.delete(`kanal.${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLUE")
        .setFooter( client.ayarlar.botİsim +" / Discord'da Yeni Devrim!", client.user.avatarURL())
        .setDescription(
          `Mesajın kanalı başarıyla sıfırlandı: ${client.ayarlar.botİsim}ticket-kanal ayarla #kanal`
        )
    );
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ticketkanal"],
  permLevel: 0
};

exports.help = {
  name: "ticket-kanal"
};