import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCTevyyj3eJW3inlb5wWwcqme0R3yt_hvg",
    authDomain: "firecrud-9b62c.firebaseapp.com",
    databaseURL: "https://firecrud-9b62c-default-rtdb.firebaseio.com",
    projectId: "firecrud-9b62c",
    storageBucket: "firecrud-9b62c.appspot.com",
    messagingSenderId: "81693896028",
    appId: "1:81693896028:web:25f10ffff79095aa9a6599"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;