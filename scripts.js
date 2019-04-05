/* eslint-disable no-unused-expressions */
//import adminmin for firebase
/*
var admin = require('firebase-admin');
(function() {
    // Initialize Firebase
    // deleted firebase auth as its done somewhere else


    const auth = admin.auth();
	const db = admin.firestore();

    //Get elements
    var loginEmailAddress = document.getElementById(loginEmailAddress);
    var loginPassword = document.getElementById(loginPassword);
    var loginSubmission = document.getElementById(loginSubmission);
    var signupSubmission = document.getElementById(signupSubmission);

    //Login event
    loginSubmission.addEventListener('click', e => {
        const email = loginEmailAddress.value;
        const pass = loginPassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    })

    console.log("init");
    //Signup event
    signupSubmission.addEventListener('click', e =>{
        console.log("init");
        const email = loginEmailAddress.value;
        const pass = loginPassword.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    })

    //realtime listener
    admin.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser){
            console.log(firebaseUser);
        } else {
            console.log("Not logged in.");
        }
    });
});

*/

function logIn() {
  var username = document.getElementById('username-for-login');
  var password = document.getElementById('password-for-login');
  if (username.value == "" || password.value == "")
    alert('Type in values for both username and password');
  else
    location.href = "rating.html";
  }

  function signUp() {
    var username = document.getElementById('username');
    var password = document.getElementById('signupPassword');
    var email = document.getElementById('signupEmail');
    var passwordRepeat = document.getElementById('signupPasswordRepeat');
    if (username.value == "" || password.value == "" || email.value == "" || passwordRepeat.value == null)
      alert('Type in values for all fields');
    else if (password.value != passwordRepeat.value)
      alert('Passwords must match');
    else
      location.href = "rating.html";
    }
