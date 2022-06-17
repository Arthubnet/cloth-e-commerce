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
  apiKey: "AIzaSyBkEN4jnV4jV96IEd2pB1qFpmpU9cq9XM4", //don't fotget to put it to environment variable
  authDomain: "e-commerce-7a7aa.firebaseapp.com",
  projectId: "e-commerce-7a7aa",
  storageBucket: "e-commerce-7a7aa.appspot.com",
  messagingSenderId: "618961239873",
  appId: "1:618961239873:web:564aafa326b8e4b30fabc0",
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
  snapshot.forEach((doc) => {
    console.log(doc.data());
  });
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

/* export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;  if signed out(no current user) just close the function

  const userRef = firestore.doc(`/users/${userAuth.uid}`); // создает шаблон для проверки
  const snapShot = await userRef.get(); // возвращает инфу есть ли такой обьект в DB или нет

  if (!snapShot.exists) {
    // если нет, то создаем
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await userRef.set({ displayName, email, createDate, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);


export const firestore = firebase.firestore();


export default firebase;
 */
