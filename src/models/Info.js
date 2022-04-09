var ref = firebase.database().ref();

class Info {
    constructor(userId, name, l_name, address, apt_num, city, zip_code, phone, email, itemId, interest) {
        this.userId = userId;
        this.name = name;
        this.l_name = l_name;
        this.address = address;
        this.apt_num = apt_num;
        this.city = city;
        this.zip_code = zip_code;
        this.phone = phone;
        this.email = email;
        this.itemId = itemId;
        this.interest = interest;
    }

    convert(e) {
        return (e == undefined) ? "" : e;
    }

    async update() {
        await ref.child("Users").child(this.userId).set({
            name: this.convert(this.name),
            l_name: this.convert(this.l_name),
            address: this.convert(this.address),
            apt_num: this.convert(this.apt_num),
            city: this.convert(this.city),
            zip_code: this.convert(this.zip_code),
            phone: this.convert(this.phone),
            email: this.convert(this.email),
            itemId: this.convert(this.itemId),
            interest: this.convert(this.interest)
        });
    }

    async get() {
        await ref.child("Users").child(this.userId).get().then((snapshot) => {
            const dict = snapshot.val();
            this.name = dict.name;
            this.l_name = dict.l_name;
            this.address = dict.address;
            this.apt_num = dict.apt_num;
            this.city = dict.city;
            this.zip_code = dict.zip_code;
            this.phone = dict.phone;
            this.email = dict.email;
            this.itemId = dict.itemId;
            this.interest = dict.interest;
        });
    }
}
