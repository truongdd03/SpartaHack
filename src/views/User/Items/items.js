var items = new Items("", "", "");

function load() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            items.itemId = firebase.auth().currentUser.uid;
            items.get().then(() => {
                $("#itemName").val(items.itemName);
                $("#description").val(items.description);
            });
        }
    });
}

function saveClick() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            items.itemId = firebase.auth().currentUser.uid;
            items.itemName = $("#itemName").val();
            items.description = $("#description").val();
            items.update().then(() => {
                window.alert("Sucessfully saved!");
            });
        }
    });
}
