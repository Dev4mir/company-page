$(document).ready(function () {
  /* set active class for nav items according to location */
  var url = window.location.href;
  $('ul.navbar-nav a').filter(function() {
       return this.href == url;
  }).parent().addClass('active-link');

  /* init slick carousel images */
  $('.slick-carousel-images').slick({
    infinite: true,
    speed: 700,
    cssEase: 'linear',
    autoplay: true,
    nextArrow: "<button type='button' class='slick-next'></button>",
    prevArrow: "<button type='button' class='slick-prev'></button>"
  });

});

/* init egypt as a selected country */
document.getElementById("egyptBtn").click();

/* add class active as user click to show it's country content */
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("country-flag");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
