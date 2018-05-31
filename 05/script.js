$(document).ready(function(){

	//las acciones de click para ambos
//botones que se encuentran en la franja blanca.

	$(".social__like").on("click", function(event){
		event.preventDefault();
		$(this).toggleClass("social__like--clicked");

	});
		

	$(".social__link").on("click", function(event){
	  	event.preventDefault();
	  	alert($(this).parent().parent().siblings(".meals__img").attr("alt"));
	});

});