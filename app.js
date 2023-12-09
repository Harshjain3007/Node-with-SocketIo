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

//var users =0 
//io.on('connection',function(socket){
   // console.log('A user connected');
      // users++
       //io.sockets.emit('broadcast',{message:users + 'users connected!'})
    //    socket.emit('newuserconnect',{message:'Hey welcome dear'})
    //    socket.broadcast.emit('newuserconnect',{message:users+"users connected!"})
    // setTimeout(function(){
    //      // socket.send('send message from server side by prereserved event')
    //      socket.emit('myCustomEvent',{description:'A custom message from server side'});
    // },3000)

    // socket.on('myCustomEventFromClientSide',function(data){
    //     console.log(data);
    // })

    // io.emit('testEvent',"TesterEvent call")

    // socket.on('disconnect',function(){
    //     console.log('A user disconnected');
    //     users--
    //     io.sockets.emit('broadcast',{message:users + 'users connected!'}) 
    // })
    
//})

//var cnsp = io.of('/custom-namespace');

// cnsp.on('connection',function(socket){
//     console.log('A user connected');
    
// cnsp.emit('customEvent',"TesterEvent call")

    // socket.on('disconnect',function(){
    //     console.log('A user disconnected');
       // users--
    //     io.sockets.emit('broadcast',{message:users + 'users connected!'}) 
    // })
    
//})

var roomno =1
var full = 0

io.on('connection',function(socket){
    console.log('A user connected');
    socket.join("room-"+roomno)
    io.sockets.in("room-"+roomno).emit('connectedRoom',"You are connected to room no ."+roomno)
        
    full++
    if(full>=2){
        full=0
        roomno++
    }
    
    socket.on('disconnect',function(){
        console.log('A user disconnected',"You are connected to room no. "+roomno);
    })
})

http.listen(3000,function(){
    console.log('server ready on 3000');
})

