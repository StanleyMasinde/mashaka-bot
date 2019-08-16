const { bot } = require("./start");
bot.help((ctx) => {
    let userName = ctx.message.from.first_name;

    ctx.reply(`
    Hi ${userName}. I am glad you asked for my help. I'll do my best to make that
    happen. please use the commands below
    `)
})
