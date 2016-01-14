var clickForm = function () {
    "use strict";
    
    $('.form').click(function () {
        $('section').removeClass('hidden');
    });
    
    $('.close-btn, .close').click(function () {
        $('section').addClass('hidden');
    });
};

$(document).ready(clickForm);