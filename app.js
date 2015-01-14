var express = require('express'),
    exphbs  = require('express-handlebars'),
    router = require('./routes/router'),
    skillRouter = require('./routes/skill-router');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use('/skills/', skillRouter)
app.use('/', router)

app.listen(3000);
