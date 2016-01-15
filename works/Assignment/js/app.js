var clickForm = function () {
    "use strict";
    
    $('.form').click(function () {
        $('section').removeClass('hidden');
        $('.popup').addClass('shown');
    });
    
    $('.close-btn, .close').click(function () {
        $('section').addClass('hidden');
        $('.popup').removeClass('shown');
    });
};

var hoverForm = function () {
    "use strict";
    
    $('.close-btn').hover(function () {
        $('.stroke').toggleClass('hover');
    });
};


var form3dEffects = function () {
    "use strict";
    
        var moveForce = 0; // max popup movement in pixels
        var rotateForce = 0; // max popup rotation in deg

        $(document).mousemove(function(e) {
            var docX = $(document).width();
            var docY = $(document).height();

            var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
            var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;

            var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
            var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);

            $('.popup')
                .css('left', moveX+'px')
                .css('top', moveY+'px')
                .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
        });
    
    $('form a').click(function () {
        if (moveForce === 50) {
            $('.moving-zone').css('perspective', 'none');
            $('form a, .close').removeClass('on');
            moveForce = 0;
            rotateForce = 0;
        } else {
            $('.moving-zone').css('perspective', '800px');
            $('form a, .close').addClass('on');
            moveForce = 50;
            rotateForce = 20;
        }
    });
    
};


var clickMenu = function () {
    "use strict";
    
    $('.menu').click(function () {
        $('header, .logo, nav, .link').toggleClass('mobile');
        $('.menu, .menu_stroke').toggleClass('cross');
    });
    
    
};



$(document).ready(clickForm);
$(document).ready(hoverForm);
$(document).ready(form3dEffects);
$(document).ready(clickMenu);

