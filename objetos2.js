/*var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};*/

// FUNCION CONSTRUCTORA
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);

autoNuevo;

var autoNuevo2 = new auto("Tesla", "Model X", 2021);
var autoNuevo3 = new auto("Chevrolet", "Aveo", 2019);

autoNuevo2;
autoNuevo3;

//RETO - HACER UN CREADOR DE LISTA DE CARROS CON UN CICLO Y FUNCION CONSTRUCTORA