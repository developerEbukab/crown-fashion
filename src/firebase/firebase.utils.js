import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAMTWKKtF55iAfaLXKavusaKXNCFo_zFKo",
  authDomain: "crown-fashion-b3eb2.firebaseapp.com",
  databaseURL: "https://crown-fashion-b3eb2.firebaseio.com",
  projectId: "crown-fashion-b3eb2",
  storageBucket: "crown-fashion-b3eb2.appspot.com",
  messagingSenderId: "427283108922",
  appId: "1:427283108922:web:b802ec764f37b6eb7d9103",
  measurementId: "G-Z2S9X1Y5X4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  if (!snapShot.exists) { 
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }) 
    }catch (error) {
      console.log("error creating user")
    }
  }
  return userRef;
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data()

    return{
      routeName : encodeURI(title.toLowerCase()),
      id : doc.id,
      title:title, items: items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
  console.log(transformedCollection)
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
    console.log(newDocRef)
  })

  return await batch.commit();
}

export default firebase;