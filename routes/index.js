var express = require('express');
var router = express.Router();
var service = require('../services/task');

/* GET home page. <3 */
router.get('/', function(req, res) {
  res.render('index.jade', 
             {
                title: 'Task Manager',
                tasks: service.getTasks(req.session)
             });
});

module.exports = router;
