const { re } = require("mathjs");

module.exports = {
    name: ('lc', 'lovecalc'),
    category: 'utils',
    permissions:['SEND_MESSAGES'],
    ownerOnly: false,
    devl: true,
    usage: '8ball [ta question]',
    examples: ['8ball [je suis beau]'],
    description: 'donner des reponses',
   async run(client, message, args)  {
    message.channel.send('utilise les /')
    },
    
        options: [
            {
                name: 'cible',
                description: 'personne avec qui tu veux calculer ton amour',
                type: 'USER',
                required: true,
    
            }
        ],
        async runInteraction (client, interaction) {
        const target = interaction.options.getUser('cible');
    
        //const eightball = require('8ball')()
        let replies = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74","75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100",];
        let result = Math.floor((Math.random() * replies.length));   
        interaction.reply(`${interaction.user.username} et ${target} avez ${ result}% de chance de finir ensembles.`)
        }}