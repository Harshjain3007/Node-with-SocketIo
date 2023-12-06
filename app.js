var app =require('express')()
var http=require('http').Server(app)
var io = require('socket.io')(http)

var path = require('path')


app.get('/',function(req,res){
    var options ={
      root: path.join(__dirname)
    }
       var fileName = 'index.html'
       res.sendFile(fileName,options)
})

io.on('connection',function(socket){
    console.log('A user connected');

    socket.on('disconnect',function(){
        console.log('A user disconnected');
    })
    
})

http.listen(3000,function(){
    console.log('server ready on 3000');
})

