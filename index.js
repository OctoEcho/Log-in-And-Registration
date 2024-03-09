
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD7T3yuB5CKtujYdL4TWJBPBgTwHnror6o",
    authDomain: "smartcart-663c4.firebaseapp.com",
    projectId: "smartcart-663c4",
    storageBucket: "smartcart-663c4.appspot.com",
    messagingSenderId: "76974861320",
    appId: "1:76974861320:web:05797bb2bc370c63d635bd",
    measurementId: "G-LJ5H3S11ME"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const LogIn = () => {
    const email=document.getElementById("email")
}
console.log(email)
app.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });