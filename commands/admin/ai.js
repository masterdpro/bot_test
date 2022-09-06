const { Configuration, OpenAIApi } = require("openai");
const guild = require("../../models/guild");

module.exports = {
    name: 'leave', 
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    devl: false,
    usage: 'leave [guild ID]',
    examples: ['leave 384284234823'],
    description: 'je quite :D',

    options: [
        {
            name: 'message',
            description: 'id de la guild',
            type: 'NUMBER',
            required: true,

        }
      ],

    async runInteraction(client, interaction, message) {
    const question = interaction.options.getNumber('message');

    guild.leave(question)
    console.log(`j'ai bien quitter le seveur ${question}}`);
    }
    
};
