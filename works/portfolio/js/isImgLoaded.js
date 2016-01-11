var isImgLoaded = function () {
    "use strict";
    
    $('.container:nth-child(11)').imagesLoaded()
        .done(function () {
        $('.loading, .loading img, body').addClass('done');
  });
};

$(document).ready(isImgLoaded);