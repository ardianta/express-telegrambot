// server.js
// where your node app starts
// init project
var express = require('express');
var request = require('request');
var app = express();

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const API_URL = "https://api.telegram.org/bot" + TELEGRAM_TOKEN;

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use('/', require('./routes/message'));


app.get("/", function (req, res) {
  var update = request.body;
  request.post(API_URL + '/sendMessage')
        .form({
              'chat_id': update.message.chat.id,
              'text': 'Anda mengirim: ' + update.message.text
    });
});

