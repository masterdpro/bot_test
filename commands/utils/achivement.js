const { MessageEmbed } = require("discord.js");
const { re } = require("mathjs");


module.exports = {
  name: "achiv",
  category: "utils",
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  devl: false,
  usage: 'achiv [message de ton achivement',
  examples: ['achive je suis le meilleur'],
  description: "faire un achivement",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setTitle("Nouvelle achivement debloquée !")
      .setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`
      );
    message.channel.send({embeds: [e],});
  },
  options: [
    {
        name: 'achivement',
        description: 'le nom de ton achivement',
        type: 'STRING',
        required: true,

    },
  ],

  runInteraction (clien, interaction, args) {
    

    let replies = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",];
        let result = Math.floor((Math.random() * replies.length));  
    const text = interaction.options.getString('achivement');
    const e = new MessageEmbed()
      .setTitle("Nouvelle achivement debloquée !")
      .setImage(
        `https://minecraftskinstealer.com/achievement/${result}/Achievement%20Get!/${text}`
      )
    interaction.reply({embeds: [e],});
  }
};