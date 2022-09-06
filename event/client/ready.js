const { MessageEmbed, BaseGuildTextChannel } = require('discord.js');
const logger = require('../../utils/logger');
const dayjs = require('dayjs');
const date = Date.now();
const date2 = new Date();
const months = ["janvier", "fevrier", "mars", "avril","mai", "juin", "juillet", "septembre", "octobre", "novembre", "decembre"]
const {argv} = require('process');


module.exports = {
   name: 'ready', 
   once: true,
   async execute(client, message) {
       logger.client('- it working');
       const salonlog = client.channels.cache.get('986020171858731069');
       const mcount = (`${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}`)
       const options = argv[2];
       const mChannel = client.channels.cache.get('932842971169173514');
       salonlog.send(`
       \`\`\`
       plume-bot présantement en fonction depuis ${dayjs().format('DD')} ${months[date2.getMonth()]}
       \`\`\`
       `); 
       client.user.setStatus('idle');
       client.user.setActivity(`${mcount} membres, /plume `, {type: 'WATCHING'});
      //const devGuild = client.guilds.cache.get('807434421279916034');
       logger.client(typeof devGuild)
       //devGuild.commands.set(client.commands.map(cmd => cmd))
       client.application.commands.set(client.commands.map(cmd => cmd))
       logger.serveur(`en ligne sur ${client.guilds.cache.size} serveur`)
       logger.serveur(`regard ${mcount} utilisateur`)
      
   },
 }