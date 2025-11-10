// Otra forma que tenemos para seleccionar nodos es utilizando el id que se le puede asignar. Esta función podemos decir que accede de forma directa al nodo
var texto = document.getElementById("nombre");


//Esta función nos permite obtener todos los elementos de la página que sean de la etiqueta que indicamos

var parrafos = document.getElementsByTagName("p");

// la instrucción anterior obtiene todas las etiquetas "p" que tenemos en nuestro documento. Como pueden ser 10,000 elementos, puede ser ninguno, así que el valor que nos llega es un arreglo
// para acceder a un elemento del arreglo hacemos lo siguiente 

var primerap = parrafos[0];