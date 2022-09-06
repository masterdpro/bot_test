const discord = require("discord.js");
const figlet = require("figlet"); // MAKE SURE TO INSTALL FIGLET PACKAGE OR CODE WONT WORK


module.exports = {
    name: "giant",
    category: "fun",
    permissions: ['SEND_MESSAGES'], 
    ownerOnly: false,
    devl: false,
    usage: "ascii <text>",
    examples: "allo",
    description: "Returns provided text in ascii format.",
   async run(client, message, args)  {

   let text = args.join(" ");
   if(!text) {
return message.channel.send("ajoute le text")
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send("met un text de moins de 20 characters")
}

figlet(text, function(err, data) {
message.channel.send(`
\`\`\`
${data}
\`\`\``
, {
code: `AsciiArt`
});
})

    }
};
