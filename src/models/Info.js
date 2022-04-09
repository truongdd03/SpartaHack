var ref = firebase.database().ref();

class Info {
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
