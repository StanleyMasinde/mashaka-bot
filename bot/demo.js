import Telegraf from 'telegraf';
import * as config from '../config';
/**
 * This is the center of all services
 * 
 */


const token = config.api_token;
const bot = new Telegraf(token)

bot.command('ban', (ctx)=>{
    const chatId = ctx.message.chat.id;
    const messageId = ctx.message.reply_to_message.message_id;

    bot.telegram.deleteMessage(chatId, messageId ).then(deleted => {
        console.log('deleted')
    })

    const user = ctx.message.from.id;
    ctx.telegram.kickChatMember(chatId, user, 30000)
})
    
    
