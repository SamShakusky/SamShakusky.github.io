var checkTime = function (amPM) {
	"use strict";

	window.date = new Date();
	
	window.currentHourAM = date.getHours();
	window.currentHourPM = date.getHours() - 12;
	window.currentMinutes = date.getMinutes();
	
	window.AM = currentHourAM;
	window.PM = currentHourPM;
	
	$('.current-time').removeClass('current-time');
	
	$('div').each(function () {
		
		window.clockHour = $(this).text().slice(0, 2); /*часы на циферблате*/
		window.clockMinutes = $(this).text().slice(3, 5); /*минуты на циферблате*/
	
		if (clockHour == amPM) {
			if ((currentMinutes - clockMinutes >= 0) && (currentMinutes - clockMinutes < 5) && $('body').hasClass('mini')) {
				$(this).addClass('current-time');
			} else if (currentMinutes == clockMinutes) {
				$(this).addClass('current-time');
			}
		}
		
	});
};

$(document).ready(checkTime);

var checkAmPm = function () {
	"use strict";

	if (date.getHours() < 12) {
		$('.am-pm-active').removeClass('am-pm-active');
		$('header p:nth-child(5)').addClass('am-pm-active');
		checkTime(AM);
	} else {
		$('.am-pm-active').removeClass('am-pm-active');
		$('header p:nth-child(7)').addClass('am-pm-active');
		checkTime(PM);
	}
	
};


$(document).ready(checkAmPm);
setInterval(checkAmPm, 1000);

var switchMinMax = function () {
	"use strict";

	$('.switch').click(function () {
		if ($('.radio').hasClass('left')) {
			$('.radio').css({left: "0.3em"});
			$('header h4:nth-child(1)').css({color: "#2a2529"}).css({'text-shadow': "none"});
			$('header h4:nth-child(3)').css({color: "#f7f9f5"}).css({'text-shadow': "0 0 8px #ffffff,0 0 4px #008000,0 0 2px #0000ff"});
		} else {
			$('.radio').css({right: "0.3em"});
			$('header h4:nth-child(3)').css({color: "#2a2529"}).css({'text-shadow': "none"});
			$('header h4:nth-child(1)').css({color: "#f7f9f5"}).css({'text-shadow': "0 0 8px #ffffff,0 0 4px #008000,0 0 2px #0000ff"});	
		}
	});
};

$(document).ready(switchMinMax);