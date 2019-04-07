SDK imports and implicit initialization
Web apps hosted with Firebase Hosting can benefit from simpler project configuration. Paste the following code snippets into your application HTML to import the Firebase SDK and configure it automatically for the project your app is hosted on:

    <!-- Firebase App is always required and must be first -->
    <script src="/__/firebase/5.9.3/firebase-app.js"></script>

    <!-- Add additional services that you want to use -->
    <script src="/__/firebase/5.9.3/firebase-auth.js"></script>
    <script src="/__/firebase/5.9.3/firebase-database.js"></script>
    <script src="/__/firebase/5.9.3/firebase-messaging.js"></script>
    <script src="/__/firebase/5.9.3/firebase-functions.js"></script>

    <!-- Comment out (or don't include) services that you don't want to use -->
    <!-- <script src="/__/firebase/5.9.3/firebase-storage.js"></script> -->

    <script src="/__/firebase/init.js"></script>