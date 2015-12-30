var isImgLoaded = function () {
    "use strict";
    
    $('body').imagesLoaded()
        .done(function () {
        $('.loading, .loading img, body').addClass('done');
  });
};

$(document).ready(isImgLoaded);