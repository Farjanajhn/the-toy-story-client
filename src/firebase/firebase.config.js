// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.appId
};
  
/* const firebaseConfig = {
  apiKey:"AIzaSyDIkKB-W_fCwqb_WlmJbg-fcXRqA8mnVFE",
  authDomain:"toy-story-b1089.firebaseapp.com",
  projectId:"toy-story-b1089",
  storageBucket:"toy-story-b1089.appspot.com",
  messagingSenderId:"840236933815",
  appId:"1:840236933815:web:afce0544eef54709b26332"
};
 */

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default (app)