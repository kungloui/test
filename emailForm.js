$(document).ready(function () {
    $('#emailForm').on('submit', function(e) {
        e.preventDefault();
        var emailField = document.getElementById('emailField').value;
        var result = validateEmail(emailField);
        if (!result) {
          console.log(document.getElementById('unvalidEpost'))
          document.getElementById('unvalidEpost').classList.add('show-unvalid');
        } else {
          window.location.replace("http://stackoverflow.com");
        }
        console.log(result)
    });
});

function validateEmail(input) {
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

    if(!input.match(reEmail)) {
      return false;
    }

    return true;

}
