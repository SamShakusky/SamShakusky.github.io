var isImgLoaded = function () {
    "use strict";
    
    $('.container:nth-child(7), .container:nth-child(11), .container:nth-child(13), aside').imagesLoaded()
        .done(function () {
        $('.loading, .loading img, body').addClass('done');
  });
};

$(document).ready(isImgLoaded);