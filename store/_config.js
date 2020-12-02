import firebase from 'firebase'

const FirebaseConfig = {
    apiKey: "AIzaSyDvrqbMcTfBtAw40JiJjdR-er8Epnzl_ew",
    authDomain: "my1stproject-c85e8.firebaseapp.com",
    databaseURL: "https://my1stproject-c85e8.firebaseio.com",
    projectId: "my1stproject-c85e8",
    storageBucket: "my1stproject-c85e8.appspot.com",
    messagingSenderId: "117611428954",
    appId: "1:117611428954:web:d80ab6df2b6f9c24a9ac63",
    measurementId: "G-S5ZEE4VCDK"
};

while (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);
}
export default firebase;