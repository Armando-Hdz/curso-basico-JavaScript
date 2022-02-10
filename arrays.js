var frutas = ["Manzana","Platano", "Cereza", "Fresa"];

console.log(frutas);
console.log(frutas.length); // IMPRIME LONGITUD DEL ARRAY
console.log(frutas[0]); //TRAE EL ELEMENTO ESCRITO DE ACUERDO AL INDEX DESDE 0 A N

var masFrutas = frutas.push("Uvas"); //Añade elementos al final del array
frutas // Agrega las Uvas al ARRAY "Frutas"

var ultimaFruta = frutas.pop("Uvas"); //Eliminar el ultimo elemento de la lista ARRAY

var nuevoFruta = frutas.unshift("Piña"); // Agrega al inicio del la lista ARRAY

var primerFruta = frutas.shift("Piña"); // Elimina la primer posicion de la Lista

var posicionFruta = frutas.indexOf("Cereza"); // Permite saber la posicion o index de un elemento en la lista