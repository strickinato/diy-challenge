var express = require('express'),
    diy = require('diy')('*'),
    router = express.Router();



router.get('/', function(req, res) {
  var request = diy({
    method: 'GET',
    uri:    '/skills?limit=0',
  }, function(err, body){
    console.log(body.response)
    res.render('index', { skills: body.response });
  });

});



module.exports = router;
