
const { MessageEmbed} = require('discord.js');

module.exports = {
    name: 'guildMemberAdd', 
    once: false,
   async execute(client, member){

        const embed = new MessageEmbed()
            .setAuthor({name: `${member.user.tag}`, iconURL: member.user.displayAvatarURL() })
            .setColor ("RANDOM")
            .setDescription(` bienvenue a toi ${member.user} passe un bon en tant que pro ;)
            tu es sur discord depuis (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>) wow <:kanna_wow:1016847484363997274> \n va jeter un coup d'oeil sur <#807450039165255710> pour voir les regles <:yay:1013885224200974437>
            `)
            .setTimestamp()
            .setFooter({ text: 'la belle personne a rejoint'});
        
        const wlcChannel = client.channels.cache.get('807642475187142678');
        wlcChannel.send({ embeds: [embed] });
    },
 };