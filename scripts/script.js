$(document).ready(function() {


// ---------------------Logon Verification---------------------------------------------------
// var $modallogin, $modalpassword, $modallogin__button
$modallogin = $('#modal-login');
var $modalpassword = $('#modal-password');
var $modallogin__button = ('#modal-login__button');



// ---------------------END Of Logon Verification---------------------------------------------


  $('.nav-button').click(function() {
    $('.nav-button').toggleClass('change');
  });



// ---------------------Move of banner title -----------------------------------------------
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });
// ---------------------ENC OF Move of banner title -----------------------------------------------

// ---------------------Move of picture in MISSION Section--------------------------------

  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if(position >= 650) {
      $('.camera-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    } else {
      $('.camera-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  });


  // ---------------------Move of picture in MISSION Section--------------------------------
});































