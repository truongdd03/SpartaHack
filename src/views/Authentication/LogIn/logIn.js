function logIn() {
    var email = $("#email").val();
    var password = $("#password").val();

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {

        $(".loader-wrapper").fadeOut("slow");
        window.alert("Welcome back!");
        window.location.href = "../../HomePage/homePage.html";

    }).catch(function (error) {

        var errorMessage = error.message;
        window.alert(errorMessage);

        if (!errorMessage.includes("restore")) {

            if (errorMessage.includes("email")) {
                var input = document.getElementById("email");
                showValidate(input);
            } else {
                var input = document.getElementById("password");
                showValidate(input);
            }
        }
    });

};

$('.validate-form .input100').each(function () {
    $(this).focus(function () {
        hideValidate(this);
    });
});

function validate(input) {
    if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
        }
    }
}

function showValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).addClass('alert-validate');
}

function hideValidate(input) {
    var thisAlert = $(input).parent();
    $(thisAlert).removeClass('alert-validate');
}