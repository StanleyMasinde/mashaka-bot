const Telegraf = require('telegraf');
const config = require('../config');
/**
 * This is the center of all services
 * 
 */


const token = config.api_token;
const bot = new Telegraf(token);

exports.bot = bot;

    bot.launch()
    bot.startPolling()

require('./greeting')
require('./help')
require('../actions/flood')
require('../actions/link')
require('../actions/delete')