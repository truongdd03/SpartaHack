const express = require("express");
const app = express();
var admin = require("firebase-admin");
var serviceAccount = require("./spartahack-e0815-firebase-adminsdk-5bk5j-4e1ab3c746.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

db.collection("a").doc("a").set(data);

app.use(express.static(__dirname + '/src'));

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});
