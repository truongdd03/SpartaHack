const firebaseConfig = {
    apiKey: "AIzaSyAKx4t0ds5UsCwLeY3QZJHYYGUItVqy8uM",
    authDomain: "spartahack-e0815.firebaseapp.com",
    databaseURL: "https://spartahack-e0815-default-rtdb.firebaseio.com",
    projectId: "spartahack-e0815",
    storageBucket: "spartahack-e0815.appspot.com",
    messagingSenderId: "227707235393",
    appId: "1:227707235393:web:39a2e0a5d3e7194167eac0",
    measurementId: "G-QYYWSQRTBF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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