var ref = firebase.database().ref();

class Items {
    constructor(itemId, itemImage, itemName, description) {
        this.itemId = itemId;
        this.itemImage = itemImage;
        this.itemName = itemName;
        this.description = description;
    }

    convert(e) {
        return (e == undefined) ? "" : e;
    }

    async update() {
        await ref.child("Items").child(this.itemId).set({
            itemImage: this.convert(this.itemImage),
            itemName: this.convert(this.itemName),
            description: this.convert(this.description)
        });
    }

    async get() {
        await ref.child("Items").child(this.itemId).get().then((snapshot) => {
            const dict = snapshot.val();
            this.itemImage = dict.itemImage;
            this.itemName = dict.itemName;
            this.description = dict.description;
        });
    }
}
