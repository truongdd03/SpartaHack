var items = new Items(0, 0, 0);

function load() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var info = new Info(0, 0, 0, 0, 0, 0)
            info.userId = firebase.auth().currentUser.uid;
            info.get().then(() => {
                items.itemId = info.itemId;
                items.get();
            });
        }
    });
}

function saveClick() {
    console.log(items);
}
