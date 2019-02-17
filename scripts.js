(function() {
    // Initialize Firebase
    var firebase = require("firebase/app");
    
    var config = {
		apiKey: "AIzaSyAuESVoqcb8AdYx4Xra6hBXPX0ZL6UvDIY",
		authDomain: "tigerparking.firebaseapp.com",
		databaseURL: "https://tigerparking.firebaseio.com",
		projectId: "tigerparking",
		storageBucket: "tigerparking.appspot.com",
		messagingSenderId: "360909428304"
	};
	firebase.initializeApp(config);
    
    const app = firebase.app();
    const auth = firebase.auth();
	const db = firebase.firestore();

    //Get elements
    const loginEmailAddress = document.getElementById(loginEmailAddress);
    const loginPassword = document.getElementById(loginPassword);
    const loginSubmission = document.getElementById(loginSubmission);
    const signupSubmission = document.getElementById(signupSubmission);

    //Login event
    loginSubmission.addEventListener('click', e => {
        const email = loginEmailAddress.value;
        const pass = loginPassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    })

    //Signup event
    signupSubmission.addEventListener('click', e =>{
        const email = loginEmailAddress.value;
        const pass = loginPassword.value;
        const auth = firebase.auth();
        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    })
    
    //realtime listener
    firebase.auth().onAuthStateChanged(firebaseUser => { 
        if(firebaseUser){
            console.log(firebaseUser);
        } else {
            console.log("Not logged in.");
        }
    });
});