var admin = require('firebase-admin');

var serviceAccount = require('D/Projects/Parking-Rater/tigerparking-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://tigerparking.firebaseio.com'
});

//we might not need this code. unles sits someone elses. if its mine i think its safely scrapped. 
//but just leave it here until we know for sure. 