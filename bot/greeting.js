const { bot } = require("./start");
bot.start((ctx) => {
    let name = ctx.from.first_name;
    ctx.replyWithMarkdown(
        `Hi there **${name}**, I hope you are doing greate today. I am an a multi-purpose to help you in your daily activities on telegram. Visit my page [here](https://stannlee.github.io/mashaka-bot).
        Need any Please Visit [This Group](https://t.me/programmers_hub) with your queries or contact [Stanley](https://t.me/stannlee)`
    )
})