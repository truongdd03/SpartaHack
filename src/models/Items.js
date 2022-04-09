var ref = firebase.database().ref();

class Items {
    constructor(itemId, itemImage, itemName) {
        this.itemId = itemId;
        this.itemImage = itemImage;
        this.itemName = itemName;
    }

    async update() {
        await ref.child("Items").child(this.itemId).set({
            itemImage: this.itemImage,
            itemName: this.itemName,
        });
    }

    async get() {
        await ref.child("Items").child(this.itemId).get().then((snapshot) => {
            const dict = snapshot.val();
            this.itemImage = dict.itemImage;
            this.itemName = dict.itemName;
        });
    }
}
