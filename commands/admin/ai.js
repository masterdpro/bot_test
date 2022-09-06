const { Configuration, OpenAIApi } = require("openai");


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
            type: 'STRING',
            required: true,

        }
      ],

    async runInteraction(client, interaction, message) {
    const question = interaction.options.getString('message');
    const guild = client.guilds.cache.get(question);
    guild.leave(question)
    console.log(`j'ai bien quitter le seveur ${question}}`);
    }
    
};
