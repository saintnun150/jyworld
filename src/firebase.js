import firebase from 'firebase'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDHnpm3msvVD8tahH8nt3zuiz4ML6NiaAM",
    authDomain: "jyworld-e943f.firebaseapp.com",
    databaseURL: "https://jyworld-e943f.firebaseio.com",
    projectId: "jyworld-e943f",
    storageBucket: "jyworld-e943f.appspot.com",
    messagingSenderId: "688468368660",
    appId: "1:688468368660:web:b798b258d26b756a6ef601",
    measurementId: "G-9WYFPMVF6C"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
