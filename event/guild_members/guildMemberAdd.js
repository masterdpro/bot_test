
const { MessageEmbed} = require('discord.js');

module.exports = {
    name: 'guildMemberAdd', 
    once: false,
   async execute(client, member){

        const embed = new MessageEmbed()
            .setAuthor({name: `${member.user.tag}`, iconURL: member.user.displayAvatarURL() })
            .setColor (RANDOM)
            .setDescription(` bienvenue a toi ${member.user} passe un bon en tant que pro ;)
            φ nom d'utilisateur: ${member}
            φ créé le : <t:${parseInt(member.user.createdTimestamp / 1000)}:f>  (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
            φ rejoins le: <t:${parseInt(member.joinedTimestamp / 1000)}:f>  (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)
            `)
            .setTimestamp()
            .setFooter({ text: 'la belle personne a rejoint'});
        
        const wlcChannel = client.channels.cache.get('970796880252534814');
        wlcChannel.send({ embeds: [embed] });
    },
 };