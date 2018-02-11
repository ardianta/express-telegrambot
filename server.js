// server.js
// where your node app starts

const TelegramBotClient = require('telegram-bot-client');
const client = new TelegramBotClient(process.env.TELEGRAM_BOT_TOKEN);


// init project
var express = require('express');
var app = express();


// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

client.setWebhook('https://quark-peripheral.glitch.me/');
app.use('/', require('./routes/message'));


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

