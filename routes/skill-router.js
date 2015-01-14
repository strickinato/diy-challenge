var express = require('express'),
diy = require('diy')('*'),
router = express.Router();



router.get('/:skillname', function(req, res) {
  var skill = req.params.skillname
  var request = diy({
    method: 'GET',
    uri:    '/skills/'+ skill + '/challenges'
  }, function(err, body){
    res.render('show', { skills: body.response });
  });

});



module.exports = router;
