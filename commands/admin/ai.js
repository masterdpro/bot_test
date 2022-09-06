const { Configuration, OpenAIApi } = require("openai");

module.exports = {
    name: 'ai', 
    category: 'admin',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: true,
    devl: false,
    usage: 'say [message que tu veux que je dise]',
    examples: ['say je suis le meilleur'],
    description: 'je revois le message que tu me demande de dire',

    options: [
        {
            name: 'message',
            description: 'message que tu veux que je dise',
            type: 'STRING',
            required: true,

        }
      ],

    async runInteraction(client, interaction, message) {
    const question = interaction.options.getString('message');

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
       const openai = new OpenAIApi(configuration);
       

       const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?\nHuman: "`,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      });

    interaction.channel.send(`${completion.data.choices[0].text}`); 
    console.log(completion.data.choices[0].text);
    }
    
};
