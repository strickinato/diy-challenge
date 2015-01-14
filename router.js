var express = require('express'),
    diy = require('diy')('*'),
    router = express.Router();


router.get('/', function(req, res) {
  var skillName = req.path
  var request = diy({
    method: 'GET',
    uri:    '/skills'
  }, function(err, body){
    console.log(body.response)
    res.render('index', { url: body.response });
  });

});

module.exports = router;
