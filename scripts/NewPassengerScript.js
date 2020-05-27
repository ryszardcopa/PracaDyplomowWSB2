// ----------------Time of logon---------------------------
function myFunction() {
  setTimeout(() => {
    alert('You have been log out!! Please login again');
    window.open('./index.html', '_self');
  }, 10800000);
}

// --------------------------Plane selection----------------------------------------------
$PlaneType_Form = $('#PlaneType_Form');
$plane1 = $('#plane1');
$plane2 = $('#plane2');
$plane3 = $('#plane3');

$plane2.hide().slideUp();
$plane3.hide().slideUp();

$PlaneType_Form.on('change', function () {
  if (this.value == 1) {
    $plane1.show().slideDown();
  } else {
    $plane1.slideUp().hide();
  }
  if (this.value == 2) {
    $plane2.show().slideDown();
  } else {
    $plane2.slideUp().hide();
  }
  if (this.value == 3) {
    $plane3.show().slideDown();
  } else {
    $plane3.slideUp().hide();
  }
});
// -----------------------END OF Plane selection----------------------------------------------

//-------------------------PASSENGER LIST --------------------------------------------------------

// ------------------HIDING UNHIDING FORMS DEPENDING OF NUMBER OF PASSENGERS-----------------------
$NumberOfPassengers = $('#NumberOfPassengers');
$NumberOfChildren_form = $('#NumberOfChildren_form');
$passengerInformationContainer_Form = $('#passengerInformationContainer_Form');
$passenger_1_1_form = $('#passenger_1_1_form');
$passenger_2_1_form = $('#passenger_2_1_form');
$passenger_3_1_form = $('#passenger_3_1_form');
$passenger_4_1_form = $('#passenger_4_1_form');
$passenger_5_1_form = $('#passenger_5_1_form');
$passenger_6_1_form = $('#passenger_6_1_form');

$passenger_2_1_form.hide();
$passenger_3_1_form.hide();
$passenger_4_1_form.hide();
$passenger_5_1_form.hide();
$passenger_6_1_form.hide();

$NumberOfPassengers.on('change', function () {
  if (this.value >= 2) {
    $passenger_2_1_form.show();
  } else {
    $passenger_2_1_form.hide();
  }

  if (this.value >= 3) {
    $passenger_3_1_form.show();
  } else {
    $passenger_3_1_form.hide();
  }

  if (this.value >= 4) {
    $passenger_4_1_form.show();
  } else {
    $passenger_4_1_form.hide();
  }

  if (this.value >= 5) {
    $passenger_5_1_form.show();
  } else {
    $passenger_5_1_form.hide();
  }

  if (this.value >= 6) {
    $passenger_6_1_form.show();
  } else {
    $passenger_6_1_form.hide();
  }
});

// ------------------END OF HIDING UNHIDING FORMS DEPENDING OF NUMBER OF PASSENGERS-----------------------

//---------------------END OF PASSENGER LIST --------------------------------------------------------

// --- FLIGHT PRICES AND PLANES --- //

// --- EUROPEAN ---//
$Kat_Fran = 300;
$Fran_LA = 1500;
$Kat_LA = 1200;
// --- TRANSATLANTIC --- //
