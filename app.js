const express = require("express");
const app = express();

app.use(express.static(__dirname + '/src'));

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});