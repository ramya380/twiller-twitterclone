// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTdPzoYf2KvGcXixjrH5KY7okwTPdQfi0",
  authDomain: "twiller-212ef.firebaseapp.com",
  projectId: "twiller-212ef",
  storageBucket: "twiller-212ef.appspot.com",
  messagingSenderId: "476417645067",
  appId: "1:476417645067:web:3e50e47ca2017e4dda050e",
  measurementId: "G-ZD74SEHDW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app
//const analytics = getAnalytics(app);