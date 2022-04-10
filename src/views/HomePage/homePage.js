var posts = [];
var cur = 0;
var ref = firebase.database().ref();

function display() {
    cur += 1;
    if (cur >= posts.length) {
        cur = 0;
    }

    $("#itemName").empty();
    $("#itemName").append(posts[cur].itemName);
    $("#itemImage").attr("src", posts[cur].itemImage);
    $("#descriptionId").text(posts[cur].description);

    ref.child("Users").child(posts[cur].itemId).get().then((snapshot) => {
        const dict = snapshot.val();
        $("#userName").text(dict["name"] + " " + dict["l_name"]);
    });
}

function load() {
    ref.child("Items").get().then((snapshot) => {
        const dict = snapshot.val();
        for (let key in dict) {
            posts.push(new Items(key, dict[key]["itemImage"], dict[key]["itemName"], dict[key]["description"]));
        }
        display();
    });
}

function yesClick() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            const uid = firebase.auth().currentUser.uid;
            ref.child("Pairs").child(posts[cur].itemId).child(uid).get().then((snapshot) => {
                if (snapshot.exists()) {
                    window.alert("Matched!");
                }
            });
        
            ref.child("Pairs").child(uid).child(posts[cur].itemId).set(1);
            display();
        }
    });
}

function noClick() {
    display();
}