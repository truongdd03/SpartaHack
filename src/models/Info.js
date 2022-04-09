import { doc, setDoc } from "firebase/firestore"; 

class Info {
    constructor(userId, name, address, phone, email, itemId) {
        this.userId = userId;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.itemId = itemId;
    }

    static async write() {
        await setDoc(doc(this.userId), {
            name: this.name,
            address: this.address,
            phone: this.phone,
            email: this.email,
            itemId: this.itemId
        });
    }
}

module.exports = Info;