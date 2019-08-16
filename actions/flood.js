const rateLimit = require('telegraf-ratelimit')
const config = require('../config');
const { bot } = require("../bot/start");

// Set limit to 1 message per 3 seconds
const limitConfig = {
  window: 3000,
  limit: config.flood_limit,
  onLimitExceeded: (ctx, next) => {
    const chatId = ctx.message.chat.id;
    const user = ctx.message.from.first_name
    const username = ctx.message.from.username;
    const userid = ctx.message.from.id;
    let mentionUser = ""
    function mention(){
        if (username) {
            mentionUser = `@${username}`
        } else {
            mentionUser = user;
        }
    }
    mention()
    ctx.reply(
        `Hey ${mentionUser} I don't like your flooding. Please stop`
    )
    ctx.telegram.kickChatMember(chatId, userid, 35000)
  }
}
bot.use(rateLimit(limitConfig))