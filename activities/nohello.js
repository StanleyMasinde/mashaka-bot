const nohello = (ctx) => {
    let user = ctx.message.from.first_name
    ctx.reply(`Hey ${user}, There is no need for greetings. Just state your business 🤦`)
}

export default nohello