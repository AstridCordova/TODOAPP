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

	var texto = document.createElement("span") ;
	texto.className = "texto" ;
	texto.innerHTML = tareaText ;

	var boton = document.createElement("input") ;
	boton.type = "checkbox" ;
	boton.onclick = function() {
		tachar(this, tareaText);
	}


	var icono = document.createElement("button") ;
	icono.className = "glyphicon glyphicon-trash pull-right" ;
	icono.onclick = function() {
		deshacer(this)
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

function tachar(boton, tareaText) {
	var texto = boton.nextSibling;
	if(boton.checked) {
		texto.innerHTML = tareaText.strike() ;
		var realizado = document.getElementById("tareasrealizadas")
		var tarea = boton.parentElement;
		realizado.appendChild(tarea);

	}
	else {
		texto.innerHTML = tareaText ;
		tareas.appendChild(tarea)
	}
}
 
 function deshacer(icono) {
 		var tarea = icono.parentElement;
 		var tareas = tarea.parentElement; //parentElement es para llamara al padre del elemento
		tareas.removeChild(tarea);
	}