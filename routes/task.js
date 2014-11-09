var service = require('../services/task');

//exports allow you to access the method from outside this file
exports.list = function(req, res){
    //sends a json of the service.getTasks
    res.send(service.getTasks(req.session));
}

exports.create = function(req, res){
    //calls the addTask method
    //param method gets data from query string or body
    service.addTask(req.session, req.param('task'));
    res.status(200).end();
}