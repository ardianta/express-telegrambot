var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');

var app = express();

const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const API_URL = "https://api.telegram.org/bot" + TELEGRAM_TOKEN;

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.post("/", function (req, res) {
  
  res.sendStatus(200);
  var update = req.body;
  request.post(API_URL + '/sendMessage')
        .form({
          'chat_id': update.message.chat.id,
          'text': 'Anda mengirim: ' + update.message.text
    });
  
  console.log(req.body);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});