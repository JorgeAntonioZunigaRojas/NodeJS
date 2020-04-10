const express=require('express');
const server=express();

server.get('/', function(req,res){
    res.send('<h3>Hola Mundo con express y NodJS<h3/>')
})

server.listen(3000,function(){
    console.log('server on port 3000');
});
