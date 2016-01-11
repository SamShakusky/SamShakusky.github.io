var clickMenu = function () {
    "use strict";
    
    $('aside .menu-btn').click(function () {
        $('aside, aside .stroke, aside .menu-btn, aside a, aside p, icons, .personal-info, .personal-info img, .personal-info h3, .personal-info h4, main, .social-networks, .side-float').toggleClass('active');
    });
};

var clickContacts = function () {
    "use strict";
    
    $('.contacts').click(function () {
        $('.social-networks').addClass('unfolded');
    });
    
    $('.close-social, .mail').click(function () {
        $('.social-networks').removeClass('unfolded');
    });
};

var hoverEffects = function () {
    "use strict";
    
    $('aside a').hover(function () {
        $(this).children('aside p, .icons, .social-networks div').toggleClass('hover');
    });
    
    $('.close-social').hover(function () {
        $(this).children('.cross').toggleClass('hoverSocial');
    });
    
    $('.link-contacts, .side-float').hover(function () {
        var top = $(this).offset().top;
        
        if ($(this).hasClass('link-contacts')) {
            var top = $(this).offset().top - 1;
        }
        
        if ($(this).hasClass('mail')) {
            $('.side-float h1').removeClass('active');
            $('.side-float h1:first-child').addClass('active');
        } else if ($(this).hasClass('phone')) {
            $('.side-float h1').removeClass('active');
            $('.side-float h1:last-child').addClass('active');
        }
        
        $('.side-float').toggleClass('hover');
        $('.side-float').css('top', top);
    });
};

var toggleGallery = function () {
    "use strict";
    
    $('.photo, .all').click(function () {
        
        var photoDirectory = $(this).attr('src');
        
        $('.showcase').attr('src', photoDirectory);
        $('.gallery').addClass('active');
        $('aside, .grid, footer').addClass('gallery-mod');
        
        $('body').addClass('gallery-mod');
    });
    
    $('.gallery .menu-btn').click(function () {
        
        $('.gallery').removeClass('active');
        $('aside, .grid, footer').removeClass('gallery-mod');
        
        $('body').removeClass('gallery-mod');
        
        setTimeout(function () { $('.showcase').attr('src', 'img/1.jpg'); }, 300);
        
    });
};

var swapPhotos = function () {
    "use strict";
    
    $('.photo').click(function () {
        var photoId = $(this).attr('id');
        
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


$(document).ready(clickMenu);
$(document).ready(clickContacts);
$(document).ready(hoverEffects);
$(document).ready(toggleGallery);
$(document).ready(swapPhotos);