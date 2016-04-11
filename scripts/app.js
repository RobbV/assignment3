/*Robbert Van der Grift
Student#: 200326832
date: 09/05/2016
==================================================*/
$(function() {
// get the nave distance from the view port
  var navBar = $('#navbar').offset().top;
  console.log(navBar);
  $(window).scroll(function(){
  if ($(window).scrollTop() > navBar) {
    $('#navbar').addClass('Pnav');
    $('#menu-toggle').addClass('Pnav');
    $('nav a').addClass('transbg');
    $('#menu-toggle').addClass('transbg');
    $('#topbutton').fadeIn(500);
    $('nav').addClass('transbg');
  }
  else {
    // remove the class
    $('#navbar').removeClass('Pnav');
    $('#menu-toggle').removeClass('Pnav');
    $('nav a').removeClass('transbg');
    $('nav').removeClass('transbg');
    $('#topbutton').fadeOut(500);


  }
});

  // animate move to top.
  $('#topbutton').click(function(){

    event.preventDefault();
    $('body').animate({scrollTop: 0}, 500);

  });
  $('#menu-toggle').click(function(){

      console.log ('clicked');
      $('#book').fadeIn(200);
      $('#menu-toggle').fadeOut(0);

  });
  $('#close').click(function(){
    $('#book').fadeOut(200);
    $('#menu-toggle').fadeIn(500);
  })
// end DOM ready
});
