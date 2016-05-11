function getInputValue() {
	var textoIngresado = document.getElementById("boxTexto") ;
	return boxTexto.value ;
}

function tarea() {
	var boxTextoValue = getInputValue() ;
	if (boxTextoValue !== "") {
		doTarea(boxTextoValue);
		clean();
	}
}

function doTarea (tareaText) {
	var tareas = document.getElementById("tareas") ;

	//Crear el elemento
	var tarea = document.createElement("div") ;
	tarea.className = "cajaTarea" ;

	var boton = document.createElement("input") ;
	boton.type = "checkbox" ;
	boton.onchange = function tachar() {
		if(boton.checked==true) {
			texto.innerHTML = tareaText.strike() ;
		}
		else {
			texto.innerHTML = tareaText ;
		}
	}

	var texto = document.createElement("span") ;
	texto.className = "texto" ;
	texto.innerHTML = tareaText ;

	var icono = document.createElement("button") ;
	icono.className = "glyphicon glyphicon-trash pull-right" ;
	icono.onclick = function deshacer() {
		tareas.removeChild(tarea);
	}

	tareas.appendChild(tarea);
	tarea.appendChild(boton);
	tarea.appendChild(texto);
	tarea.appendChild(icono) ;
}

function clean() {
	var textoIngresado = document.getElementById("boxTexto");
	boxTexto.value = "";
	boxTexto.focus();
}