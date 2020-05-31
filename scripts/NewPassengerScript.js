function myFunction() {
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

  // --- FLIGHT FROM TO SCRIPTS --//

  //PARTLY WORKING!!!!!
  // $('.dest_opt').removeAttr('disabled');
  // $dest_opt
  //   .eq(parseInt($flightFromform.val() - 1))
  //   .attr('disabled', 'disabled');

  // $flightFromform.on('change', function () {
  //   $('.dest_opt').removeAttr('disabled');
  //   $dest_opt
  //     .eq(parseInt($flightFromform.val() - 1))
  //     .attr('disabled', 'disabled');
  //   // -- WAR_BER --//
  //   if ($flightFromform.val() == 1 && $Destinationform.val() == 2) {
  //     console.log('flightWA<->BER');
  //     console.log($flightFromform.val() - 1);
  //   } else if ($flightFromform.val() == 2 && $Destinationform.val() == 1) {
  //     console.log('flightWA<->BER');
  //     console.log($flightFromform.val() - 1);
  //   }

  //   // -- BER_NY --//
  //   else if ($flightFromform.val() == '1' && $Destinationform.val() == '3') {
  //     console.log('flightWA<->NY');
  //     console.log($flightFromform.val());
  //   } else if ($flightFromform.val() == '3' && $Destinationform.val() == '1') {
  //     console.log('flightWA<->NY');
  //     console.log($flightFromform.val());
  //   }

  //   // -- BER_NY --//
  //   else if ($flightFromform.val() == '2' && $Destinationform.val() == '3') {
  //     console.log('flightBER<->NY');
  //     console.log($flightFromform.val());
  //   } else if ($flightFromform.val() == '3' && $Destinationform.val() == '2') {
  //     console.log('flightBER<->NY');
  //     console.log($flightFromform.val());
  //     $('.dest_opt').removeAttr('disabled');
  //     $dest_opt
  //       .eq(parseInt($flightFromform.val() - 1))
  //       .attr('disabled', 'disabled');
  //   } else {
  //     console.log('other');
  //   }
  // });

  $('.dest_opt').removeAttr('disabled');
  $dest_opt
    .eq(parseInt($flightFromform.val() - 1))
    .attr('disabled', 'disabled');

  $flightFromform.on('change', function () {
    recalculate();
  });

  $Destinationform.on('change', function () {
    recalculate();
  });

  function recalculate() {
    $('.dest_opt').removeAttr('disabled');
    $dest_opt
      .eq(parseInt($flightFromform.val() - 1))
      .attr('disabled', 'disabled');
    // -- WAR_BER --//
    if ($flightFromform.val() == 1 && $Destinationform.val() == 2) {
      console.log('flightWA<->BER');
    } else if ($flightFromform.val() == 2 && $Destinationform.val() == 1) {
      console.log('flightWA<->BER');
    }

    // -- BER_NY --//
    else if ($flightFromform.val() == '1' && $Destinationform.val() == '3') {
      console.log('flightWA<->NY');
    } else if ($flightFromform.val() == '3' && $Destinationform.val() == '1') {
      console.log('flightWA<->NY');
    }

    // -- BER_NY --//
    else if ($flightFromform.val() == '2' && $Destinationform.val() == '3') {
      console.log('flightBER<->NY');
    } else if ($flightFromform.val() == '3' && $Destinationform.val() == '2') {
      console.log('flightBER<->NY');
      $('.dest_opt').removeAttr('disabled');
      $dest_opt
        .eq(parseInt($flightFromform.val() - 1))
        .attr('disabled', 'disabled');
    } else {
      console.log('other');
    }
  }

  // -- "YOUR ORDER" VARIABLES --//
  $calcNoPassengers = $('#calcNoPassengers');
  $calctarrif = $('#calctarrif');
  $calcAdditBag = $('#calcAdditBag');
  $calcSeat = $('#calcSeat');
  $calculationTotal = $('#calculationTotal');

  $calcNoPassengers.text('1');
  $calctarrif.append('test');
  $calcAdditBag.append('test');
  $calcSeat.append('test');
  $calculationTotal.append(' 2 386 PLN;');

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
});
