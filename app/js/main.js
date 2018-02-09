$(document).ready(function () {
        var url = window.location.href;
        $('ul.navbar-nav a').filter(function() {
             return this.href == url;
        }).parent().addClass('active-link');
    });

    $('.slick-carousel-fade').slick({
      infinite: true,
      speed: 700,
      cssEase: 'linear',
      autoplay: true,
      nextArrow: "<button type='button' class='slick-next'></button>",
      prevArrow: "<button type='button' class='slick-prev'></button>"
    });
