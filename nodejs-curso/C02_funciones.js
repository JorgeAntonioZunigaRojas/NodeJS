const OperacionesMatematicas={};

function add(x1,x2){
    return x1 + x2;
}
function substract(x1,x2){
    return x1 - x2;
}

OperacionesMatematicas.sumar=add;
OperacionesMatematicas.restar=substract;

module.exports=OperacionesMatematicas;
