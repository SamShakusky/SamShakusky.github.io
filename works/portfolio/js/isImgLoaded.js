var isImgLoaded = function () {
    "use strict";
    
    $('.grid').imagesLoaded()
        .done(function () {
        $('.loading, .loading img, body').addClass('done');
  });
};

$(document).ready(isImgLoaded);