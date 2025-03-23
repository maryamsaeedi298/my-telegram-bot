const TelegramBot = require('node-telegram-bot-api');
const token = "7696647315:AAHkPyJEJHqaGxiN9BhMq_fxA50U_IheMKg";
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;
    bot.sendMessage(chatId, `شما گفتید: ${message}`);
});

console.log("ربات فعال شد!");
