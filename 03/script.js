$(document).ready(function(){

//1. Seleccionar el cuarto li y por medio de un append
	//agrega este string: '<ul><li><a href="#">link 4.a</a></li></ul>'

$("li:nth-child(4)").append('<ul><li><a href="#">link 4.a</a></li></ul>');

//2. Por medio de la misma selección anterior inserta, usando un before
	//este otro string: '<li><a href="#">link 3.5</a></li>'
$("li:nth-child(4)").before('<li><a href="#">link 3.5</a></li>');

//3. Seleccionar el li que contiene el link número 6 e inserta por medio del
	//método prepend el string con el emoji: '😎 ' (emoji de la cara con los
	//anteojos de sol)
$("li:nth-child(7)").prepend('😎 ');	

//4. Con la misma selección utilizaremos el método after para insertar este
	//string: '🙂'
$("li:nth-child(7)").after('🙂');

});