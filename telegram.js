const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '5170198483:AAHOc6Tz2sLkHnfmtmu1iZSYGWSmMJobLaM'

const bot = new TelegramBot(TOKEN, { polling: true })
const sendTelegramMessage = (chatId, message) => {
    return bot.sendMessage(chatId, message)
}

bot.onText(/\/test (.+)/, async (msg, match) => {
    try {
        let msgRes = match[1]

        // send message
        await bot.sendMessage(msg.chat.id, msgRes)
        console.log(`telegramUtil] now to:${msg.chat.id}`)
    } catch (e) {
        console.log('telegramUtil] pushTelegram err:', e.toString)
        throw e
    }
})

module.exports = sendTelegramMessage