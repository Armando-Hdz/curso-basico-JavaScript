var edad = 18; 
if(edad === 18){
    console.log("Puedes votar, será tu 1ra votación");
}
else if(edad >18 ){
    console.log("Puedes votar nuevamente");
}
else{
    console.log("Aun no puedes votar");
}

//Operador Ternario
condition ? true : false;

var numero = 1;
var resultado = numero ===1 ? "Sí soy un UNO": "No soy UNO";
console.log(resultado)