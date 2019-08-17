import Telegraf from 'telegraf';
import * as config from '../config';
/**
 * This is the center of all services
 * 
 */


const token = config.api_token;
const bot = new Telegraf(token)

bot.start((ctx) => {
    let name = ctx.from.first_name;
    ctx.replyWithMarkdown(
        `Hi there **${name}**, I hope you are doing greate today.
        I am an a multi-purpose to help you in your daily activities on telegram
        Visit my page [here](https://github.com/stannlee/mashaka-bot).
        `
    )
});
    
