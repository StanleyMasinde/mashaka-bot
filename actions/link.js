const { bot } = require('../bot/start')


bot.command('link', (ctx) => {
    let username = ctx.message.from.first_name
    let chatType = ctx.chat.type
    let link = ctx.message.chat.invite_link

    if (chatType === "group" || chatType === "supergroup") {
        ctx.reply(
            `Here you go ${username} ${link}`
        )
    } else {
        ctx.reply(
            `Sorry ${username} this command only works in groups`
        )
    }
})