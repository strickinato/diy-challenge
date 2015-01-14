var express = require('express'),
diy = require('diy')('*'),
router = express.Router();



router.get('/:skillname', function(req, res) {
  var skillURL = req.params.skillname
  var skillRequest = diy({
    method: 'GET',
    uri:    '/skills/' + skillURL
  }, function(err, body){
    if (err) return function(err) {
      res.send(404)
    }

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
