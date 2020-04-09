// Loader
var preloader = document.getElementById('loading');
function loadingFunction() {
  preloader.style.display = 'none';
}
// End_Loader

// Nav
$(document).ready(function () {
  $('.menu_toggler').on('click', function () {
    $(this).toggleClass('open');
    $('.top_nav').toggleClass('open');
  });

  $('.top_nav .nav_link').on('click', function () {
    $('.menu_toggler').removeClass('open');
    $('.top_nav').removeClass('open');
  });
});
// End_Nav

// Back_To_Top
topbutton = document.getElementById("backBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  }
  else{
    topbutton.style.display = "none";
  }
}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
// End_Back_To_Top

// Page_Animation
AOS.init({
  duration: 800,
  easing: "ease-in-out"
});
// End_Page_Animation