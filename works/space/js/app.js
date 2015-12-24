var navigation = function() {
	"use strict";
	
	$('.navigation_bar li, .footer a').click(function() {
		/*var activeNav = $('.li_active');
		activeNav.removeClass('li_active');
		$(this).addClass('li_active');*/
		$('.join-btn').html('<img id="logo" src="img/Join-btn.png" alt="Join"/><a href="#slide5">Join</a>');
		$('.navigation_bar').css('margin-left', '20px');
		$('.navigation_bar li:nth-child(4)').css('padding-left', '47px');
	});
	
	$('.join-btn, #hex5 a, .icon').click(function() {
		$('.join-btn').html('<img class="new-img" src="img/logo.png" alt="Join"/><a style= "color: transparent" href="#slide5">Join</a>').ready(
			function(){
				$('.new-img').animate({top: '-6px'}, 400);
		});
	});
};


var historyBar = function() {
	"use strict";
	
	$('.history_bar').click(function() {
		/*Removing the 'active' state from a previous button*/
		var activeHistory = $('.hist_active');
		$('.hist_active').find('.two').animate({height: '-73px'}, 200);
		$('.hist_active').find('tr').animate({top: '-5px'}, 200);
		$('.hist_active').find('p').animate({height: 'hide'}, 200);
		activeHistory.removeClass('hist_active');
		
		/*Adding the 'active' state to a clicked button*/
		$(this).addClass('hist_active');
		$('.hist_active').find('.two').animate({height: '73px'}, 200);
		$('.hist_active').find('tr').animate({top: '-88px'}, 200);
		$('.hist_active').find('p').animate({height: 'show'}, 200);
	});
};


var departureMenu = function() {
	"use strict";
	
	$('.departure_menu h2').click(function() {
		$('.departure_menu ul').css('display', 'block');
		$('.continent_active').removeClass('continent_active');
	});
	
	$('.departure_menu li:first-child').hover(function() {
		$('.active').removeClass('active');
		$('.departure').css('background', 'url(img/map_america.png) no-repeat');
		$('.departure').css('background-size', '1366px');
		$('.departure_menu li:first-child').click(function() {
			$(this).addClass('active');
			$('.america').addClass('continent_active');
			$('.departure_menu ul').css('display', 'none');
		});
	}, function() {
		if ($('.departure_menu li:first-child').hasClass('active')) {
		} else {
			$('.departure').css('background', 'url(img/slide4_cover.png) no-repeat');
			$('.departure').css('background-size', '1366px');
		}
	});
	
	$('.departure_menu li:nth-child(2)').hover(function() {
		$('.active').removeClass('active');
		$('.departure').css('background', 'url(img/map_africa.png) no-repeat');
		$('.departure').css('background-size', '1366px');
		$('.departure_menu li:nth-child(2)').click(function() {
			$(this).addClass('active');
			$('.africa').addClass('continent_active');
			$('.departure_menu ul').css('display', 'none');
		});
	}, function() {
		if ($('.departure_menu li:nth-child(2)').hasClass('active')) {
		} else {
			$('.departure').css('background', 'url(img/slide4_cover.png) no-repeat');
			$('.departure').css('background-size', '1366px');
		}
	});
	
	$('.departure_menu li:nth-child(3)').hover(function() {
		$('.active').removeClass('active');
		$('.departure').css('background', 'url(img/map_eurasia.png) no-repeat');
		$('.departure').css('background-size', '1366px');
		$('.departure_menu li:nth-child(3)').click(function() {
			$(this).addClass('active');
			$('.eurasia').addClass('continent_active');
			$('.departure_menu ul').css('display', 'none');
		});
	}, function() {
		if ($('.departure_menu li:nth-child(3)').hasClass('active')) {
		} else {
			$('.departure').css('background', 'url(img/slide4_cover.png) no-repeat');
			$('.departure').css('background-size', '1366px');
		}
	});
	
	$('.departure_menu li:nth-child(4)').hover(function() {
		$('.active').removeClass('active');
		$('.departure').css('background', 'url(img/map_australia.png) no-repeat');
		$('.departure').css('background-size', '1366px');
		$('.departure_menu li:nth-child(4)').click(function() {
			$(this).addClass('active');
			$('.australia').addClass('continent_active');
			$('.departure_menu ul').css('display', 'none');
		});
	}, function() {
		if ($('.departure_menu li:nth-child(4)').hasClass('active')) {
		} else {
			$('.departure').css('background', 'url(img/slide4_cover.png) no-repeat');
			$('.departure').css('background-size', '1366px');
		}
	});
};

var cosmoport = function() {
	"use strict";
	
	$('.icon').hover(function() {
		$(this).find('.cosmoport').css('display', 'block');
	}, function() {
		$(this).find('.cosmoport').css('display', 'none');
	});
	
	$('.icon').click(function() {
		switch ($(this).attr('id')) {
			case 'plesetsk':
				$('select').val('Plesetsk');
				break;
			case 'raum-1':
				$('select').val('Raum-1');
				break;
			case 'kapustin_yar':
				$('select').val('Kapustin Yar');
				break;
			case 'atlantis':
				$('select').val('Atlantis');
				break;
			case 'baikonur':
				$('select').val('Baikonur');
				break;
			case 'canaveral':
				$('select').val('Cape Canaveral');
				break;
			case 'hammaguir':
				$('select').val('Hammaguir');
				break;
			case 'jiuquan':
				$('select').val('Jiuquan');
				break;
			case 'kourou':
				$('select').val('Kourou');
				break;
			case 'san_marco':
				$('select').val('San Marco');
				break;
			case 'semnan':
				$('select').val('Semnan');
				break;
			case 'boca_chica':
				$('select').val('Space-X');
				break;
			case 'sriharikota':
				$('select').val('Sriharikota');
				break;
			case 'uchinoura':
				$('select').val('Uchinoura');
				break;
			case 'vandenberg':
				$('select').val('Vandenberg');
				break;
			case 'vostochny':
				$('select').val('Vostochny');
				break;
			case 'wenchang':
				$('select').val('Wenchang');
				break;
			case 'woomera':
				$('select').val('Woomera');
				break;
			case 'xichang':
				$('select').val('Xichang');
				break;
			case 'alcantara':
				$('select').val('Alcantara');
				break;
			case 'de_aar':
				$('select').val('De Aar');
				break;
			default:
				break;
		}
		$('html,body').stop().animate({ scrollTop: $("#slide5").offset().top }, 800);
	});
	
	
};

var ignition = function() {
	"use strict";
	
	$('.submit').click(function() {
		$('.join_form').css('display', 'none');
	});
};

var ancors = function() {
	"use strict";
	
	$('.navigation_bar li a').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 800);
  		e.preventDefault();	
	});
	
	$('.navigation_bar .join-btn, #hex5 a').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $("#slide5").offset().top }, 800);
  		e.preventDefault();	
	});
	
	$('.footer a').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $("#slide1").offset().top }, 800);
  		e.preventDefault();	
	});
};

var popUp = function() {
	"use strict";
	
	$('.submit').click(function() {
		$('.popup').css('display', 'block');
        $('#blackout').css('display', 'block');
		
		$('.popup').click(function() {
		});
		
		$('.close').click(function() { 
			$('.popup').css('display', 'none'); 
			$('#blackout').css('display', 'none');
			$('.footer').animate({bottom: "0"}, 600); 
		});
	});
	
	
};

$(document).ready(navigation);
$(document).ready(historyBar);
$(document).ready(departureMenu);
$(document).ready(cosmoport);
$(document).ready(ignition);
$(document).ready(ancors);
$(document).ready(popUp);
