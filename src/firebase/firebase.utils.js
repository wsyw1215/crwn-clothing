import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCtew76r62IdMTZdFgtuEL1b61sMAMkuCc",
  authDomain: "crwn-db-1a340.firebaseapp.com",
  databaseURL: "https://crwn-db-1a340.firebaseio.com",
  projectId: "crwn-db-1a340",
  storageBucket: "",
  messagingSenderId: "735589941606",
  appId: "1:735589941606:web:6eeca36c2624f1dd8a48a7"
};

export const createUserProfileDocuments = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
