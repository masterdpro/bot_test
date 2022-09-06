const discord = require("discord.js");
const sourcebin = require("sourcebin_js")
const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK
const fs = require('fs');

module.exports = {
    name: "test",
    category: "fun",
    permissions: ['ADMINISTRATOR'], 
    ownerOnly: false,
    devl: false,
    usage: "ascii <text>",
    examples: "allo",
    description: "Returns provided text in ascii format.",
   async run(client, message, args)  {
    message.delete();
    const Content = args.join(" ");
    let text = args.join(" ");
    if(!text) {
 return message.channel.send("ajoute le text")
 }
    let maxlen = 20
 if(text.length > 20) {
 return message.channel.send("met un text de moins de 20 characters")
 }
 
const bo =figlet(text, function(err, data) {
 const gros = (
 `
 ${data}
 `
 , {
 code: `AsciiArt`
 });
 })
    sourcebin
      .create([
        {
          title: "JavaScript code",
          description: 'This code was created in "' + message.createdAt + '"',
          name: "Made By " + message.author.username,
          content: bo,
          languageId: "JavaScript"
        }
      ])
      .then(src => {
        let embed = new discord.MessageEmbed()
          .setTitle(`Hastebin`)
          .setColor("RANDOM")
          .setDescription(`Code:\n${bo}\n\n**[Click Here](${src.url})**`);
        message.channel.send({ embeds: [embed] });
      })
      .catch(e => {
        message.channel.send(`Error, try again later`);
      });

   },

   options: [
    {
        name: 'titre',
        description: 'titre de la page',
        type: 'STRING',
        required: true,

    },
    {
        name: 'nom',
        description: 'le gros message',
        type: 'STRING',
        required: true,

    },
    {
        name: 'long',
        description: 'paragraph',
        type: 'STRING',
        required: true,

    },
    {
        name: 'fichier',
        description: 'nom du fichier',
        type: 'STRING',
        required: true,

    }
  ],

   async runInteraction(client, interaction, args) {



    const options = interaction.options.getString('titre');
    const nom  = interaction.options.getString('nom');
    const long = interaction.options.getString('long');
    const fichier = interaction.options.getString('fichier');

    fs.writeFileSync(`${fichier}.html`, `<!DOCTYPE html> \n <html> \n <head> \n <title> ${options} </title> \n </head> \n <body> \n <h1>${nom}</h1> \n <p>${long}</p> \n </body> \n </html> `)
    console.log('fichier creer') 
    interaction.reply(`fichier: ${fichier} a bien été creer`)


   }
};
