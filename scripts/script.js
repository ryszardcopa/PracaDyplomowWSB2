$(document).ready(function() {
 

// ---------------------Logon Verification---------------------------------------------------
var modalLogin, modalPassword, modalLoginButton;
$modalLogin = $('#modalLogin');
$modalPassword = $('#modalPassword');
$modalLoginButton = $('#modalLoginButton');
$modalWrongPasswordWarning = $('#modalWrongPasswordWarning')

// ----------------Logon Verification user-------------------------
function user (firstName, lastName, login, email, password, tarrif, AdditionalBaggage, seats ){
  this.firstName =firstName;
  this.lastName = lastName;
  this.login = login;
  this.email = email;
  this.password = password;
  this.tarrif =tarrif;
  this.AdditionalBaggage =AdditionalBaggage;
  this.seats = seats;
}

$user1 = new user ('Jan','Kowalski','jankowalski',"jan.kowalski@test.pl",'password');
$user2 = new user ('Jan','Nowak','jannowak','jan.nowak@testmail.com','password2');
$user3 = new user ('Krzysztof','Kajak','krzysztofkajak','krzysztof.kajak@testmail.com','password3');


// ---------------------Logon Verification button-----------------------

$modalWrongPasswordWarning.hide();
$modalPassword.on("focus", function(e){$modalWrongPasswordWarning.hide()})

$modalLoginButton.on("click", function(e){
  if(
    $modalLogin.val() ===$user1.login && $modalPassword.val()===$user1.password || 
    $modalLogin.val() ===$user2.login && $modalPassword.val()===$user2.password || 
    $modalLogin.val() ===$user3.login && $modalPassword.val()===$user3.password
    )  
    {window.open("./NewPassenger.html","_self");}
    {$modalWrongPasswordWarning.show();};

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































