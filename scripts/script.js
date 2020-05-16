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

$user1 = new user ('Ryszard','Copa','ryszardcopa',"jan.kowalski@test.pl",'password');
$user2 = new user ('Miroslaw','Bidzinski','miroslawbidzinski','jan.nowak@testmail.com','haslo');
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

// --------------------------Plane selection----------------------------------------------
$PlaneType_Form = $('#PlaneType_Form');
$plane1 = $('#plane1');
$plane2 = $('#plane2');
$plane3 = $('#plane3');


$plane2.hide().slideUp();
$plane3.hide().slideUp();

$PlaneType_Form.on("change",function(){
  if(this.value == 1){$plane1.show().slideDown()} else{$plane1.slideUp().hide()}
  if(this.value == 2){$plane2.show().slideDown()} else{$plane2.slideUp().hide()}
  if(this.value == 3){$plane3.show().slideDown()} else{$plane3.slideUp().hide()}
 
  });
// -----------------------END OF Plane selection----------------------------------------------

//-------------------------PASSENGER LIST --------------------------------------------------------

// ------------------HIDING UNHIDING FORMS DEPENDING OF NUMBER OF PASSENGERS-----------------------
$NumberOfAdultsform = $('#NumberOfAdultsform');
$NumberOfChildren_form = $ ('#NumberOfChildren_form');
$passengerInformationContainer_Form = $('#passengerInformationContainer_Form')
$passenger_1_1_form = $('#passenger_1_1_form');
$passenger_2_1_form = $('#passenger_2_1_form');
$passenger_3_1_form = $('#passenger_3_1_form');
$passenger_4_1_form = $('#passenger_4_1_form');
$passenger_5_1_form = $('#passenger_5_1_form');
$passenger_6_1_form = $('#passenger_6_1_form');
$child_1_1_form = $('#child_1_1_form');
$child_1_2_form = $('#child_1_2_form');
$child_1_3_form = $('#child_1_3_form');


$passenger_2_1_form.hide();
$passenger_3_1_form.hide();
$passenger_4_1_form.hide();
$passenger_5_1_form.hide();
$passenger_6_1_form.hide();
$child_1_1_form.hide();
$child_1_2_form.hide();
$child_1_3_form.hide();



$NumberOfAdultsform.on('change',function(){
  
if(this.value >= 2){$passenger_2_1_form.show();}
else{$passenger_2_1_form.hide()};

if(this.value >=3){$passenger_3_1_form.show()}
else{$passenger_3_1_form.hide()}

if(this.value >=4){$passenger_4_1_form.show()}
else{$passenger_4_1_form.hide()}

if(this.value >=5){$passenger_5_1_form.show()}
else{$passenger_5_1_form.hide()}

if(this.value >=6){$passenger_6_1_form.show()}
else{$passenger_6_1_form.hide()}


});



$NumberOfChildren_form.on('change', function(){
if(this.value>=1) {$child_1_1_form.show()}
else{$child_1_1_form.hide()};
if(this.value>=2){$child_1_2_form.show()}
else{$child_1_2_form.hide()};
if(this.value>=3){$child_1_3_form.show()}
else{$child_1_3_form.hide()};
})



// ------------------END OF HIDING UNHIDING FORMS DEPENDING OF NUMBER OF PASSENGERS-----------------------





//---------------------END OF PASSENGER LIST --------------------------------------------------------




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

























