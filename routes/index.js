var express = require('express');
var router = express.Router();

/* GET home page. <3 */
router.get('/', function(req, res) {
  res.render('index.jade', 
             {
                title: 'Allison Arocho'
             });
});

module.exports = router;