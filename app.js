var app = require('./config/server');

var server = app.listen(3000, function(){
    console.log('servidor online');
});

var io = require('socket.io').listen(server);

app.set();

io.on('connection',function(socket){
    console.log('oi');
    socket.on('disconnect',function(){
        console.log('Usuário desconectou'); 
    });

});