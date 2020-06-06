function logonTimeout() {
  setTimeout(() => {
    alert('You have been log out!! Please login again');
    window.open('./index.html', '_self');
  }, 10800000);
}

$(document).ready(function () {
  // ----------------LOGON TIMEOUT---------------------------

  // -- CHANGE UPDATES OF VALUES IN CALCULATION --//
  // -- VARIABLES FLIGHT --//
  $DepartureDateform = $('#DepartureDate-form');
  $flightFromform = $('#flightFrom-form');
  $flight_from_opt = $('.flight_from_opt');
  $Destinationform = $('#Destinationform');
  $dest_opt = $('.dest_opt');
  $NumberOfPassengers = $('#NumberOfPassengers');

  // -- VARIABLES PASSENGERS--//
  $passenger_1_1_form = $('#passenger_1_1_form');
  $passenger_2_1_form = $('#passenger_2_1_form');
  $passenger_3_1_form = $('#passenger_3_1_form');
  $passenger_4_1_form = $('#passenger_4_1_form');
  $passenger_5_1_form = $('#passenger_5_1_form');
  $passenger_6_1_form = $('#passenger_6_1_form');

  $p_1_1_personalDataForm_firstName = $('#p_1_1_personalDataForm_firstName');
  $p_2_1_personalDataForm_firstName = $('#p_2_1_personalDataForm_firstName');
  $p_3_1_personalDataForm_firstName = $('#p_3_1_personalDataForm_firstName');
  $p_4_1_personalDataForm_firstName = $('#p_4_1_personalDataForm_firstName');
  $p_5_1_personalDataForm_firstName = $('#p_5_1_personalDataForm_firstName');
  $p_6_1_personalDataForm_firstName = $('#p_6_1_personalDataForm_firstName');

  $p_1_1_personalDataForm_lastName = $('#p_1_1_personalDataForm_lastName');
  $p_2_1_personalDataForm_lastName = $('#p_2_1_personalDataForm_lastName');
  $p_3_1_personalDataForm_lastName = $('#p_3_1_personalDataForm_lastName');
  $p_4_1_personalDataForm_lastName = $('#p_4_1_personalDataForm_lastName');
  $p_5_1_personalDataForm_lastName = $('#p_5_1_personalDataForm_lastName');
  $p_6_1_personalDataForm_lastName = $('#p_6_1_personalDataForm_lastName');

  $p1_1_tarrifForm = $('#p1_1_tarrifForm');
  $p2_1_tarrifForm = $('#p2_1_tarrifForm');
  $p3_1_tarrifForm = $('#p3_1_tarrifForm');
  $p4_1_tarrifForm = $('#p4_1_tarrifForm');
  $p5_1_tarrifForm = $('#p5_1_tarrifForm');
  $p6_1_tarrifForm = $('#p6_1_tarrifForm');

  $p1_1_AdditionalBaggageForm = $('#p1_1_AdditionalBaggageForm');
  $p2_1_AdditionalBaggageForm = $('#p2_1_AdditionalBaggageForm');
  $p3_1_AdditionalBaggageForm = $('#p3_1_AdditionalBaggageForm');
  $p4_1_AdditionalBaggageForm = $('#p4_1_AdditionalBaggageForm');
  $p5_1_AdditionalBaggageForm = $('#p5_1_AdditionalBaggageForm');
  $p6_1_AdditionalBaggageForm = $('#p6_1_AdditionalBaggageForm');

  $p1_1_SeatsForm = $('#p1_1_SeatsForm');
  $p1_2_SeatsForm = $('#p2_1_SeatsForm');
  $p1_3_SeatsForm = $('#p3_1_SeatsForm');
  $p1_4_SeatsForm = $('#p4_1_SeatsForm');
  $p1_5_SeatsForm = $('#p5_1_SeatsForm');
  $p1_6_SeatsForm = $('#p6_1_SeatsForm');

  // -- PRICES -- //
  $WAR_BER = 300;
  $WAR_NY = 1200;
  $BER_NY = 1500;

  $TarrifBusiness = 200;
  $TarrifFirstClass = 400;

  // -- "YOUR ORDER" VARIABLES --//
  $calcNoPassengers = $('#calcNoPassengers');
  $calcFlightCost = $('#calcFlightCost');
  $calctarrif = $('#calctarrif');
  $calcAdditBag = $('#calcAdditBag');
  $calcSeat = $('#calcSeat');
  $calculationTotal = $('#calculationTotal');
  $calcFlightSelected = $WAR_BER;

  // --- FLIGHT FROM TO SCRIPTS --//

  //-- INITIAL SETUP-- //
  $('.dest_opt').removeAttr('disabled');
  $dest_opt
    .eq(parseInt($flightFromform.val() - 1))
    .attr('disabled', 'disabled');

  // -- WAR_BER --//
  if ($flightFromform.val() == 1 && $Destinationform.val() == 2) {
    $calcFlightSelected = $WAR_BER;
    $calcFlightCost.text($calcFlightSelected);
  } else if ($flightFromform.val() == 2 && $Destinationform.val() == 1) {
    $calcFlightSelected = $WAR_BER;
    $calcFlightCost.text($calcFlightSelected);
  }

  // -- $WAR_NY --//
  else if ($flightFromform.val() == '1' && $Destinationform.val() == '3') {
    $calcFlightSelected = $WAR_NY;
    $calcFlightCost.text($calcFlightSelected);
  } else if ($flightFromform.val() == '3' && $Destinationform.val() == '1') {
    $calcFlightSelected = $WAR_NY;
    $calcFlightCost.text($calcFlightSelected);
  }

  // -- BER_NY --//
  else if ($flightFromform.val() == '2' && $Destinationform.val() == '3') {
    $calcFlightSelected = $BER_NY;
  } else if ($flightFromform.val() == '3' && $Destinationform.val() == '2') {
    $calcFlightSelected = $BER_NY;
  } else {
    alert('wrong destionations');
  }

  //-- UPDATES -- //

  $flightFromform.on('change', function () {
    recalculate();
    updatePrice();
    appendUpdatesToCalc();
  });

  $Destinationform.on('change', function () {
    recalculate();
    updatePrice();
    appendUpdatesToCalc();
  });

  function recalculate() {
    $('.dest_opt').removeAttr('disabled');
    $dest_opt
      .eq(parseInt($flightFromform.val() - 1))
      .attr('disabled', 'disabled');

    // -- WAR_BER --//
    if ($flightFromform.val() == 1 && $Destinationform.val() == 2) {
      $calcFlightSelected = $WAR_BER;
      console.log($calcFlightSelected);
      $calcFlightCost.text($calcFlightSelected);
    } else if ($flightFromform.val() == 2 && $Destinationform.val() == 1) {
      $calcFlightSelected = $WAR_BER;
      console.log($calcFlightSelected);
      $calcFlightCost.text($calcFlightSelected);
    }

    // -- WAR_NY --//
    else if ($flightFromform.val() == '1' && $Destinationform.val() == '3') {
      $calcFlightSelected = $WAR_NY;
      console.log($calcFlightSelected);
      $calcFlightCost.text($calcFlightSelected);
    } else if ($flightFromform.val() == '3' && $Destinationform.val() == '1') {
      $calcFlightSelected = $WAR_NY;
      console.log($calcFlightSelected);
      $calcFlightCost.text($calcFlightSelected);
    }

    // -- BER_NY --//
    else if ($flightFromform.val() == '2' && $Destinationform.val() == '3') {
      $calcFlightSelected = $BER_NY;
      console.log($calcFlightSelected);
      $calcFlightCost.text($calcFlightSelected);
    } else if ($flightFromform.val() == '3' && $Destinationform.val() == '2') {
      $calcFlightSelected = $BER_NY;
      console.log($calcFlightSelected);
      $calcFlightCost.text($calcFlightSelected);
    } else {
      alert('Wrong destination');
    }
  }

  function updatePrice() {
    $TotalPrice = parseInt($NumberOfPassengers.val()) * $calcFlightSelected;
    return $TotalPrice;
  }

  updatePrice();

  $calcNoPassengers.text('1');
  $calcFlightCost.text($calcFlightSelected);
  // $calctarrif.append('test');
  $calcAdditBag.append('test');
  $calcSeat.append('test');
  $calculationTotal.text($TotalPrice + ' PLN');

  // VARIABLES FROM SCRIPTS //

  function appendUpdatesToCalc() {
    $calculationTotal.text($TotalPrice + ' PLN');
  }

  // --UPDATE OF TARRIF INITIAL SETUP--//
  $calctarrif.append(
    '<p id="p1_1_calcTarrifParagraph">Passenger1: <span id="p1_1_actualClass">Economic class</span></p>'
  );

  // --UPDATE OF TARRIF CHANGES--//

  // --PASSENGER 1_1 --//
  $p1_1_tarrifForm.on('change', function () {
    p1_1_calcTarrifParagraph.remove();
    if ($p1_1_tarrifForm.val() == 0) {
      $calctarrif.append(
        '<p id="p1_1_calcTarrifParagraph">Passenger1: <span id="p1_1_actualClass">Economic class</span></p>'
      );
    } else if ($p1_1_tarrifForm.val() == 1) {
      $calctarrif.append(
        '<p id="p1_1_calcTarrifParagraph">Passenger1: <span id="p1_1_actualClass">Business class+' +
          $TarrifBusiness +
          ' PLN' +
          '</span></p>'
      );
    } else if ($p1_1_tarrifForm.val() == 2) {
      $calctarrif.append(
        '<p id="p1_1_calcTarrifParagraph">Passenger1: <span id="p1_1_actualClass">FirstClass class+' +
          $TarrifFirstClass +
          ' PLN' +
          '</span></p>'
      );
    } else {
      alert('Something went wrong');
    }
  });

  // --PASSENGER 2_1 --//
  $p2_1_tarrifForm.on('change', function () {
    p2_1_calcTarrifParagraph.remove();
    if ($p2_1_tarrifForm.val() == 0) {
      $calctarrif.append(
        '<p id="p2_1_calcTarrifParagraph">Passenger2: <span id="p2_1_actualClass">Economic class</span></p>'
      );
    } else if ($p2_1_tarrifForm.val() == 1) {
      $calctarrif.append(
        '<p id="p2_1_calcTarrifParagraph">Passenger2: <span id="p2_1_actualClass">Business class+' +
          $TarrifBusiness +
          ' PLN' +
          '</span></p>'
      );
    } else if ($p2_1_tarrifForm.val() == 2) {
      $calctarrif.append(
        '<p id="p2_1_calcTarrifParagraph">Passenger2: <span id="p2_1_actualClass">FirstClass class+' +
          $TarrifFirstClass +
          ' PLN' +
          '</span></p>'
      );
    } else {
      alert('Something went wrong');
    }
  });

  // --PASSENGER 3_1 --//
  $p3_1_tarrifForm.on('change', function () {
    p3_1_calcTarrifParagraph.remove();
    if ($p3_1_tarrifForm.val() == 0) {
      $calctarrif.append(
        '<p id="p3_1_calcTarrifParagraph">Passenger1: <span id="p3_1_actualClass">Economic class</span></p>'
      );
    } else if ($p3_1_tarrifForm.val() == 1) {
      $calctarrif.append(
        '<p id="p3_1_calcTarrifParagraph">Passenger1: <span id="p3_1_actualClass">Business class+' +
          $TarrifBusiness +
          ' PLN' +
          '</span></p>'
      );
    } else if ($p3_1_tarrifForm.val() == 2) {
      $calctarrif.append(
        '<p id="p3_1_calcTarrifParagraph">Passenger1: <span id="p3_1_actualClass">FirstClass class+' +
          $TarrifFirstClass +
          ' PLN' +
          '</span></p>'
      );
    } else {
      alert('Something went wrong');
    }
  });
  // --PASSENGER 4_1 --//
  $p4_1_tarrifForm.on('change', function () {
    p4_1_calcTarrifParagraph.remove();
    if ($p4_1_tarrifForm.val() == 0) {
      $calctarrif.append(
        '<p id="p4_1_calcTarrifParagraph">Passenger1: <span id="p4_1_actualClass">Economic class</span></p>'
      );
    } else if ($p4_1_tarrifForm.val() == 1) {
      $calctarrif.append(
        '<p id="p4_1_calcTarrifParagraph">Passenger1: <span id="p4_1_actualClass">Business class+' +
          $TarrifBusiness +
          ' PLN' +
          '</span></p>'
      );
    } else if ($p4_1_tarrifForm.val() == 2) {
      $calctarrif.append(
        '<p id="p4_1_calcTarrifParagraph">Passenger1: <span id="p4_1_actualClass">FirstClass class+' +
          $TarrifFirstClass +
          ' PLN' +
          '</span></p>'
      );
    } else {
      alert('Something went wrong');
    }
  });

  // --PASSENGER 5_1 --//
  $p5_1_tarrifForm.on('change', function () {
    p5_1_calcTarrifParagraph.remove();
    if ($p5_1_tarrifForm.val() == 0) {
      $calctarrif.append(
        '<p id="p5_1_calcTarrifParagraph">Passenger1: <span id="p5_1_actualClass">Economic class</span></p>'
      );
    } else if ($p5_1_tarrifForm.val() == 1) {
      $calctarrif.append(
        '<p id="p5_1_calcTarrifParagraph">Passenger1: <span id="p5_1_actualClass">Business class+' +
          $TarrifBusiness +
          ' PLN' +
          '</span></p>'
      );
    } else if ($p5_1_tarrifForm.val() == 2) {
      $calctarrif.append(
        '<p id="p5_1_calcTarrifParagraph">Passenger1: <span id="p5_1_actualClass">FirstClass class+' +
          $TarrifFirstClass +
          ' PLN' +
          '</span></p>'
      );
    } else {
      alert('Something went wrong');
    }
  });

  // --PASSENGER 6_1 --//
  $p6_1_tarrifForm.on('change', function () {
    p6_1_calcTarrifParagraph.remove();
    if ($p6_1_tarrifForm.val() == 0) {
      $calctarrif.append(
        '<p id="p6_1_calcTarrifParagraph">Passenger1: <span id="p6_1_actualClass">Economic class</span></p>'
      );
    } else if ($p6_1_tarrifForm.val() == 1) {
      $calctarrif.append(
        '<p id="p6_1_calcTarrifParagraph">Passenger1: <span id="p6_1_actualClass">Business class+' +
          $TarrifBusiness +
          ' PLN' +
          '</span></p>'
      );
    } else if ($p6_1_tarrifForm.val() == 2) {
      $calctarrif.append(
        '<p id="p6_1_calcTarrifParagraph">Passenger1: <span id="p6_1_actualClass">FirstClass class+' +
          $TarrifFirstClass +
          ' PLN' +
          '</span></p>'
      );
    } else {
      alert('Something went wrong');
    }
  });

  // --Plane selection --//
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
  // --END OF Plane selection--//

  //--PASSENGER LIST--//

  // --HIDING UNHIDING FORMS DEPENDING OF NUMBER OF PASSENGERS--//

  $passenger_2_1_form.hide();
  $passenger_3_1_form.hide();
  $passenger_4_1_form.hide();
  $passenger_5_1_form.hide();
  $passenger_6_1_form.hide();

  $NumberOfPassengers.on('change', function () {
    $calcNoPassengers.remove(this.value);
    $calcNoPassengers.text(this.value);
    updatePrice();
    appendUpdatesToCalc();
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

  // --END OF HIDING UNHIDING FORMS DEPENDING OF NUMBER OF PASSENGERS--//

  //--END OF PASSENGER LIST--//
});
