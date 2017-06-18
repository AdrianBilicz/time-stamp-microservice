var express = require('express');
var router = express.Router();
var moment = require('moment')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/:time', function(req,res){

	function unixToNatural(unix){

		var date = moment(unix).format('LL')
		return date
	}

	if (!isNaN(req.params.time)) {
		var result = unixToNatural(req.params.time);
		var data = {unix: req.params.time, natural: result}
		res.json(data)
	}
})

module.exports = router;
