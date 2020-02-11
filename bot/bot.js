import Telegraf from 'telegraf'
import config from '../config.js'
import welcome from '../activities/welcome.js'
import nohello from '../activities/nohello.js'
import help from '../activities/help.js'


const { TOKEN } = config
const { GREETINGS } = config
const bot = new Telegraf(TOKEN)


bot.help(help)
bot.start(welcome)
bot.hears(GREETINGS, nohello)

bot.startPolling()


export default bot
