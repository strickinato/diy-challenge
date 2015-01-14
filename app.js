var express = require('express'),
    exphbs  = require('express-handlebars'),
    router = require('./routes/router');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.use('/', router)

app.use(function(req, res) {
  res.status(400);
  res.render('layouts/404', {title: '404: File Not Found'});
});


app.listen(3000);
