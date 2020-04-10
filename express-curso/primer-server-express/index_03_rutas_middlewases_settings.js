const express=require('express');
var morgan = require('morgan')
const app=express();

//settings
app.set('appName','Mi primer Servidor');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(3000, function(){
    console.log("Servidor funcionando")
    console.log("Nombre de la App: "+app.get('appName'))
});

//Middlewarses: Funciones intermedias en express -> Son funciones que permiten manejar las peticiones que el usuario hace al servidor.
app.use(morgan('combined'));

//Rutasssss
//->app.get('/', function(req,res)  Se ejecuta cuando el servidor recibe una peticion GET, respondemos con una funcion flecha asincrona
//->app.get('/login', (req,res)=>   Se ejecuta cuando el servidor recibe una peticion GET, respondemos con una funcion flecha asincrona
app.get('/', (req,res)=>{     //Ruta que se muestra por defecto [ http://localhost:3000 ]
    res.render('index.ejs');
});

app.get('/login', (req,res)=>{          //Ruta: [ http://localhost:3000/login ]
    res.render('login.ejs')
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