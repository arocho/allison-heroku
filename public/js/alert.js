$(document).ready(function(){
    $('.btnAddTask').click(function(){
        var msg = $('.txtInput').val();
        $('.txtInput').val('');
        
        $.post('/tasks', {
            task: msg
        });
        
        $('.listTasks').append(
            $('<li></li>')
                .addClass('list-group-item')
                .text(msg)
        );
    });
});