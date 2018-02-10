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

    document.getElementById("egyptBtn").click();

    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
    }
