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

var worksHover = function () {
	"use strict";
	
	$('.works').hover(function () {
		$('.sites-wrap', this).css("bottom", "-80%");
		
		$('.btn-wrap button', this).fadeIn(400);
		$('.btn-wrap', this).css("bottom", "3em");
	}, function () {
		$('.sites-wrap', this).css("bottom", "-110%");
		
		$('.works h2', this).css("top", "-2em");
		
		$('.btn-wrap button', this).fadeOut(400);
		$('.btn-wrap', this).css("bottom", "2.5em");
		$('.btn-wrap button', this).removeClass('btn-down');
	});
	
	$('.site a').hover(function () {
		$(this).parent().css("transform", "translate3d(7px,0,0)");
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
		"use strict";
		
		if ($('.sites-wrap').hasClass('unactive')) {
				$('.sites-wrap').removeClass('unactive');
				$('.sites-wrap').addClass('active');
			
				$('.active').animate({bottom: "-8%"});
			
				$('.btn-wrap button').addClass('btn-down');
				$('.works h2').css("top", "-0.5em");
				$('.works').css("color", "transparent");
        } else {
				$('.sites-wrap').removeClass('active');
				$('.sites-wrap').addClass('unactive');
			
				$('.unactive').animate({bottom: "-80%"});
			
				$('.btn-wrap button').removeClass('btn-down');
				$('.works h2').css("top", "-2em");
				$('.works').css("color", "#c6cdff");
				
        }
	};
	
	$('.btn-works').click(pressBtn);
	$('.works-crutch').click(pressBtn);
};

$(document).ready(logoHover);
$(document).ready(menuHover);
$(document).ready(worksHover);
$(document).ready(articlesClick);
$(document).ready(downBtn);