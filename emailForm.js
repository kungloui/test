var gender;

var setGender = function(value) {
  gender = value;
  console.log("gender:", gender);
}

$(document).ready(function () {
  $("#submit-form").click(function(e) {
    e.preventDefault();

    error = 0;
    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var city = $("#city").val();
    var mail = $("#emailField").val();
    var mailConfirm = $("#email2").val();
    var password = $("#password").val();
    var passwordConfirm = $("#passwordConfirm").val();
    console.log('Det här är gender: ', gender)


    var unvalidElement = document.getElementById('unvalidInput');

    if (firstName == "" || lastName == "") {
      console.log('Name is not filled!')
      unvalidElement.innerHTML = "Vänligen fyll i både förnamn och efternamn";
      unvalidElement.classList.add('show-unvalid');
      error = 1;
    }
    if (city == "") {
      console.log('All fields are not filled!')
      unvalidElement.innerHTML = "Vänligen fyll i stad";
      unvalidElement.classList.add('show-unvalid');
      error = 2;
    }
    if (gender == "") {
      console.log(gender);
      console.log('Gender is empty!')
      unvalidElement.innerHTML = "Vänligen välj man eller kvinna";
      unvalidElement.classList.add('show-unvalid');
      error = 3;
    }

    var validate = validateEmail(mail);
    if (validate == "false") {
      console.log('Email is not valid!')
      unvalidElement.innerHTML = "Vänligen fyll i en giltig epostadress";
      unvalidElement.classList.add('show-unvalid');
      error = 4;
    }
    if (mailConfirm != mail) {
      console.log('mailConfirm is not valid!')
      unvalidElement.innerHTML = "Vänligen fyll i samma epostadress i båda fälten";
      unvalidElement.classList.add('show-unvalid');
      error = 5;
    }
    if (password && password.length < 8) {
      console.log('password is not valid!')
      unvalidElement.innerHTML = "Lösenordet är för kort";
      unvalidElement.classList.add('show-unvalid');
      error = 6;
    }
    if (password == "") {
      console.log('mailConfirm is not valid!')
      unvalidElement.innerHTML = "Vänligen fyll i ett lösenord";
      unvalidElement.classList.add('show-unvalid');
      error = 7;
    }
    if (password != passwordConfirm) {
      console.log('mailConfirm is not valid!')
      unvalidElement.innerHTML = "Vänligen fyll i samma lösenord i båda fälten";
      unvalidElement.classList.add('show-unvalid');
      error = 8;
    }
    if ( error == 0){
    $("#Formsubmit").submit();

  } else {
    console.log(error);
  }

  });

function validateEmail(input) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if(!input.match(reEmail)) {
      return "false";
    }

    return "true";

}
});
