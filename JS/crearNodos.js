//En algunas ocasiones nos puede interesar crear nodos y debemos de entender que esto varía dependiendo del tipo dde nodo que vamos a crear. El manejo del DOM se puede considerar como algo avanzado en la programación de Javasript. Ya que el tema es muy amplio en este apartado sol nos centraremos en crear un nodo del tipo de Element como lo es la etiqueta <p>

//lo que vamos a hacer es lo siguiente:

// Crear el nodo p.
// Crear el nodo texto.
// Añadir el texto al nodo p
// Añadir el nodo p al documento

var parrafo = document.createElement("p");

// primero creamos un parrafo y le indicamos que es un elemento

var texto = document.createTextNode("Juan Pablo Llanos");

// continuamos creando el texto, para eso usamos un nodo del tipo texto y colocamos texto dentro de él

parrafo.appendChild(parrafo);

// al nodo párrafo le agregamos el nodo texto

document.body.appendChild(parrafo);

// al documento principal le agregamos un nodo hijo

