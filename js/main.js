// Business Logic

window.addEventListener("load", function() { window. scrollTo(0, 0); });

// User interface

$document.ready(function () {
    $(".button-collapse").sideNav();

});
$('#smooth, #projects').on('click', function(e) {
    e.preventDefault();
    var target = $(this).get(0).id == 'smooth' ? $('#projects') : $('#smooth');
    // $('html, body').stop().animate({
    //   scrollTop: target.offset().top
    // }, 1000);
  });