import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMsUlOnzPRrvcN8mZUWhAxAiHAclvKcTU",
  authDomain: "thekeymind2023-f4c36.firebaseapp.com",
  projectId: "thekeymind2023-f4c36",
  storageBucket: "thekeymind2023-f4c36.appspot.com",
  messagingSenderId: "463992006622",
  appId: "1:463992006622:web:352d24bba167cfb38d5f4f",
  // measurementId: "G-YMK9CY3GH5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };


































// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCMsUlOnzPRrvcN8mZUWhAxAiHAclvKcTU",
//   authDomain: "thekeymind2023-f4c36.firebaseapp.com",
//   projectId: "thekeymind2023-f4c36",
//   storageBucket: "thekeymind2023-f4c36.appspot.com",
//   messagingSenderId: "463992006622",
//   appId: "1:463992006622:web:352d24bba167cfb38d5f4f",
//   measurementId: "G-YMK9CY3GH5"
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);