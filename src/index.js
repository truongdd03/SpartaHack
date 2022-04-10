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

function load() {
    window.location.replace("http://localhost:3000/views/Authentication/LogIn/logIn.html");
}