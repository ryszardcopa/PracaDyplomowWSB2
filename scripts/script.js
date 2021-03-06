$(document).ready(function () {
  // ---------------------Logon Verification---------------------------------------------------

  $modalLogin = $('#modalLogin');
  $modalPassword = $('#modalPassword');
  $modalLoginButton = $('#modalLoginButton');
  $modalWrongPasswordWarning = $('#modalWrongPasswordWarning');

  $.ajax({
    url: 'https://api.jsonbin.io/b/5eca5aafe91d1e45d110686c/1',
    success: function (data) {
      console.log(data);
      // ----------------Logon Verification user-------------------------
      function user(
        firstName,
        lastName,
        login,
        email,
        password,
        tarrif,
        AdditionalBaggage,
        seats
      ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.login = login;
        this.email = email;
        this.password = password;
        this.tarrif = tarrif;
        this.AdditionalBaggage = AdditionalBaggage;
        this.seats = seats;
      }
      $user1 = new user(
        data[0].firstName,
        data[0].lastName,
        data[0].login,
        data[0].email,
        data[0].password,
        data[0].tarrif,
        data[0].AdditionalBaggage,
        data[0].seats
      );
      $user2 = new user(
        data[1].firstName,
        data[1].lastName,
        data[1].login,
        data[1].email,
        data[1].password,
        data[1].tarrif,
        data[1].AdditionalBaggage,
        data[1].seats
      );
      $user3 = new user(
        data[2].firstName,
        data[2].lastName,
        data[2].login,
        data[2].email,
        data[2].password,
        data[2].tarrif,
        data[2].AdditionalBaggage,
        data[2].seats
      );

      // ---------------------Logon Verification button-----------------------

      $modalWrongPasswordWarning.hide();
      $modalPassword.on('focus', function (e) {
        $modalWrongPasswordWarning.hide();
      });

      $modalLoginButton.on('click', function (e) {
        if (
          ($modalLogin.val() === $user1.login &&
            $modalPassword.val() === $user1.password) ||
          ($modalLogin.val() === $user2.login &&
            $modalPassword.val() === $user2.password) ||
          ($modalLogin.val() === $user3.login &&
            $modalPassword.val() === $user3.password)
        ) {
          window.open('./NewPassenger.html', '_self');
        }
        {
          $modalWrongPasswordWarning.show();
        }
      });

      // ---------------------END Of Logon Verification---------------------------------------------
    },
    error: function () {
      console.log('something went wrong');
    },
  });


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

  // -- SENT QUESTION REGARDING FLIGHTS --//
  $QuestionAboutFlights = $('#QuestionAboutFlights');
  $CardWithHoursOfFly = $('#CardWithHoursOfFly');
  $flight_selection_departure_to = $('#flight_selection_departure_to');
  $picker = $('#picker');
  $Card_From = $('#Card_From');
  $Card_Date = $('#Card_Date');
  $Card_Hour = $('#Card_Hour');


  $QuestionAboutFlights.on('click', function () {
    // alert("działa");
    $CardWithHoursOfFly.toggleClass('d-none');
    $('.card-text span').remove();
    $Card_From.append('<span>' + $flight_selection_departure_to.val() + '</span>');
    $Card_Date.append('<span>' + $picker.val() + '</span>');

    if ($flight_selection_departure_to.val() == "Warszawa") {
      $Card_Hour.append('<span>' + "13:00" + '</span>');
    }
    else if ($flight_selection_departure_to.val() == "Berlin") {
      $Card_Hour.append('<span>' + "16:00" + '</span>');
    }
    else {
      $Card_Hour.append('<span>' + "20:00" + '</span>');
    }

  });

  $flight_selection_departure_to.on('change', function () {
    $CardWithHoursOfFly.addClass('d-none');
  })

  $picker.on('change', function () {
    $CardWithHoursOfFly.addClass('d-none');
  })










  // ---------------------Move of banner title -----------------------------------------------
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 200) {
      $('.nav-menu').addClass('custom-navbar');
    } else {
      $('.nav-menu').removeClass('custom-navbar');
    }
  });
  // ---------------------ENC OF Move of banner title -----------------------------------------------

  // ---------------------Move of picture in MISSION Section--------------------------------

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 650) {
      $('.camera-img').addClass('fromLeft');
      $('.mission-text').addClass('fromRight');
    } else {
      $('.camera-img').removeClass('fromLeft');
      $('.mission-text').removeClass('fromRight');
    }
  });

  // ---------------------Move of picture in MISSION Section--------------------------------
});





// --------------------------------- IMPORT FLIGHT SELECTION AND VIEW IN TABLE RESULT -------------------------------

$a = $("#flightSelectionSummary");
$b = $("#tableResults");

$.getJSON(url,
  function (data) {
    var tr;
    for (var i = 0; i < data.length; i++) {
      tr = $('<tr/>');
      tr.append("<td>" + data[i].id + "</td>");
      tr.append("<td>" + data[i].to + "</td>");
      tr.append("<td>" + data[i].date + "</td>");
      tr.append("<td>" + data[i].passenger + "</td>");
      tr.append("<td>" + data[i].status + "</td>");
      $('table').append(tr);
    }
  });


// --------------------------------- IMPORT FLIGHT SELECTION -------------------------------

$(function () {
  var bindDatePicker = function () {
    $(".date").datetimepicker({
      format: 'YYYY-MM-DD',
      icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: "fa fa-arrow-up",
        down: "fa fa-arrow-down"
      }
    }).find('input:first').on("blur", function () {
      // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
      // update the format if it's yyyy-mm-dd
      var date = parseDate($(this).val());

      if (!isValidDate(date)) {
        //create date based on momentjs (we have that)
        date = moment().format('YYYY-MM-DD');
      }

      $(this).val(date);
    });
  }

  var isValidDate = function (value, format) {
    format = format || false;
    // lets parse the date to the best of our knowledge
    if (format) {
      value = parseDate(value);
    }

    var timestamp = Date.parse(value);

    return isNaN(timestamp) == false;
  }

  var parseDate = function (value) {
    var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
    if (m)
      value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);

    return value;
  }

  bindDatePicker();
});



// ** Script sticky box ** //


// ** END Script sticky box ** //