const help = (ctx) => {
    let chatType = ctx.chat.type
    let userName = ctx.message.from.first_name
    let chatName = ctx.chat.title

    if (chatType !== 'private') {
        ctx.getChatAdministrators().then(admins => {
            let admintrators = admins.map((adm, index) => {
                return `${index + 1}. ${adm.user.first_name} - @${adm.user.username}\n`
            })

            ctx.replyWithHTML(
                `
                Please Contact any of these admins from more info about ${chatName} \n${admintrators.join('')}
                `
            )
        }).catch(err => {
            ctx.reply(err)
        })
        return
    }

    ctx.replyWithHTML(`
    Hello <b>${userName}</b>. I am Mashaka and I do almost everything. Just add me to your group and you are set \n You can test me out at https://t.me/tests_bystan`)
}

export default help
