const express=require('express');
var morgan = require('morgan')
const app=express();

//requiriendo rutas
const routes=require('./routes');
const routesApi=require('./routes-api')
//settings
app.set('appName','Mi primer Servidor');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(morgan('combined'));

//rutas
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req,res)=>{
    res.send("Archivo encontrado")
});


app.listen(3000, function(){
    console.log("Servidor funcionando")
    console.log("Nombre de la App: "+app.get('appName'))
});



