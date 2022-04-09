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

firebase.initializeApp(firebaseConfig);
var ref = firebase.database().ref();

export class Items {
    constructor(itemId, itemImage, itemName) {
        this.itemId = itemId;
        this.itemImage = itemImage;
        this.itemName = itemName;
    }

    async update() {
        await ref.child(this.itemId).set({
            itemImage: this.itemImage,
            itemName: this.itemName,
        });
    }

    async get() {
        await ref.child(this.itemId).get().then((snapshot) => {
            const dict = snapshot.val();
            this.itemImage = dict.itemImage;
            this.itemName = dict.itemName;
        });
    }
}
