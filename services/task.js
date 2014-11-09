//Manage methods that deal with the session

//returns tasks array
exports.getTasks = function(session){
    if(!session.tasks)
        session.tasks = [];
    
    return session.tasks;
}

exports.addTask = function(session, task){
    if(!session.tasks)
        session.tasks = [];
    
    session.tasks.push(task);
}