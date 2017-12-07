$(document).ready(function () {
    $('#Formsubmit').on('submit', function(e) {
        e.preventDefault();
        var unvalidElement = document.getElementById('unvalidInput');
        // var successElement = document.getElementById('successElement');
        var form = document.forms["memberForm"]

        var firstName = form.firstName.value;
        var lastName = form.lastName.value;
        var city = form.city.value;
        var mail = form.email1.value;
        var mailConfirm = form.email2.value;

        var isValidEmail = validateEmail(mail);
        var allFieldsAreFilled = (firstName && lastName && city)
        var emailIsConfirmed = (mail === mailConfirm)

        console.log('isValidEmail', isValidEmail)
        console.log('allFieldsAreFilled', allFieldsAreFilled)
        console.log('emailIsConfirmed', emailIsConfirmed)

        if (!allFieldsAreFilled) {
            console.log('All fields are not filled!')
            unvalidElement.innerHTML = "Vänligen fyll i alla fälten";
            unvalidElement.classList.add('show-unvalid');

        } else if (!isValidEmail) {
            console.log('Email is not valid!')
            unvalidElement.innerHTML = "Vänligen fyll i en giltig epostadress";
            unvalidElement.classList.add('show-unvalid');

        } else if (!emailIsConfirmed) {
            console.log('Email is not confirmed!')
            unvalidElement.innerHTML = "Vänligen skriv in samma epostadress i båda fälten";
            unvalidElement.classList.add('show-unvalid');

        } else {
            console.log('Success!!!! :)')
            // $("#Formsubmit").submit();

            // var url = "testurl.com/test"
            // var data = {
            //   firstName: firstName,
            //   lastName: lastName,
            //   city: city,
            //   mail: mail,
            // }

            // $.ajax({
            //   method: "POST",
            //   url: url,
            //   data: data
            // }).done(function(msg) {
            //   successElement.innerHTML = "Ditt konto är skapat!";
            //   successElement.classList.add('show-success');
            // });    
        }
    });
});

function validateEmail(input) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if(!input.match(reEmail)) {
      return false;
    }

    return true;

}
