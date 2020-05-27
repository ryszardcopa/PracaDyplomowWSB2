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
