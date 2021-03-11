var avatarsMiddleware = require('adorable-avatars');

var express = require('express');
var app = express();

app.use('/', avatarsMiddleware);

app.get('/', (req, res) => {
    res.send('Hosted by r-services.eu by https://github.com/adorableio/avatars-api-middleware')
})

app.listen(80)