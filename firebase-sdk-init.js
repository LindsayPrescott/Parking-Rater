var admin = require('firebase-admin');

var serviceAccount = require('D/Projects/Parking-Rater/tigerparking-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tigerparking.firebaseio.com'
});
