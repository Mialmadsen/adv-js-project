// import { onMounted, ref } from 'vue'
import { initializeApp } from "firebase/app";
import { getFirestore, /* collection, onSnapshot , doc, addDoc, deleteDoc*/ } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSO-k4cWuF2b6cjU-zDEeg2TZAxwCHEqM",
  authDomain: "class-project-ebfe8.firebaseapp.com",
  projectId: "class-project-ebfe8",
  storageBucket: "class-project-ebfe8.firebasestorage.app",
  messagingSenderId: "819446707675",
  appId: "1:819446707675:web:994faebb004c73a321a3fe"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
export const firebaseApp = app; // Export the Firebase app instance if needed elsewhere