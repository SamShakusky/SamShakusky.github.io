var logoHover = function () {
	"use strict";
	
	$('header img').hover(function () {
		$('header h3').fadeIn(300);
	}, function () {
		$('header h3').fadeOut(400);
	});
};

var menuHover = function () {
	"use strict";
	
	$('main .tab').hover(function () {
		$(this).css({color: "#c6cdff"});
	}, function () {
		$(this).css({color: "#03033a"});
	});
};

var tabHover = function () {
	"use strict";
	
	$('.tab').hover(function () {
		$('.floating-menu', this).css("bottom", "-80%");
		
		$('.btn-wrap button', this).fadeIn(400);
		$('.btn-wrap', this).css("bottom", "3em");
	}, function () {
		$('.floating-menu').removeClass('active').addClass('unactive');
		
		$('.floating-menu', this).css("bottom", "-110%");
		
		$('.tab h2').css("top", "-2em");
		
		$('.btn-wrap button', this).fadeOut(400);
		$('.btn-wrap', this).css("bottom", "2.5em");
		$('.btn-wrap button', this).removeClass('btn-down');
	});
	
	$('.site a').hover(function () {
		$(this).parent().css("transform", "translate3d(7px,0,0)").css("width", "100.03%"); /*100.03% - FireFox fix*/
		$(this).siblings('img:nth-child(3)').css("transform", "translate3d(-7px,0,0)");
		$(this).css("height", "100%");
	}, function () {
		$(this).parent().css("transform", "translate3d(0,0,0)");
		$(this).siblings('img:nth-child(3)').css("transform", "translate3d(0,0,0)");
	});
};

var articlesClick = function () {
	"use strict";
	
	$('.articles').click(function () {
		$(this).find('.just-a-line').css('color', '#c6cdff');
	});
};

var downBtn = function () {
	"use strict";
		
	var pressBtn = function () {
		
		var grandDad = $(this).parent().parent();
		
		if (grandDad.find('.floating-menu').hasClass('unactive')) {
				grandDad.find('.floating-menu').removeClass('unactive').addClass('active');
			
				grandDad.find('.active').animate({bottom: "-8%"});
			
				$(this).addClass('btn-down');
				grandDad.find('h2').css("top", "-0.5em");
				grandDad.css("color", "transparent");
        } else {
				grandDad.find('.floating-menu').removeClass('active').addClass('unactive');
			
				grandDad.find('.unactive').animate({bottom: "-80%"});
			
				$(this).removeClass('btn-down');
				grandDad.find('h2').css("top", "-2em");
				grandDad.css("color", "#c6cdff");
				
        }
	};
	
	$('.btn-tab').click(pressBtn);
	$('.tab-crutch').click(pressBtn);
};

$(document).ready(logoHover);
$(document).ready(menuHover);
$(document).ready(tabHover);
$(document).ready(articlesClick);
$(document).ready(downBtn);