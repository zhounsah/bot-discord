const Discord = require('discord.js');

const { prefix, token } = require('./config.json');
 
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Le bot est prêt !');
});

client.on('message', (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.lenght).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (command === `ping`) {
        message.channel.send('Pong.');
    }
    else if (command === `server`) {
        message.channel.send(`Nom du serveur : ${message.guild.name}\nNombre d'utilisateurs : ${message.guild.memberCount}`);
    }
    else if (command === `avatar`) {
        if (!message.mentions.users.size) {
            return message.channel.send(`Votre avatar est : ${message.author.displayAvatarURL({format: 'png'})}`);
        }

        const avatarList = message.mentions.users.map(user=> {
            return `L'avatar de ${user.username} est : ${user.displayAvatarURL({ format: 'png'})}`;
        });
        
        message.channel.send(avatarList);
    }
});

client.login(token);