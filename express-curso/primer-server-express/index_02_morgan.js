const express=require('express');
var morgan = require('morgan')
const app=express();


app.listen(3000, function(){
    console.log("Servidor funcionando")
});

//Middlewarses: Funciones intermedias en express -> Son funciones que permiten manejar las peticiones que el usuario hace al servidor.
app.use(morgan('dev'));

//Rutasssss
//->app.get('/', function(req,res)  Se ejecuta cuando el servidor recibe una peticion GET, respondemos con una funcion flecha asincrona
//->app.get('/login', (req,res)=>   Se ejecuta cuando el servidor recibe una peticion GET, respondemos con una funcion flecha asincrona
app.get('/', function(req,res){     //Ruta que se muestra por defecto [ http://localhost:3000 ]
    res.send("Hola Mundo");
});

app.get('/login', (req,res)=>{          //Ruta: [ http://localhost:3000/login ]
    res.send("Aki va el login")
});

app.get('*', (req,res)=>{               //Ruta: [ Se muestra cuando ingresan una ruta no existente ]
    res.send("Archivo encontrado")
});


/*
//Conexion sin usar Express
const http=require('http');
http.createServer((req,res)=>{
    res.end("Hello world")
}).listen(3000)
*/