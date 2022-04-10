var items = new Items("", "", "");
var storage = firebase.storage().ref();

function load() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            items.itemId = firebase.auth().currentUser.uid;
            items.get().then(() => {
                $("#itemName").val(items.itemName);
                $("#description").val(items.description);
                $("#itemImage").attr("src", items.itemImage);
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
            const file = document.getElementById('uploadImage').files[0];

            storage.child("Images").child(items.itemId + ".jpg").put(file).then((snapshot) => {
                var path = items.itemId + ".jpg";
                storage.child('/Images/' + path).getDownloadURL().then(function(url) {
                    items.itemImage = url;
                    items.update().then(() => {
                        window.alert("Sucessfully saved!");
                    });
                })
            })
            

        }
    });
}
