const { bot } = require("./start");
bot.start((ctx) => {
    let name = ctx.from.first_name;
    ctx.reply(`Hello ${name} Welcome to Coder Hub`);
});
