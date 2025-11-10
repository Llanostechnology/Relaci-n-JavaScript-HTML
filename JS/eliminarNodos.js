// Para eliminar nodos solamente tenemos que utilizar la función removeChild();

// ahora vamos a eliminar desde JavaScript el nodo del parrafo

var parrafo = document.getElementById("texto")

parrafo.parentNode.removeChild(parrafo);

// una regla para eliminar un nodo es hacerlo desde el nodo padre, por eso utilizamos parentNode.

