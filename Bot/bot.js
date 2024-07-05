const { Telegraf } = require("telegraf");
require('dotenv').config();

const TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) {
    throw new Error("BOT_TOKEN is not defined in the environment variables.");
}

const bot = new Telegraf(TOKEN);

const web_link = "https://dudufoodarmenia.netlify.app";
const image_url = "https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg"; // Replace with your image URL

bot.start((ctx) => {
    ctx.replyWithPhoto(image_url, {
        caption: "Welcome to the Food Delivery app! Press the button below to order now.",
        reply_markup: {
            keyboard: [[{ text: "Order now!", web_app: { url: web_link } }]],
        },
    });
});

bot.launch();
