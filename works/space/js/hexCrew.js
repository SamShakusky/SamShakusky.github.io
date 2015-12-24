var crew = function() {
	"use strict";
	
	$('#hex1').click(function() {
		if ($('#hexagonal_menu div').hasClass('hex_white')) {
			$('#hexagonal_menu div').removeClass('hex_white');
			$('.hexagon_main_new').addClass('hexagon_main');
			$('.hexagon_main_new').removeClass('hexagon_main_new');
			$('#hex6').animate({left: '300px', top: '520px'}, 200);
			$('#hex5').animate({top: '685px'}, 200);
			$('#hex4').animate({left: '-300px', top: '520px'}, 200);
			$('#hex3').animate({left: '150px'}, 200);
			$('#hex2').animate({left: '-150px'}, 200);
			$('#hex1').html('<img src="img/crew1.png" alt="Crew"/>');
			$('#hex2').html('<img src="img/crew2.png" alt="Crew"/>');
			$('#hex3').html('<img src="img/crew3.png" alt="Crew"/>');
			$('#hex4').html('<img src="img/crew4.png" alt="Crew"/>');
			$('#hex6').html('<img src="img/crew5.png" alt="Crew"/>');
			$('#hex5 div').html('<p><a href="#slide5">Join Us</a></p><img src="img/crew_text.png" alt="Crew"/>');
		} else {
			$('#hexagonal_menu div').addClass('hex_white');
			$('.hexagon_main').addClass('hexagon_main_new');
			$('.hexagon_main').removeClass('hexagon_main');
			$('#hex6').animate({left: '276px', top: '498px'}, 200);
			$('#hex5').animate({top: '661px'}, 200);
			$('#hex4').animate({left: '-276px', top: '498px'}, 200);
			$('#hex3').animate({left: '138px'}, 200);
			$('#hex2').animate({left: '-138px'}, 200);
			$('#hex2, #hex3, #hex4, #hex6').html('<img src="img/crew_about.png" alt="Crew"/>');
			$('#hex5 div').html('<p><span>Captain Frank Martin</span><br><br>The former pilot of the Royal Air Force is now ready to take charge of our spacecraft. Cpt. Martin is</p><p class="crew_discription2">the only person, who has two long-term space journeys in his service record. And now it’s time for the third one! The most skilled man you can ever imagine. Cat-lover.</p><img src="img/crew_about.png" alt="Crew"/>');
			$('#hex5 div p').addClass('crew_discription');
			$('.crew_discription').animate({top: '-=2'},300);
		}
	});
	
	$('#hex2').click(function() {
		if ($('#hexagonal_menu div').hasClass('hex_white')) {
		} else {
			$('#hex1').html('<img src="img/crew2.png" alt="Crew"/>');
			$('#hexagonal_menu div').addClass('hex_white');
			$('.hexagon_main').addClass('hexagon_main_new');
			$('.hexagon_main').removeClass('hexagon_main');
			$('#hex6').animate({left: '276px', top: '498px'}, 200);
			$('#hex5').animate({top: '661px'}, 200);
			$('#hex4').animate({left: '-276px', top: '498px'}, 200);
			$('#hex3').animate({left: '138px'}, 200);
			$('#hex2').animate({left: '-138px'}, 200);
			$('#hex2, #hex3, #hex4, #hex6').html('<img src="img/crew_about.png" alt="Crew"/>');
			$('#hex5 div').html('<p><span>Stanisława Lem</span><br><br>A graduate of the Jagielloński University and a comfort guardian of our long journey.</p><p class="crew_discription2">Stanisława’s field is cryogenics, which is the best option, when you need to cross a few light years. It’s crucial for us to make the flight as much fast and safe as it is possible, and Stanisława will help us with this.</p><img src="img/crew_about.png" alt="Crew"/>');
			$('#hex5 div p').addClass('crew_discription');
			$('.crew_discription').animate({top: '-=2'},300);
		}
	});
	
	$('#hex3').click(function() {
		if ($('#hexagonal_menu div').hasClass('hex_white')) {
		} else {
			$('#hex1').html('<img src="img/crew3.png" alt="Crew"/>');
			$('#hexagonal_menu div').addClass('hex_white');
			$('.hexagon_main').addClass('hexagon_main_new');
			$('.hexagon_main').removeClass('hexagon_main');
			$('#hex6').animate({left: '276px', top: '498px'}, 200);
			$('#hex5').animate({top: '661px'}, 200);
			$('#hex4').animate({left: '-276px', top: '498px'}, 200);
			$('#hex3').animate({left: '138px'}, 200);
			$('#hex2').animate({left: '-138px'}, 200);
			$('#hex2, #hex3, #hex4, #hex6').html('<img src="img/crew_about.png" alt="Crew"/>');
			$('#hex5 div').html('<p><span>Nikolay Gumilyov</span><br><br>Astro means “Star”, so when you are flying through stars, you need a good astrophysicist.</p><p class="crew_discription2">Lev was the chef of our Russian physics department until promoted to a Head of “Physics and Engineering”, our branch on Ithaca. So after the journey, you will be familiar with the best physicist on the planet.</p><img src="img/crew_about.png" alt="Crew"/>');
			$('#hex5 div p').addClass('crew_discription');
			$('.crew_discription').animate({top: '-=2'},300);
		}
	});
	
	$('#hex4').click(function() {
		if ($('#hexagonal_menu div').hasClass('hex_white')) {
		} else {
			$('#hex1').html('<img src="img/crew4.png" alt="Crew"/>');
			$('#hexagonal_menu div').addClass('hex_white');
			$('.hexagon_main').addClass('hexagon_main_new');
			$('.hexagon_main').removeClass('hexagon_main');
			$('#hex6').animate({left: '276px', top: '498px'}, 200);
			$('#hex5').animate({top: '661px'}, 200);
			$('#hex4').animate({left: '-276px', top: '498px'}, 200);
			$('#hex3').animate({left: '138px'}, 200);
			$('#hex2').animate({left: '-138px'}, 200);
			$('#hex2, #hex3, #hex4, #hex6').html('<img src="img/crew_about.png" alt="Crew"/>');
			$('#hex5 div').html('<p><span>Jack Kerouac</span><br><br>Jack is the leading engineer of our next flight. He is smart, resourceful and trustworthy.</p><p class="crew_discription2">The MIT graduate, Jack is a stunning mixture<br>of a true explorer and a severe professional. His task is to make all systems work as they mean to, as our first priority is the safe flight.</p><img src="img/crew_about.png" alt="Crew"/>');
			$('#hex5 div p').addClass('crew_discription');
			$('.crew_discription').animate({top: '-=2'},300);
		}
	});
	
	$('#hex6').click(function() {
		if ($('#hexagonal_menu div').hasClass('hex_white')) {
		} else {
			$('#hex1').html('<img src="img/crew5.png" alt="Crew"/>');
			$('#hexagonal_menu div').addClass('hex_white');
			$('.hexagon_main').addClass('hexagon_main_new');
			$('.hexagon_main').removeClass('hexagon_main');
			$('#hex6').animate({left: '276px', top: '498px'}, 200);
			$('#hex5').animate({top: '661px'}, 200);
			$('#hex4').animate({left: '-276px', top: '498px'}, 200);
			$('#hex3').animate({left: '138px'}, 200);
			$('#hex2').animate({left: '-138px'}, 200);
			$('#hex2, #hex3, #hex4, #hex6').html('<img src="img/crew_about.png" alt="Crew"/>');
			$('#hex5 div').html('<p><span>Doctor Simon Tam</span><br><br>Dr. Tam is in charge of our medical bay – the best in the whole Universe.</p><p class="crew_discription2">After graduating from the Edinburgh University Medical School, Dr. Tam left to USA, where became the Head of the NASA’s medical department. Now with the huge experience of healing people in a space conditions he is on our board.</p><img src="img/crew_about.png" alt="Crew"/>');
			$('#hex5 div p').addClass('crew_discription');
			$('.crew_discription').animate({top: '-=2'},300);
		}
	});
};

$(document).ready(crew);