var express = require('express'),
    exphbs  = require('express-handlebars'),
    router = require('./router');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use('/', router)

app.listen(3000);
