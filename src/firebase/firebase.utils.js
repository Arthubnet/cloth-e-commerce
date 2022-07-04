import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: `${process.env.REACT_APP_PROJECT}`,
  storageBucket: `${process.env.REACT_APP_STORAGE}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT}`,
};

initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();

/* Firestore  */

// Database service
const db = getFirestore();

// Colleciton ref
let colRef = collection(db, "users");

// Get Collection data
export const getCollection = async (uid) => {
  const snapshot = await getDocs(colRef);
};

export let createUserDoc = async (userAuth) => {
  if (!userAuth) return;
  let user = "";
  const snapshot = await getDocs(colRef);
  snapshot.docs.forEach((doc) => {
    if (doc.id == userAuth.uid) {
      user = doc.data();
    }
  });
  return user;
};

// Create Collection

export let addCollection = async (name, email, uid) => {
  let createDate = new Date();
  try {
    await setDoc(doc(db, "users", uid), {
      displayName: name,
      email: email,
      createdAt: createDate,
      id: uid,
    });
  } catch (error) {
    console.error(error);
  }
};
