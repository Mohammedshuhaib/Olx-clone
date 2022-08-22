import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB0_AKElFKMkTCgQyldGIK-0X2sxjKFHiA",
    authDomain: "olx-clone-1dba2.firebaseapp.com",
    projectId: "olx-clone-1dba2",
    storageBucket: "olx-clone-1dba2.appspot.com",
    messagingSenderId: "52871992341",
    appId: "1:52871992341:web:9153d33a50584cc906aa1c",
    measurementId: "G-ZVTWV9QT31"
  };

  export default firebase.initializeApp(firebaseConfig)