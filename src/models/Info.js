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

export class Info {
    constructor(userId, name, address, phone, email, itemId, interest) {
        this.userId = userId;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.itemId = itemId;
        this.interest = interest;
    }

    async update() {
        await ref.child("Users").child(this.userId).set({
            name: this.name,
            address: this.address,
            phone: this.phone,
            email: this.email,
            itemId: this.itemId,
            interest: this.interest
        });
    }

    async get() {
        await ref.child("Users").child(this.userId).get().then((snapshot) => {
            const dict = snapshot.val();
            this.name = dict.name;
            this.address = dict.address;
            this.phone = dict.phone;
            this.email = dict.email;
            this.itemId = dict.itemId;
        });
    }
}
