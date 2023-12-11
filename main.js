import { Markup, Telegraf } from 'telegraf'
import { message } from 'telegraf/filters'

const token = '6339371282:AAFu93_toqNn2Wcj7L0S4lJXmrIu1jvj2so'
const webAppUrl = 'https://ang-tg-app-eb995.web.app'

const bot = new Telegraf(token)

bot.command('start', ctx => {
	ctx.reply(
		'Welcome! Click on the button below to launch the application',
		Markup.keyboard([
			Markup.button.webApp('Send message', `${webAppUrl}/feedback`),
		])
	)
})

bot.on(message('web_app_data'), async ctx => {
	const data = ctx.webAppData.data.json()
	ctx.reply(`Ваше сообщение: ${data?.feedback}` ?? 'empty message')
})

bot.launch()
