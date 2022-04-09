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
}
