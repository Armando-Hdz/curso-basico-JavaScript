var miAuto = {
    marca: "Toyota",
    modelo: "Corola",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
}

miAuto.annio;  //ASI SE ACCEDE A LAS PROPIEDADES DEL OBJETO
miAuto.marca;  //ASI SE ACCEDE A LAS PROPIEDADES DEL OBJETO
miAuto.modelo; //ASI SE ACCEDE A LAS PROPIEDADES DEL OBJETO

miAuto.detalleDelAuto(); // ASI SE ACCEDE A LA FUNCION