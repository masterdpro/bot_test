const { MessageEmbed } = require('discord.js');
const {MessageModal } = require('discord.js');

module.exports = {
    name: 'invite', 
    category: 'user',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: false,
    usage: 'invite',
    examples: ['invite'],
    description: 'voir ton nombre d\'invitation',
    runInteraction (client, interaction)  {
        const embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle('voici ton nombre total d\'invitation')
        .setDescription('tu as **143** invitation \n || nah la commande est toujours en devloppement, je t\'invite a faire /invtes sa marche mieux ^^ ||')
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});
        interaction.reply({ embeds: [embed] });
        
    }
 };
 