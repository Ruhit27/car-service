// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSIWbSUzQ1hJofYxIwr0a2dU8mc9Sm938",
  authDomain: "car-doctor-4ae5e.firebaseapp.com",
  projectId: "car-doctor-4ae5e",
  storageBucket: "car-doctor-4ae5e.appspot.com",
  messagingSenderId: "500204949493",
  appId: "1:500204949493:web:a219ab346059937b611abc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;