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

    // setTimeout(function(){
    //      // socket.send('send message from server side by prereserved event')
    //      socket.emit('myCustomEvent',{description:'A custom message from server side'});
    // },3000)

    socket.on('myCustomEventFromClientSide',function(data){
        console.log(data);
    })

    socket.on('disconnect',function(){
        console.log('A user disconnected');
    })
    
})

http.listen(3000,function(){
    console.log('server ready on 3000');
})

