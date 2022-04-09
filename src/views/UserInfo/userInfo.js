var userInfo = new Info(0, 0, 0, 0, 0, 0, []);

function load() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            userInfo.userId = firebase.auth().currentUser.uid;
            userInfo.get();
        }
    });
}

function saveClick() {
    console.log(userInfo);
    var f_name = $("#firstName").val();
    var l_name = $("#lastName").val();
    var addr = $("#address").val();
    var app_num = $("#apt").val();
    var city = $("#city").val();
    var zip_code = $("#zip").val();
    var mail = $("#mail").val();
    var p_num = $("#phone").val();
}
