// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.2.5/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAMK_o6T_cp_RGxbU4240Biwefk5w8CiEk",
  authDomain: "test-304b3.firebaseapp.com",
  projectId: "test-304b3",
  storageBucket: "test-304b3.appspot.com",
  messagingSenderId: "1051934637571",
  appId: "1:1051934637571:web:3932bc34a9979fbacf5836",
  measurementId: "G-23RWZHP1Y8",
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// </script>

// export default firebase;
export default !firebase.default.apps.length
  ? firebase.default.initializeApp(firebaseConfig)
  : firebase.default.app();
