
const botonComenzar = document.getElementById("botonComenzar");

botonComenzar.onclick = boton;

function eliminarIcono(elemento){
	//Esta función elimina el icono del html
	elemento.remove();
}

function boton(){

	//botonComenzar.classList.add("ocultar");

	botonComenzar.remove()

	setInterval(insertarIcono, 100);

}

function insertarIcono(){
	//Creamos un nuevo elemento en el documento
	const icono = document.createElement("div");

	//Le añado al elemento la clase icono
	icono.classList.add('icono');

	//Añadir al contenido del elemento el icono
	icono.innerHTML = '🎈';

	//Le asigno una posición aleatoria a su atributo css: left
	icono.style.left = Math.random() * 100 + "vw";

	//Le asigno a cada icono una duración aleatoria
	icono.style.animationDuration = Math.random() * 2 + 3 + "s"; // 3s, 5s, 7s

	//Insertar el elemento creado dentro de la etiqueda body
	document.body.appendChild(icono);

	//Se va a llamar una sóla vez a la función eliminarIcono
	//a los 4 segundos de crearse
	//y le va a pasar como parámetro el elemento icono
	setTimeout(eliminarIcono, 3100, icono);
}


//Llamo a la función cada segundo
