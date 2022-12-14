   const Discord = require("discord.js")
const db = require("quick.db")
const moment = require('moment');
moment.locale('tr');
exports.run = async(client, message, args, prefix) => {
    if(!message.member.roles.cache.has(kayıtroll))  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**Bu Komutu Kullanmak İçin Gerekli Yetkiniz Yok!**`)
    let kişi = message.mentions.members.first()
    let isim = args.slice(1).join(" ")
    let tag = db.fetch(`kayıttag_${message.guild.id}`)
    let kayıtkanall = db.fetch(`kayıtkanal_${message.guild.id}`)
    let kayıtroll = db.fetch(`kayıtyetkilirol_${message.guild.id}`)
    let erkekroll = db.fetch(`kayıterkekrol_${message.guild.id}`)
    let alınacakroll = db.fetch(`kayıtalınacakrol_${message.guild.id}`)
    let kayıtkanal = message.guild.channels.cache.get(kayıtkanall)
    let yetkili = message.guild.roles.cache.get(kayıtroll)
    let erkekrol = message.guild.roles.cache.get(erkekroll)
    let alınacakrol = message.guild.roles.cache.get(alınacakroll)

    if(!tag) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Kayıt tagı ayarlanmamış!

        • | **${prefix}kayıttag ayarla tag**
        • | **${prefix}kayıttag sıfırla**
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(!alınacakrol) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Kayıt alınacak rolü ayarlanmamış!

        • | **${prefix}kayıtalınacakrol ayarla @rol**
        • | **${prefix}kayıtalınacakrol sıfırla**
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(!erkekrol) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Kayıt erkek rolü ayarlanmamış!

        • | **${prefix}kayıterkekrol ayarla @rol**
        • | **${prefix}kayıterkekrol sıfırla**
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(!yetkili) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Kayıt yetkili rolü ayarlanmamış!

        • | **${prefix}kayıtyetkilirol ayarla @rol**
        • | **${prefix}kayıtyetkilirol sıfırla**
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(!kayıtkanal) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Kayıt kanalı ayarlanmamış!

        • | **${prefix}kayıtkanal ayarla #kanal**
        • | **${prefix}kayıtkanal sıfırla**
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(!message.member.roles.cache.has(db.fetch(`kayıtyetkilirol_${message.guild.id}`))) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Kayıt yetkili rolüne sahip değilsin!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(message.channel.id !== db.fetch(`kayıtkanal_${message.guild.id}`)) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Bu kanal kayıt kanalı değil! (<#${db.fetch(`kayıtkanal_${message.guild.id}`)}> Kanalında kullanın.)
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(!kişi) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Lütfen bir kişi etiketle!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(!isim) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Lütfen bir isim belirt!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }
/*
   if(!yaş) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Lütfen bir yaş belirt!
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(yaş < 13) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Belirttiğiniz yaş 13'den az olmamalıdır! (Discord üzerinde ebeveyn izni olmadan 13 yaş altı kişilerin kullanımı yasaktır!)
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    if(yaş >= 130) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Belirttiğiniz yaş 130'den fazla olmamalıdır! (ortalama bir insanın max 100-120 yıl yaşadığını hesap edersek bu normal bir hatadır.)
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }
*/
    if(isim.startsWith(tag) || isim.includes(tag)) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
        .setColor(client.ayarlar.embedRenk)
        .setDescription(`
        Belirttiğiniz isim içerisinde **${tag}** Bulunmamalıdır! (kayıt edilince otomatik en başa koyacaktır tagı!)
        `)
        .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
        return message.channel.send(embed)
    }

    message.guild.members.cache.get(kişi.id).setNickname(`${tag} | ${isim}`)
    message.guild.members.cache.get(kişi.id).roles.add(erkekrol)
    message.guild.members.cache.get(kişi.id).roles.remove(alınacakrol)
    db.add(`erkekkayıt_${message.author.id}_${message.guild.id}`, 1)
    db.push(`kayıt_${message.author.id}_${message.guild.id}`, { kayıtTürü: "Erkek", kayıtEttiğiKişi: kişi.id, toplamKayıtSayısı: db.fetch(`erkekkayıt_${message.author.id}_${message.guild.id}`) + db.fetch(`kadınkayıt_${message.author.id}_${message.guild.id}`), kayıtZaman: moment(Date.now()).format('DD/MM/YYYY HH:mm') })


    if(db.fetch(`kayıtlog_${message.guild.id}`)) {
        const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
    Bir kişi **Erkek** olarak kayıt edildi!
    `)
    .addField("Kişi Bilgileri:", `
    • | Adı: **${tag} | ${isim}**
    • | ID: **${kişi.id}**
    `, true)
    .addField("Moderator Bilgileri:", `
    • | Adı: **${message.author.tag}**
    • | ID: **${message.author.id}**
    `, true)
    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
    return client.channels.cache.get(db.fetch(`kayıtlog_${message.guild.id}`)).send(embed)
    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${client.ayarlar.botİsim} Bot`, message.author.avatarURL({ dynamic: true }))
    .setColor(client.ayarlar.embedRenk)
    .setDescription(`
    Başarılı bir şekilde belirttiğiniz kişi **Erkek** olarak kayıt edildi!
    `)
    .addField("Kişi Bilgileri:", `
    • | Adı: **${tag} | ${isim}**
    • | ID: **${kişi.id}**
    `, true)
    .addField("Moderator Bilgileri:", `
    • | Adı: **${message.author.tag}**
    • | ID: **${message.author.id}**
    `, true)
    .setFooter(client.ayarlar.embedFooter, message.author.avatarURL({ dynamic: true }))
    return message.channel.send(embed)

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["e"]
}

exports.help = {
    name: "erkek",
    description: "belirtilen kişiyi erkek olarak kayıt edersiniz",
    usage: "erkek @kişi isim"
}