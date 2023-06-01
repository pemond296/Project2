import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvoUg0ET4FczhGUHo7nK4DeUDQyx0mY70",
  authDomain: "slowly-4601d.firebaseapp.com",
  projectId: "slowly-4601d",
  storageBucket: "slowly-4601d.appspot.com",
  messagingSenderId: "268277468967",
  appId: "1:268277468967:web:2545adfa775c70ab892302",
  measurementId: "G-60ZBBVZ0WB"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()
const db = firebase.firestore()

auth.useEmulator('http://localhost:9099');
if (window.location.hostname === 'localhost') {
  db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
