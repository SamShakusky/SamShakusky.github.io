var date = new Date();

var season = function() {
	"use strict";
	
	switch (date.getMonth()) {
		case 11:
		case 0:
		case 1:
			$('body').css('background', 'url(img/winter.jpg)');
			$('h1').html('Сейчас Зима');
			break
		case 2:
		case 3:
		case 4:
			$('body').css('background', 'url(img/spring.jpg)');
			$('h1').html('Сейчас Весна');
			break
		case 5:
		case 6:
		case 7:
			$('body').css('background', 'url(img/summer.jpg)');
			$('h1').html('Сейчас Лето');
			break
		case 8:
		case 9:
		case 10:
			$('body').css('background', 'url(img/autmn.jpg)');
			$('h1').html('Сейчас Осень');
			break
		default:
			alert('Ooops');
	}
	
	$('body').css('background-size', 'cover');
	$('body').css('background-position', 'bottom');
	
};

$(document).ready(season);