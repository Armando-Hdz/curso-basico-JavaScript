var articulos = [
    {nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    {nombre: "Libro", costo: 220 },
    { nombre: "Celular", costo: 9000 },
    {nombre: "Laptop", costo: 15000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 300 },
];

var articuloBaratos = articulos.some(function(articulo){ //SOLO REGRESA UN FALSO O VERDADERO (SI SE CUMPLE O NO LA CONDICION)
    return articulo.costo <= 700;
});

articuloBaratos;