var express = require('express'),
    router = require('./router');

var app = express();

app.set('view engine', 'ejs');

app.use('/', router)

app.listen(3000);
