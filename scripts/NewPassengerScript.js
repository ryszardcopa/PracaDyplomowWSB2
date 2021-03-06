function logonTimeout() {
  setTimeout(() => {
    alert('You have been log out!! Please login again');
    window.open('./index.html', '_self');
  }, 10800000);
}

// 10800000

$(document).ready(function () {
  // ----------------LOGON TIMEOUT---------------------------

  // -- CHANGE UPDATES OF VALUES IN CALCULATION --//
  // -- VARIABLES FLIGHT --//
  $picker = $('#picker')
  $flightFromform = $('#flightFrom_form');
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



  // --Plane selection --//
  $plane1 = $('#plane1');
  $plane2 = $('#plane2');
  $plane3 = $('#plane3');

  // -- PRICES -- //
  $WAR_BER = 300;
  $WAR_NY = 1200;
  $BER_NY = 1500;

  $WarszawaDepartureTime = "13:00";
  $BerlinDepartureTime = "16:00";
  $NowyJorkDepartureTime = "20:00"

  $TarrifBusiness = 200;
  $TarrifFirstClass = 400;

  $AddBag20 = 50;
  $AddBag32 = 80;

  // -- "YOUR ORDER" VARIABLES --//
  $calcNoPassengers = $('#calcNoPassengers');
  $calcFlightCost = $('#calcFlightCost');
  $p1_1_calcTarrif = $('#p1_1_calcTarrif');
  $calcAdditBag = $('#calcAdditBag');
  $calcSeat = $('#calcSeat');
  $calculationTotal = $('#calculationTotal');
  $calcFlightSelected = $WAR_BER;



  // -- DATEPICKER --//
  $('#picker').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    opens: 'right',
    drops: 'down',
    minDate: moment(),
    maxDate: moment().add(365, 'days'),
    showWeekNumbers: true,
    startDate: moment(),
    locale: {
      format: 'YYYY-MM-DD'
    }

  });

  // -- CALC SECTION DEPARTURE DATE AND TIME UPDATE --//

  $calcDeparture_Date = $('#calcDeparture_Date');
  $calcDeparture_Time = $('#calcDeparture_Time');

  $picker.on('change', function () {
    $calcDeparture_Date.children().remove();
    $calcDeparture_Time.children().remove();
    $calcDeparture_Date.append('<span>' + $picker.val() + '</span>')

    if ($flightFromform.val() == 1) {
      $calcDeparture_Time.append('<span>' + $WarszawaDepartureTime + '</span>');
    }
    else if ($flightFromform.val() == 2) {
      $calcDeparture_Time.append('<span>' + $BerlinDepartureTime + '</span>');
    }
    else {
      $calcDeparture_Time.append('<span>' + $NowyJorkDepartureTime + '</span>');
    }

  });

  function DateTimeUpdate() {
    $calcDeparture_Date.children().remove();
    $calcDeparture_Time.children().remove();
    $calcDeparture_Date.append('<span>' + $picker.val() + '</span>')

    if ($flightFromform.val() == 1) {
      $calcDeparture_Time.append('<span>' + '13:00' + '</span>');
    }
    else if ($flightFromform.val() == 2) {
      $calcDeparture_Time.append('<span>' + '16:00' + '</span>');
    }
    else {
      $calcDeparture_Time.append('<span>' + '20:00' + '</span>');
    }

  }

  DateTimeUpdate();






  // -- END CALC SECTION DEPARTURE DATE AND TIME --//



  // --- FLIGHT FROM TO SCRIPTS --//

  //-- INITIAL SETUP-- //
  $('.dest_opt').removeAttr('disabled');
  $dest_opt
    .eq(parseInt($flightFromform.val() - 1))
    .attr('disabled', 'disabled');
  $calcFlightSelected = $WAR_BER;
  $NumberOfPassengers.val(1);
  $p1_1_tarrifForm.val(0);
  $p2_1_tarrifForm.val(0);
  $p3_1_tarrifForm.val(0);
  $p4_1_tarrifForm.val(0);
  $p5_1_tarrifForm.val(0);
  $p6_1_tarrifForm.val(0);

  $p1_1_AdditionalBaggageForm.val(0);
  $p2_1_AdditionalBaggageForm.val(0);
  $p3_1_AdditionalBaggageForm.val(0);
  $p4_1_AdditionalBaggageForm.val(0);
  $p5_1_AdditionalBaggageForm.val(0);
  $p6_1_AdditionalBaggageForm.val(0);




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
    PlaneSelection();
    DateTimeUpdate();
  });

  $Destinationform.on('change', function () {
    recalculate();
    updatePrice();
    PlaneSelection()
  });

  $NumberOfPassengers.on('change', function () {
    TarrifUpdate();
    updatePrice();
  });

  function PlaneSelection() {
    if ($calcFlightSelected == $WAR_BER) {

      $plane1.show()
    } else {
      $plane1.hide();
    }
    if ($calcFlightSelected == $WAR_NY) {

      $plane2.show()
    } else {
      $plane2.hide();
    }
    if ($calcFlightSelected == $BER_NY) {

      $plane3.show();
    } else {
      $plane3.hide();
    }
  }

  PlaneSelection();

  function TarrifUpdate() {
    if ($NumberOfPassengers.val() == 1) {
      if ($('#p2_1_calcTarrifParagraph').length) {
        $('#p2_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('#p3_1_calcTarrifParagraph').length) {
        $('#p3_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('#p4_1_calcTarrifParagraph').length) {
        $('#p4_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('#p5_1_calcTarrifParagraph').length) {
        $('#p5_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('#p6_1_calcTarrifParagraph').length) {
        $('#p6_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('.p2_1_addBagg_paragraph').length) {
        $('.p2_1_addBagg_paragraph').remove();
        updatePrice();
      }
      if ($('.p3_1_addBagg_paragraph').length) {
        $('.p3_1_addBagg_paragraph').remove();
        updatePrice();
      }
      if ($('.p4_1_addBagg_paragraph').length) {
        $('.p4_1_addBagg_paragraph').remove();
        updatePrice();
      }
      if ($('.p5_1_addBagg_paragraph').length) {
        $('.p5_1_addBagg_paragraph').remove();
        updatePrice();
      }
      if ($('.p6_1_addBagg_paragraph').length) {
        $('.p6_1_addBagg_paragraph').remove();
        updatePrice();
      }
    }
    if ($NumberOfPassengers.val() == 2) {
      if ($('#p3_1_calcTarrifParagraph').length) {
        $('#p3_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('#p4_1_calcTarrifParagraph').length) {
        $('#p4_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('#p5_1_calcTarrifParagraph').length) {
        $('#p5_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('#p6_1_calcTarrifParagraph').length) {
        $('#p6_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('.p3_1_addBagg_paragraph').length) {
        $('.p3_1_addBagg_paragraph').remove();
        updatePrice();
      }
      if ($('.p4_1_addBagg_paragraph').length) {
        $('.p4_1_addBagg_paragraph').remove();
        updatePrice();
      }
      if ($('.p5_1_addBagg_paragraph').length) {
        $('.p5_1_addBagg_paragraph').remove();
        updatePrice();
      }
      if ($('.p6_1_addBagg_paragraph').length) {
        $('.p6_1_addBagg_paragraph').remove();
        updatePrice();
      }
    }
    if ($NumberOfPassengers.val() == 3) {
      if ($('#p4_1_calcTarrifParagraph').length) {
        $('#p4_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('#p5_1_calcTarrifParagraph').length) {
        $('#p5_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('#p6_1_calcTarrifParagraph').length) {
        $('#p6_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('.p4_1_addBagg_paragraph').length) {
        $('.p4_1_addBagg_paragraph').remove();
        updatePrice();
      }
      if ($('.p5_1_addBagg_paragraph').length) {
        $('.p5_1_addBagg_paragraph').remove();
        updatePrice();
      }
      if ($('.p6_1_addBagg_paragraph').length) {
        $('.p6_1_addBagg_paragraph').remove();
        updatePrice();
      }
    }
    if ($NumberOfPassengers.val() == 4) {
      if ($('#p5_1_calcTarrifParagraph').length) {
        $('#p5_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('#p6_1_calcTarrifParagraph').length) {
        $('#p6_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('.p5_1_addBagg_paragraph').length) {
        $('.p5_1_addBagg_paragraph').remove();
        updatePrice();
      }
      if ($('.p6_1_addBagg_paragraph').length) {
        $('.p6_1_addBagg_paragraph').remove();
        updatePrice();
      }
    }
    if ($NumberOfPassengers.val() == 5) {
      if ($('#p6_1_calcTarrifParagraph').length) {
        $('#p6_1_calcTarrifParagraph').remove();
        updatePrice();
      }
      if ($('.p6_1_addBagg_paragraph').length) {
        $('.p6_1_addBagg_paragraph').remove();
        updatePrice();
      }
    }
    if ($NumberOfPassengers.val() == 6) {
      updatePrice();
    }
  }

  // --FUNCTION RECALCULATING PRICE BASED ON DESTINATION --//
  function recalculate() {
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

    // -- WAR_NY --//
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

      $calcFlightCost.text($calcFlightSelected);
    } else if ($flightFromform.val() == '3' && $Destinationform.val() == '2') {
      $calcFlightSelected = $BER_NY;

      $calcFlightCost.text($calcFlightSelected);
    } else {
      alert('Wrong destination');
    }
  }

  // -- FUNCTION CALCULATING VARIABLE TOTAL PRICE --//
  function updatePrice() {
    $TotalPrice =
      parseInt($NumberOfPassengers.val()) * $calcFlightSelected +
      $('.BusinessClass').length * $TarrifBusiness +
      $('.FirstClass').length * $TarrifFirstClass +
      $('.32kg').length * $AddBag32 +
      $('.20kg').length * $AddBag20;
    appendUpdatesToCalc();
    return $TotalPrice;
  }

  updatePrice();

  function appendUpdatesToCalc() {
    $calculationTotal.text($TotalPrice + ' PLN');
  }
  appendUpdatesToCalc();

  $calcNoPassengers.text('1');
  $calcFlightCost.text($calcFlightSelected);
  $calcAdditBag.append('test');
  $calcSeat.append('test');
  $calculationTotal.text($TotalPrice + ' PLN');

  // VARIABLES FROM SCRIPTS //

  // --UPDATE OF TARRIF INITIAL SETUP--//
  $p1_1_calcTarrif.append(
    '<p id="p1_1_calcTarrifParagraph">Pasażer1: <span class="Economic">Economic class</span></p>'
  );

  // --UPDATE OF TARRIF CHANGES--//

  // --PASSENGER 1_1 --//
  $p1_1_tarrifForm.on('change', function () {
    $('#p1_1_calcTarrifParagraph').remove();
    if ($p1_1_tarrifForm.val() == 1) {
      $p1_1_calcTarrif.append(
        '<p id="p1_1_calcTarrifParagraph">Pasażer1: <span class="BusinessClass">Business class+' +
        $TarrifBusiness +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else if ($p1_1_tarrifForm.val() == 2) {
      $p1_1_calcTarrif.append(
        '<p id="p1_1_calcTarrifParagraph">Pasażer1: <span class="FirstClass">FirstClass class+' +
        $TarrifFirstClass +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else {
      $p1_1_calcTarrif.append(
        '<p id="p1_1_calcTarrifParagraph">Pasażer1: <span class="Economic">Economic class</span></p>'
      );
      updatePrice();
    }
  });

  // --PASSENGER 2_1 --//
  $p2_1_tarrifForm.on('change', function () {

    $('#p2_1_calcTarrifParagraph').remove();
    if ($p2_1_tarrifForm.val() == 1) {
      $('#p2_1_calcTarrif').append(
        '<p id="p2_1_calcTarrifParagraph">Pasażer2: <span class="BusinessClass">Business class+' +
        $TarrifBusiness +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else if ($p2_1_tarrifForm.val() == 2) {
      $('#p2_1_calcTarrif').append(
        '<p id="p2_1_calcTarrifParagraph">Pasażer2: <span class="FirstClass">FirstClass class+' +
        $TarrifFirstClass +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else {
      $('#p2_1_calcTarrifParagraph').remove();
      updatePrice();
    }
  });

  // --PASSENGER 3_1 --//
  $p3_1_tarrifForm.on('change', function () {
    $('#p3_1_calcTarrifParagraph').remove();
    if ($p3_1_tarrifForm.val() == 1) {
      $('#p3_1_calcTarrif').append(
        '<p id="p3_1_calcTarrifParagraph">Pasażer3: <span class="BusinessClass">Business class+' +
        $TarrifBusiness +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else if ($p3_1_tarrifForm.val() == 2) {
      $('#p3_1_calcTarrif').append(
        '<p id="p3_1_calcTarrifParagraph">Pasażer3: <span class="FirstClass">FirstClass class+' +
        $TarrifFirstClass +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else {
      $('#p3_1_calcTarrifParagraph').remove();
      updatePrice();
    }
  });
  // --PASSENGER 4_1 --//
  $p4_1_tarrifForm.on('change', function () {
    $('#p4_1_calcTarrifParagraph').remove();
    if ($p4_1_tarrifForm.val() == 1) {
      $('#p4_1_calcTarrif').append(
        '<p id="p4_1_calcTarrifParagraph">Pasażer4: <span class="BusinessClass">Business class+' +
        $TarrifBusiness +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else if ($p4_1_tarrifForm.val() == 2) {
      $('#p4_1_calcTarrif').append(
        '<p id="p4_1_calcTarrifParagraph">Pasażer4: <span class="FirstClass">FirstClass class+' +
        $TarrifFirstClass +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else {
      $('#p4_1_calcTarrifParagraph').remove();
      updatePrice();
    }
  });

  // --PASSENGER 5_1 --//
  $p5_1_tarrifForm.on('change', function () {
    $('#p5_1_calcTarrifParagraph').remove();
    if ($p5_1_tarrifForm.val() == 1) {
      $('#p5_1_calcTarrif').append(
        '<p id="p5_1_calcTarrifParagraph">Pasażer5: <span class="BusinessClass">Business class+' +
        $TarrifBusiness +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else if ($p5_1_tarrifForm.val() == 2) {
      $('#p5_1_calcTarrif').append(
        '<p id="p5_1_calcTarrifParagraph">Pasażer5: <span id="FirstClass_paragraph">FirstClass class+' +
        $TarrifFirstClass +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else {
      $('#p5_1_calcTarrifParagraph').remove();
      updatePrice();
    }
  });

  // --PASSENGER 6_1 --//
  $p6_1_tarrifForm.on('change', function () {
    $('#p6_1_calcTarrifParagraph').remove();
    if ($p6_1_tarrifForm.val() == 1) {
      $('#p6_1_calcTarrif').append(
        '<p id="p6_1_calcTarrifParagraph">Pasażer6: <span class="BusinessClass">Business class+' +
        $TarrifBusiness +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else if ($p6_1_tarrifForm.val() == 2) {
      $('#p6_1_calcTarrif').append(
        '<p id="p6_1_calcTarrifParagraph">Pasażer6: <span class="FirstClass">FirstClass class+' +
        $TarrifFirstClass +
        ' PLN' +
        '</span></p>'
      );
      updatePrice();
    } else {
      $('#p6_1_calcTarrifParagraph').remove();
      updatePrice();
    }
  });

  // --ADDITIONAL BAGGAGE --//
  // --PASSENGER 1_1 --//

  $('#p1_1_AdditionalBaggageForm').on('change', function () {

    $('.p1_1_addBagg_paragraph').remove();
    if ($('#p1_1_AdditionalBaggageForm').val() == 1) {
      $('#p1_1_calc_AddBagg').append(
        '<p class="p1_1_addBagg_paragraph">Pasażer1->20kg+<span class="20kg"></span>' +
        $AddBag20 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else if ($('#p1_1_AdditionalBaggageForm').val() == 2) {
      $('#p1_1_calc_AddBagg').append(
        '<p class="p1_1_addBagg_paragraph">Pasażer1->32kg+<span class="32kg"></span>: ' +
        $AddBag32 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else {
      $('.p1_1_addBagg_paragraph').remove();
      updatePrice();
    }
  });


  // --PASSENGER 2_1 --//
  $('#p2_1_AdditionalBaggageForm').on('change', function () {

    $('.p2_1_addBagg_paragraph').remove();
    if ($('#p2_1_AdditionalBaggageForm').val() == 1) {
      $('#p2_1_calc_AddBagg').append(
        '<p class="p2_1_addBagg_paragraph">Pasażer2->20kg+<span class="20kg"></span>' +
        $AddBag20 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else if ($('#p2_1_AdditionalBaggageForm').val() == 2) {
      $('#p2_1_calc_AddBagg').append(
        '<p class="p2_1_addBagg_paragraph">Pasażer2->32kg+<span class="32kg"></span>' +
        $AddBag32 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else {
      $('.p2_1_addBagg_paragraph').remove();
      updatePrice();
    }
  });

  // --PASSENGER 3_1 --//
  $('#p3_1_AdditionalBaggageForm').on('change', function () {

    $('.p3_1_addBagg_paragraph').remove();
    if ($('#p3_1_AdditionalBaggageForm').val() == 1) {
      $('#p3_1_calc_AddBagg').append(
        '<p class="p3_1_addBagg_paragraph">Pasażer3->20kg+<span class="20kg"></span>' +
        $AddBag20 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else if ($('#p3_1_AdditionalBaggageForm').val() == 2) {
      $('#p3_1_calc_AddBagg').append(
        '<p class="p3_1_addBagg_paragraph">Pasażer3->32kg+<span class="32kg"></span>' +
        $AddBag32 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else {
      $('.p3_1_addBagg_paragraph').remove();
      updatePrice();
    }
  });

  // --PASSENGER 4_1 --//
  $('#p4_1_AdditionalBaggageForm').on('change', function () {

    $('.p4_1_addBagg_paragraph').remove();
    if ($('#p4_1_AdditionalBaggageForm').val() == 1) {
      $('#p4_1_calc_AddBagg').append(
        '<p class="p4_1_addBagg_paragraph">Pasażer4->20kg+<span class="20kg"></span>' +
        $AddBag20 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else if ($('#p4_1_AdditionalBaggageForm').val() == 2) {
      $('#p4_1_calc_AddBagg').append(
        '<p class="p4_1_addBagg_paragraph">Pasażer4->32kg+<span class="32kg"></span>' +
        $AddBag32 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else {
      $('.p4_1_addBagg_paragraph').remove();
      updatePrice();
    }
  });

  // --PASSENGER 5_1 --//
  $('#p5_1_AdditionalBaggageForm').on('change', function () {

    $('.p5_1_addBagg_paragraph').remove();
    if ($('#p5_1_AdditionalBaggageForm').val() == 1) {
      $('#p5_1_calc_AddBagg').append(
        '<p class="p5_1_addBagg_paragraph">Pasażer5->20kg+<span class="20kg"></span>' +
        $AddBag20 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else if ($('#p5_1_AdditionalBaggageForm').val() == 2) {
      $('#p5_1_calc_AddBagg').append(
        '<p class="p5_1_addBagg_paragraph">Pasażer5->32kg+<span class="32kg"></span>' +
        $AddBag32 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else {
      $('.p5_1_addBagg_paragraph').remove();
      updatePrice();
    }
  });

  // --PASSENGER 6_1 --//
  $('#p6_1_AdditionalBaggageForm').on('change', function () {

    $('.p6_1_addBagg_paragraph').remove();
    if ($('#p6_1_AdditionalBaggageForm').val() == 1) {
      $('#p6_1_calc_AddBagg').append(
        '<p class="p6_1_addBagg_paragraph">Pasażer6->20kg+<span class="20kg"></span>' +
        $AddBag20 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else if ($('#p6_1_AdditionalBaggageForm').val() == 2) {
      $('#p6_1_calc_AddBagg').append(
        '<p class="p6_1_addBagg_paragraph">Pasażer6->32kg+<span class="32kg"></span>' +
        $AddBag32 +
        ' PLN' +
        '</p>'
      );
      updatePrice();
    } else {
      $('.p6_1_addBagg_paragraph').remove();
      updatePrice();
    }
  });




  // -- SEATS SELECTION --//
  $Plane1_FirstClass = $('.cls-128')

  $Plane1_FirstClass.on("click", function () {
    var $this = $(this);
    if ($this.is(".cls-128"
    )) {
      $this.removeClass('cls-128')
      $this.addClass('cls-900')
      $calc_Seats.append('<span id="' + 'calc_' + $this.attr('id') + '">' + $this.attr('id') + ',' + '</span>')
    }
    else {
      $this.removeClass('cls-900')
      $this.addClass('cls-128')
      $('span#calc_F-01').remove();
      $('span#calc_E-01').remove();
      $('span#calc_B-01').remove();
      $('span#calc_A-01').remove();
      $('span#calc_F-02').remove();
      $('span#calc_E-02').remove();
    }

  })

  $Plane1_FirstClass = $('.cls-127');
  $calc_Seats = $('#calc_Seats');


  $Plane1_FirstClass.on("click", function () {

    var $this = $(this);
    $calc_Seats.removeAttr('span')
    if ($this.is(".cls-127"
    )) {
      $this.removeClass('cls-127');
      $this.addClass('cls-900');
      $calc_Seats.append('<span id="' + 'calc_' + $this.attr('id') + '">' + $this.attr('id') + ',' + '</span>')

    }
    else {
      $this.removeClass('cls-900')
      $this.addClass('cls-127');
      $('span#calc_A-02').remove();
      $('span#calc_A-04').remove();
      $('span#calc_B-04').remove();
      $('span#calc_E-01').remove();
      $('span#calc_E-02').remove();
      $('span#calc_F-07').remove();
      $('span#calc_B-07').remove();
      $('span#calc_C-07').remove();
      $('span#calc_C-08').remove();
      $('span#calc_B-08').remove();
      $('span#calc_D-11').remove();
    }
  })


  $Plane2_BusinessClass = $('.cls-131')

  $Plane2_BusinessClass.on("click", function () {
    var $this = $(this);
    if ($this.is(".cls-131"
    )) {
      $this.removeClass('cls-131')
      $this.addClass('cls-900')
      $calc_Seats.append('<span id="' + 'calc_' + $this.attr('id') + '">' + $this.attr('id') + ',' + '</span>')
    }
    else {
      $this.removeClass('cls-900')
      $this.addClass('cls-131')
      $('span#calc_A-07').remove();
      $('span#calc_A-09').remove();
      $('span#calc_B-09').remove();
      $('span#calc_C-09').remove();
      $('span#calc_D-08').remove();
      $('span#calc_C-08').remove();
    }

  })


  $Plane2_EconomicClass = $('.cls-1010')

  $Plane2_EconomicClass.on("click", function () {

    var $this = $(this);
    if ($this.is(".cls-1010"
    )) {
      $this.removeClass('cls-1010')
      $this.addClass('cls-900')
      $calc_Seats.append('<span id="' + 'calc_' + $this.attr('id') + '">' + $this.attr('id') + ',' + '</span>')
    }
    else {
      $this.removeClass('cls-900')
      $this.addClass('cls-1010')
      $('span#calc_F-20').remove();
      $('span#calc_E-20').remove();
      $('span#calc_D-20').remove();
      $('span#calc_C-12').remove();
      $('span#calc_B-12').remove();
      $('span#calc_A-12').remove();
      $('span#calc_A-20').remove();
      $('span#calc_C-20').remove();
      $('span#calc_A-21').remove();
      $('span#calc_F-21').remove();
      $('span#calc_E-21').remove();
      $('span#calc_D-21').remove();
      $('span#calc_C-21').remove();
      $('span#calc_B-21').remove();
      $('span#calc_A-21').remove();
    }

  })


  $FirstClassSeats_Plane2 = $('.st262')

  $FirstClassSeats_Plane2.on("click", function () {
    var $this = $(this);
    if ($this.is(".st262"
    )) {
      $this.removeClass('st262')
      $this.addClass('cls-900')
      $calc_Seats.append('<span id="' + 'calc_' + $this.attr('id') + '">' + $this.attr('id') + ',' + '</span>')
    }
    else {
      $this.removeClass('cls-900')
      $this.addClass('st262')
      $('span#calc_A-01').remove();
      $('span#calc_B-01').remove();
      $('span#calc_A-02').remove();
      $('span#calc_B-02').remove();
      $('span#calc_F-05').remove();
      $('span#calc_E-05').remove();

    }

  })

  $businessClassSeats_Plane2 = $('.st261')

  $businessClassSeats_Plane2.on("click", function () {
    var $this = $(this);
    if ($this.is(".st261"
    )) {
      $this.removeClass('st261')
      $this.addClass('cls-900')
      $calc_Seats.append('<span id="' + 'calc_' + $this.attr('id') + '">' + $this.attr('id') + ',' + '</span>')
    }
    else {
      $this.removeClass('cls-900')
      $this.addClass('st261')
      $('span#calc_F-07').remove();
      $('span#calc_E-07').remove();
      $('span#calc_D-07').remove();
      $('span#calc_F-08').remove();
      $('span#calc_E-08').remove();
      $('span#calc_D-08').remove();
    }

  })







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
