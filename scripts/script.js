$(document).ready(function() {
 

// ---------------------Logon Verification---------------------------------------------------
var modalLogin, modalPassword, modalLoginButton;
modalLogin = $('#modalLogin');
modalPassword = $('#modalPassword');
modalLoginButton = $('#modalLoginButton');


function user (firstName, lastName, email, password, tarrif, AdditionalBaggage, seats ){
  this.firstName =firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.tarrif =tarrif;
  this.AdditionalBaggage =AdditionalBaggage;
  this.seats = seats;
}

$user1 = new user ('Jan','Kowalski','jan.kowalski@testmail.com','password');
$user2 = new user ('Jan','Nowak','jan.nowak@testmail.com','password');
$user3 = new user ('Krzysztof','Kajak','krzysztof.kajak@testmail.com','password');
$user4 = new user ('admin','Kajak','krzysztof.kajak@testmail.com','admin');



modalLoginButton.on("click", function(e){
  // alert("działa");
  if(modalLogin.val() ==="admin" && modalPassword.val()==="admin"){alert("true")} {alert("false")}

});






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































