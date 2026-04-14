import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    doc, 
    onSnapshot, 
    getDoc, 
    getDocs, 
    setDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    query, 
    orderBy, 
    where, 
    increment 
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { 
    getAuth, 
    signInWithPopup, 
    signOut, 
    onAuthStateChanged, 
    GoogleAuthProvider 
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCyvsUME6_x3OW0x8z6RHaxfN5k9uUaYAk",
    authDomain: "royal-perfumes-5e318.firebaseapp.com",
    projectId: "royal-perfumes-5e318",
    storageBucket: "royal-perfumes-5e318.firebasestorage.app",
    messagingSenderId: "642409364088",
    appId: "1:642409364088:web:5c712c7807f660af5e0b8d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Global Fallbacks for older scripts/cache
window.db = db;
window.auth = auth;
window.collection = collection;
window.doc = doc;
window.onSnapshot = onSnapshot;
window.getDoc = getDoc;
window.getDocs = getDocs;
window.setDoc = setDoc;
window.addDoc = addDoc;
window.updateDoc = updateDoc;
window.deleteDoc = deleteDoc;
window.query = query;
window.orderBy = orderBy;
window.where = where;
window.increment = increment;
window.signInWithPopup = signInWithPopup;
window.signOut = signOut;
window.onAuthStateChanged = onAuthStateChanged;

export { 
    db, auth, provider,
    collection, doc, onSnapshot, getDoc, getDocs, setDoc, addDoc, updateDoc, deleteDoc, query, orderBy, where, increment,
    signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider
};
