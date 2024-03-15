import { config } from "dotenv";
 config();
import TelegramBot from "node-telegram-bot-api";
//const botToken = new Bot(process.env.BOT_API_KEY)
//const testKey = "6469a721bede21a8ed89";
//import stripe from "stripe";
//import axios from "axios";

//const botToken = "6985342414:AAFxpkOhbpnMLBgpI_j9AX_jrHIuNwQrmug";

//const chatId = "1227459883";
const webAppUrl = "https://biznewschannel.com/";

const bot = new TelegramBot(process.env.BOT_API_KEY)


bot.on("message", async (msg) => {
  
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    await bot.sendMessage(
      chatId,
      `<i>Вас приветствует</i> <b>SettingNewsBot - бот для постинга</b><i> последних новостей ,публикаций и статей </i> <b><a href="https://biznewschannel.com/video">подробнее на сайте</a></b>`,
      {
        parse_mode: "HTML",
        reply_markup: {
          keyboard: [
            [
             

              { text: "🌐 Оплата криптой" },
              { text: "📰 Постинг", web_app: { url: webAppUrl } },
            ],
            [{ text: "💳 Оплатить стандарт" }],
            [{ text: "🔍 Запрос к API Crypto Pay" }],
            
            [{ text: "Создать счет", callback_data: "create_invoice" }],
            
            [{ text: "Закрыть" }],
          ],
        },
      }
    );
  }
});


 bot.startPolling();
