var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ msg: 'I am a great API!' });
});

module.exports = router;
