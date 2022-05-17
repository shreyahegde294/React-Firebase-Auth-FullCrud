import firebase from 'firebase/compat/app';

var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;
