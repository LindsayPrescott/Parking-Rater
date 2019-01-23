(function() {
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyDrgFVBcdqQes9iGGcWOYSQ7611RHStwDY",
        authDomain: "static-bond-158515.firebaseapp.com",
        databaseURL: "https://static-bond-158515.firebaseio.com",
        projectId: "static-bond-158515",
        storageBucket: "static-bond-158515.appspot.com",
        messagingSenderId: "120377728097"
    };
    firebase.initializeApp(config);

    //Get elements
    const loginEmailAddress = document.getElementById(loginEmailAddress);
    const loginPassword = document.getElementById(loginPassword);
    const loginSubmission = document.getElementById(loginSubmission);

    //Login event
    loginSubmission.addEventListener('click', e => {
        const email = loginEmailAddress.value;
        const pass = loginPassword.value;
        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    })
}());