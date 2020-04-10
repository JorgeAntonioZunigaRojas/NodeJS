const os=require('os'); //El os módulo proporciona métodos y propiedades de utilidad relacionados con el sistema operativo.  Obtenga información sobre el sistema operativo de la computadora:
const fs=require('fs'); //El fsmódulo proporciona una API para interactuar con el sistema de archivos

console.log(os.hostname());
console.log(os.platform());

fs.writeFile('./texto.txt', 'linea 1', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo creado');
});

console.log("Ultima linea de codigo");
