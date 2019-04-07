/* eslint-disable no-unused-expressions */
//import adminmin for firebase
var admin = require('firebase-admin');
(function() {
    // Initialize Firebase
    // 
 
    
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