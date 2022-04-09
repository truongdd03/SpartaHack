var userInfo = new Info("", "", "", "", "", "", "", "", "", "", "");

function load() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            userInfo.userId = firebase.auth().currentUser.uid;
            userInfo.get().then(() => {
                $("#firstName").val(userInfo.name);
                $("#lastName").val(userInfo.l_name);
                $("#address").val(userInfo.address);
                $("#apt").val(userInfo.apt_num);
                $("#city").val(userInfo.city);
                $("#zip").val(userInfo.zip_code);
                $("#mail").val(userInfo.email);
                $("#phone").val(userInfo.phone);
            });
        }
    });
}

function saveClick() {
    userInfo.name = $("#firstName").val();
    userInfo.l_name = $("#lastName").val();
    userInfo.address = $("#address").val();
    userInfo.apt_num = $("#apt").val();
    userInfo.cit = $("#city").val();
    userInfo.zip_code = $("#zip").val();
    userInfo.email = $("#mail").val();
    userInfo.phone = $("#phone").val();
    userInfo.update();
}
