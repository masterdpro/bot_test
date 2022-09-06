const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'google', 
    category: 'utils',
    permissions:['SEND_MESSAGES'],
    ownerOnly: true,
    devl: false,
    usage: 'ping',
    examples: ['ping'],
    description: 'commande pour obtenir la latence du bot',
    async run (client, message, args) {
    },
    options: [
        {
            name: 'recherche',
            description: 'ecris se que tu veux rechercher. (remplace tes espaces par %20 exemple: je%20suis%20beau)',
            type: 'STRING',
            required: true,
    
        },
      ],
    
    async runInteraction( client, interaction)  {

        const text = interaction.options.getString('achivement');

        const embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle('►voici ta recherche google◄')
        .setURL(`https://www.google.ca/search?q=${text}&hl=fr&sxsrf=ALiCzsZyXh06cQgab1XrvluFe-xU3F7qvQ%3A1660397534038&source=hp&ei=3af3Yr-dO8KdptQP4v6CiAc&iflsig=AJiK0e8AAAAAYve17kxzbo4EJOFTLU9WBiwJnL2bxzat&ved=0ahUKEwj__8rp9sP5AhXCjokEHWK_AHEQ4dUDCAk&uact=5&oq=allo&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAgAEEMyEAguELEDEIMBEMcBENEDEEMyBAgAEEMyBAgAEEMyCgguEMcBENEDEEMyBAgAEEMyBAgAEEMyBwguENQCEEMyCAgAEIAEELEDOgcIIxDqAhAnOgQIIxAnOhEILhCABBCxAxCDARDHARDRAzoLCAAQgAQQsQMQgwE6CAguELEDEIMBOggIABCxAxCDAToOCC4QgAQQsQMQxwEQ0QM6CggAELEDEIMBEEM6BAguEEM6BQgAEIAEOgUILhCABFD2EljsF2D6GWgEcAB4AIABvQGIAeMDkgEDMi4ymAEAoAEBsAEK&sclient=gws-wiz`)
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL()});

        interaction.reply({embeds: [embed]})
    }
 }