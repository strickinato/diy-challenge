var express = require('express'),
    diy = require('diy')('*')

var app = express();

app.set('view engine', 'ejs');

app.get('*', function(req, res) {
  var skillName = req.path
  var request = diy({
    method: 'GET',
    uri:    '/skills' + skillName
  }, function(err, body){
    console.log(err)
    res.render('index', { url: body.response.images.large });
  });

});

app.listen(3000);
//
// var display = function(body) {
//   console.log(body.response.images.large);
//   document.body.innerHTML = "<img src='" + body.response.images.large +"'>"
// }
