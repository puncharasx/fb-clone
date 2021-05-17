import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDPi5Z8lLXtrh8LO0HogYglSbvnfvfOvfE",
    authDomain: "facebook-clone-55702.firebaseapp.com",
    projectId: "facebook-clone-55702",
    storageBucket: "facebook-clone-55702.appspot.com",
    messagingSenderId: "701541897627",
    appId: "1:701541897627:web:167be9ace6847dd7e2fd3e",
    measurementId: "G-SKCC3SL3EX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db