var languageSwap = function() {
	"use strict";
	
/*open-close the language bar*/
	$('#lang_banner').click(function() {
		if ($('.language').css('left') === '-39px') {
			$('.language').animate({left: '-2px'}, 300);
		} else {
			$('.language').animate({left: '-39px'}, 300);
		}
	});
	
/*change languge on slide2 to RUSSIAN*/
	$('#ru').click(function() {
		$('#WWA').html('Кто мы такие');
		$('#WWA_text p').html('Space Beyond это транснациональная организация, которая объединяет ученых и инженеров со всего мира, чтобы сделать космические путешествия безопасными, быстрыми и доступными любому жителю Земли. С тех пор, как в 2021 году русский физик Дмитрий Ермоленко доказал возможность создания варп-двигателя, световые годы перестали быть для нас огромным расстоянием. После нескольких лет тщательных исследований, космические путешествия за пределы нашей солнечной системы наконец стали реальностью. Теперь, когда Альфа Центавра уже колонизирована, у вас есть уникальная возможность покинуть Землю, чтобы найти себе новый лучший дом.');
		$('#WWA').css('padding-bottom', '5px');
		$('#lang_banner').html('Язык');
		$('#lang_banner').css('left', '26px');
		$('#WWA_text h3').html('Джон Резник,<br>генеральный директор Space Beyond');
		$('#history_bar .history_bar:nth-child(1) .two p').html('Основание корпорации<br>Space Research');
		$('#history_bar .history_bar:nth-child(2) .two p').html('Запуск пректа<br>"Новый Дом"');
		$('#history_bar .history_bar:nth-child(3) .two p').html('Переименовывание компании в<br>Space Beyond');
		$('#history_bar .history_bar:nth-child(4) .two p').html('Обнаружение экзопланеты в системе Альфа Центавра');
		$('#history_bar .history_bar:nth-child(5) .two p').html('На планете, названной Итакой, подтверждается наличие атмосферы');
		$('#history_bar .history_bar:nth-child(6) .two p').html('Конструирование первого двигателя типа "Lightning"');
		$('#history_bar #special .two p').html('Первый коммерческий космический полет дает начало <span>эре Трансмиграции</span>');
		$('.language').animate({left: '-39px'}, 300);
		
	});
	
/*change languge on slide2 to ENGLISH*/
	$('#en').click(function() {
		$('#WWA').html('Who We Are');
		$('#WWA_text p').html('Space Beyond is a transnational organization, which unite scientists and engineers from all over the world to make space travel safe, swift and accessible for every person on Earth. Light years are no more a big deal, since in 2021 the Russian physicist Dimtry Ermolenko discovered a way to build a warp-drive. After the years of thorough studies, the space travel beyond our solar system became a reality. And now, as the Alpha Centauri is already colonized, you have a unique opportunity to leave the Earth and find a new better home.');
		$('#WWA').css('padding-bottom', '20px');
		$('#lang_banner').html('Language');
		$('#lang_banner').css('left', '12px');
		$('#WWA_text h3').html('Jhon Reznik,<br>Space Beyond SEO');
		$('#history_bar .history_bar:nth-child(1) .two p').html('Foundation of the<br>Space Research inc.');
		$('#history_bar .history_bar:nth-child(2) .two p').html('The launch of the<br>"New Home" project');
		$('#history_bar .history_bar:nth-child(3) .two p').html('The company is renamed to the<br>Space Beyond');
		$('#history_bar .history_bar:nth-child(4) .two p').html('The discovery of the terrestrial planet in the Alpha Centauri system');
		$('#history_bar .history_bar:nth-child(5) .two p').html('The planet, named Ithaca, is approved to have an atmosphere');
		$('#history_bar .history_bar:nth-child(6) .two p').html('The first Lightning-type engine is build');
		$('#history_bar #special .two p').html('The first commercial space journey starts the <br><span>Transmigration Era</span></p>');
		$('.language').animate({left: '-39px'}, 300);
		
	});
};

$(document).ready(languageSwap);