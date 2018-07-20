const Eris = require('eris');
 
const bot = new Eris(process.env.NDY5OTkzMzY5MDcwNzMxMjk0DjP4MQyaHEZ3FtNw7bR6eCp52hFXrhd5Q);   // Replace DISCORD_BOT_TOKEN in .env with your bot accounts token
 
bot.on('ready', () => {                                // When the bot is ready
    console.log('Ready!');                             // Log "Ready!"
});
 
bot.on('messageCreate', (msg) => {                     // When a message is created
    if(msg.content.includes('lancer')) {                 // If the message content includes "1337"
        bot.createMessage(msg.channel.id, 'go away lancer! no one like you!');  // Send a message in the same channel with "damn it"
    }
});
 
bot.connect();                                         // Get the bot to connect to Discord