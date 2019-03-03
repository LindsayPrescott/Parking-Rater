// firebase stuff dont mess with it
import app from 'firebase/app';
// Initialize Firebase
const config = {
  apiKey: "AIzaSyAuESVoqcb8AdYx4Xra6hBXPX0ZL6UvDIY",
  authDomain: "tigerparking.firebaseapp.com",
  databaseURL: "https://tigerparking.firebaseio.com",
  projectId: "tigerparking",
  storageBucket: "tigerparking.appspot.com",
  messagingSenderId: "360909428304"
};

class Firebase{
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;