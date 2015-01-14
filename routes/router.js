var express = require('express'),
    diy = require('diy')('*'),
    router = express.Router();



router.get('/', function(req, res) {
  var request = diy({
    method: 'GET',
    uri:    '/skills?limit=0', //known small amount, not worried about huge query
  }, function(err, body){
    console.log(body.response)
    res.render('index', { skills: body.response });
  });

});

router.get('/:skillname', function(req, res, next) {
  var skillURL = req.params.skillname
  var skillRequest = diy({
    method: 'GET',
    uri:    '/skills/' + skillURL
  }, function(err, body){
    if (body.response.error || err) return next(err);
    var skill = body.response;
    var challengesRequest = diy({
      method: 'GET',
      uri:    '/skills/' + skillURL + '/challenges'
    }, function(err, body) {
      var challenges = body.response;
      res.render('show', {
        skill: skill,
        challenges: body.response
      });
    });
  });
});



module.exports = router;
