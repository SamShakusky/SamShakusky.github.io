var clickMenu = function () {
    "use strict";
    
    $('aside .menu-btn').click(function () {
        $('aside, aside .stroke, aside .menu-btn, aside a, aside p, icons, .personal-info, .personal-info img, .personal-info h3, .personal-info h4, .grid').toggleClass('active');
        
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

var toggleGallery = function () {
    "use strict";
    
    $('.photo, .all').click(function () {
        
        var photoDirectory = $(this).attr('src');
        
        $('.showcase').attr('src', photoDirectory);
        $('.gallery').css('left', '0');
        $('aside, .grid, footer').addClass('gallery-mod');
        
        $('body').addClass('gallery-mod');
    });
    
    $('.gallery .menu-btn').click(function () {
        
        $('.gallery').css('left', '100%');
        $('aside, .grid, footer').removeClass('gallery-mod');
        
        $('body').removeClass('gallery-mod');
        
        setTimeout(function () { $('.showcase').attr('src', 'img/1.jpg'); }, 300);
        
    });
};

var swapPhotos = function () {
    "use strict";
    
    $('.photo').click(function () {
        window.photoId = $(this).attr('id');
        
        $('.arrow').click(function () {

            if ($(this).hasClass('left')) {
                if (photoId > 1) {
                    var prevPhotoId = '#' + (photoId - 1);
                    var prevPhoto = $(prevPhotoId).attr('src');

                    $('.showcase').attr('src', prevPhoto);
                    photoId = prevPhotoId.substring(1);
                } else {
                    $('.showcase').attr('src', 'img/22.jpg');
                    photoId = 22;
                }
            } else {
                if (photoId < 22) {     
                    var photoIdToInt = parseInt(photoId);

                    var nextPhotoId = '#' + (photoIdToInt + 1);
                    var nextPhoto = $(nextPhotoId).attr('src');

                    $('.showcase').attr('src', nextPhoto);
                    photoId = nextPhotoId.substring(1);
                } else {
                    $('.showcase').attr('src', 'img/1.jpg');
                    photoId = 1;
                }
            }
            
            
        });
    });
};

/*var filterTags = function () {
    "use strict";
    
    var revealAllContainers = function () {
        $('.container').each(function () {
            $(this).css('display', 'block');
            $(this).children().removeClass('hidden');
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
            revealAllContainers();
            photoId = 1;
        } else {
            
            revealAllContainers();
            
            $('.container').each(function () {
                
                
                $(this).removeClass('container');
                $(this).removeClass('all');


                if ($(this).attr('class') !== theClass) {
                    $(this).css('display', 'none');
                    
                    $('.grid').css({'flex-direction': 'row', 'flex-wrap': 'nowrap'});
                    javascript:window.scrollTo(0, 0);
                }
                
                $(this).addClass('container');
                $(this).addClass('all');
            });
        }
    });
};*/    // unfinished





$(document).ready(clickMenu);
$(document).ready(hoverEffects);
$(document).ready(toggleGallery);
$(document).ready(swapPhotos);
/*$(document).ready(filterTags);*/