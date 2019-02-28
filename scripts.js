(function() {
    // Initialize Firebase
    
    var config = {
		apiKey: "AIzaSyAuESVoqcb8AdYx4Xra6hBXPX0ZL6UvDIY",
		authDomain: "tigerparking.firebaseapp.com",
		databaseURL: "https://tigerparking.firebaseio.com",
		projectId: "tigerparking",
		storageBucket: "tigerparking.appspot.com",
		messagingSenderId: "360909428304"
	};
	firebase.initializeApp(config);
    
    const auth = firebase.auth();
	const db = firebase.firestore();

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
    firebase.auth().onAuthStateChanged(firebaseUser => { 
        if(firebaseUser){
            console.log(firebaseUser);
        } else {
            console.log("Not logged in.");
        }
    });
});