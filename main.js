const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();
const { Client, Intents } = require('discord.js');

const myIntents = new Intents();
myIntents.add('GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILDS');
const client = new Client({ intents: myIntents });

const eventFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));

for (file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}
ODc3NDg0ODE5ODAwNTIyNzky.GgO0na.U9DgAAP-6QXSGEp7FQ8HnOfhjw8RRQLl2J_zXs

client.login(process.env.TOKEN);