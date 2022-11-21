// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsCUtCdyVZNnz8aM-b7r_onF2yP1USrnU",
  authDomain: "healthyshop-misiontic-ciclo4.firebaseapp.com",
  projectId: "healthyshop-misiontic-ciclo4",
  storageBucket: "healthyshop-misiontic-ciclo4.appspot.com",
  messagingSenderId: "568278722478",
  appId: "1:568278722478:web:c03a5180a4153772710a3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {auth};
export {app};
