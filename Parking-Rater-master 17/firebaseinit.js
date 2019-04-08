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

	const db = firebase.firestore(); 

	