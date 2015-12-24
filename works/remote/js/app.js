var slider = function() {
	"use strict";
	
	$('.slider_dot').click(function() {
		$('.active_dot').removeClass('active_dot');
		$(this).addClass('active_dot');
		$('.active_slide').removeClass('active_slide');
	});
	
	$('#slider1').click(function() {
		$('#sl1').addClass('active_slide');
	});
	$('#slider2').click(function() {
		$('#sl2').addClass('active_slide');
	});
	$('#slider3').click(function() {
		$('#sl3').addClass('active_slide');
	});
	$('#slider4').click(function() {
		$('#sl4').addClass('active_slide');
	});
	$('#slider5').click(function() {
		$('#sl5').addClass('active_slide');
	});
};

$(document).ready(slider);