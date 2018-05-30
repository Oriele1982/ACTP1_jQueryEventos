$(document).ready(function(){
	//1. Cuando se le haga click al botón con clase add_name guardaremos en una variable el
    //retorno de la función prompt (explicado en el tip).
	
	$(".add_name").click(function(){
		
		var data = prompt('Por favor agrega un nombre a la lista');

	});

	// 2. Hacer un append en el tag '.names', donde crearemos un string que contenga:
      //a) Un li que englobe toda la información
      //b) Un span que contenga la información recibida desde el prompt
      //c) Un link con clase remove_name, que nos permitirá eliminar el elemento de la lista
	
	$(".names").append("<li><span>" + data + "</span><a href='#' class='remove_name'>eliminar</a></li>")

	//3. Mediante delegación de eventos le agreguemos a todos los links vacíos una prevención
    //de eventos para que cuando le hagamos click no aparezca en la URL el signo '#'.

    $("a[href='#']").click(event, "#" , function(){
    	event.preventDefault();
    });

    //4. Crear una función que escuche el click del botón remove_name y seleccionará el li en
    //cuestión para luego borrarlo por medio del método remove() de jQuery.

    $(".remove_name").click(function(){
    	$("li").remove();
    });




});