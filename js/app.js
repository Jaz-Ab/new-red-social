$('.dropdown-button').dropdown();

jQuery(document).ready(function() {
  $('.logo').animate({
    'left': '+=5%'
  }, 'slow');
  $('h4').animate({
    'font-size': 26,
    'border-width': 5
  }, 1800);
  setTimeout(function() {
    window.location.href = 'views/login.html';
  }, 3000);
});
