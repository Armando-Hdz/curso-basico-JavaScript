var articulos = [
    {nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    {nombre: "Libro", costo: 220 },
    { nombre: "Celular", costo: 9000 },
    {nombre: "Laptop", costo: 15000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 300 },
];

articulos.forEach(function(articulo){
    console.log(articulo.nombre, articulo.costo);
});