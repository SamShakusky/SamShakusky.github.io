var isImgLoaded = function () {
    "use strict";
    
    $('.container:nth-child(n+1):nth-child(-n+3), .container:nth-child(6):nth-child(7), .container:nth-child(n+1):nth-child(-n+3), .container:nth-child(n+11):nth-child(-n+13), .container:nth-child(n+17):nth-child(-n+19)').imagesLoaded()
        .done(function () {
        $('.loading, .loading img, body').addClass('done');
  });
};

$(document).ready(isImgLoaded);