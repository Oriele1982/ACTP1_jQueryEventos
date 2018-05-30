
$(document).ready(function(){


//Se busca:
	//01. Cambiar el texto que se encuentra dentro del cuarto artículo, el
	//tercer link y que dice Snapchat. Se busca que ahora diga Pinterest
	//y que también se le cambie el atributo href para que ahora vaya a la
	//dirección de Pinterest (http://pinterest.com).
	
	$(".article").eq(3).children(".article__body").children(".article__socialnetworks").children("li").eq(3)
		.children("a").text("Pinterest").attr("href", "http://pinterest.com");




	//02. Seleccionar todos los link vacíos (que su href sea '#') y prevenir
	//lleve al top de la página.

	$("a[href='#']").click(function(event){
		event.preventDefault();

	});


	//03. Modificar el tamaño de todos los h2 que sean hijos directos de la
	//clase header__main y hacerlos el doble de su tamaño.

    $(".header__main").children("h2").css("font-size", "2em");


});