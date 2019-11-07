import firebase from 'firebase';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCLkwvrIUdMVmWCLGjUBZZTOhiXS1BiKjE",
    authDomain: "forumwebstyle.firebaseapp.com",
    databaseURL: "https://forumwebstyle.firebaseio.com",
    projectId: "forumwebstyle",
    storageBucket: "forumwebstyle.appspot.com",
    messagingSenderId: "278888417159",
    appId: "1:278888417159:web:04a5c0f4b5293dffc7b522",
    measurementId: "G-NG4XEBXTCW"
  };
firebase.initializeApp(firebaseConfig);
export  default firebase;