const { bot } = require('../bot/start')

bot.command('ban', (ctx)=>{
    const chatId = ctx.message.chat.id;
    const messageId = ctx.message.reply_to_message.message_id;

    const botMessageId = ctx.message.message_id;

    bot.telegram.deleteMessage(chatId, messageId ).then(deleted => {
        console.log('deleted')
    })

    bot.telegram.deleteMessage(chatId, botMessageId ).then(deleted => {
        console.log('deleted')
    })
})