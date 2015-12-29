var isImgLoaded = function () {
    "use strict";
    
    $('body').imagesLoaded()
        .done( function () {
        $('.loading').addClass('done');
        $('body').addClass('done');
  })
};

var clickMenu = function () {
    "use strict";
    
    $('.menu-btn').click(function () {
        $('.stroke, .menu-btn, aside, aside a, icons, aside p, .personal-info, .personal-info img, .personal-info h3, .personal-info h4, .grid').toggleClass('active');
        
    });
};

var hoverEffects = function () {
    "use strict";
    
    $('aside a').hover(function () {
        $(this).children('aside p, .icons').toggleClass('hover');
    });
    
    $('.photo').hover(function () {
        $(this).children('.scale, .dim').toggleClass('hover');
    });
};

var tagsFilter = function () {
    "use strict";
    
    var revealAllContainers = function () {
        $('.container').each(function () {
            $(this).css('display', 'block');
            $('.grid').css({'flex-direction': 'column', 'flex-wrap': 'wrap'});
        });
    };
    
    
    $('.container').each(function () {
            $(this).addClass('all');
        });
    
    $('footer button').click(function () {
        var theClass = $(this).attr('class');
        
        $('button#activeButton').attr('id', '');
        $(this).attr('id', 'activeButton');
        
        if ($(this).hasClass('all')) {
            revealAllContainers ();
        } else {
            
            revealAllContainers ();
            
            $('.container').each(function () {
                
                
                $(this).removeClass('container');
                $(this).removeClass('all');


                if ($(this).attr('class') !== theClass) {
                    $(this).css('display', 'none');
                    $('.grid').css({'flex-direction': 'row', 'flex-wrap': 'nowrap'});
                    javascript:window.scrollTo(0,0);
                }
                
                $(this).addClass('container');
                $(this).addClass('all');
            });
        }
    });
};

$(document).ready(isImgLoaded);
$(document).ready(clickMenu);
$(document).ready(hoverEffects);
$(document).ready(tagsFilter);