import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";
import { storage } from "./firebaseConfig.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTD9cYmbCVLT6yTTlFapKDqWe73EXwt-k",
  authDomain: "hacathon-62c8e.firebaseapp.com",
  projectId: "hacathon-62c8e",
  storageBucket: "hacathon-62c8e.appspot.com",
  messagingSenderId: "418646296098",
  appId: "1:418646296098:web:0aeb806c237d03437aac7b"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize AUTH
const auth = getAuth();

// login

// const userLogin = await signInWithEmailAndPassword(auth, email, password)
//         console.log(userLogin)


// const userRef = doc(db, "users", userLogin.user.uid);
//         const docSnap = await getDoc(userRef);



// signup

// const userAuth =await   createUserWithEmailAndPassword(auth, email, password)
// const uid = userAuth.user.uid

// const userRef =doc(db, "users", uid)
//     const userDb = await setDoc(userRef,userObj)
//     console.log('userDb',userDb)


// admin
// const getData = await getDocs(collection(db,'users'))
//             getData.forEach(function(doc){
//                 const user =doc.data()})


// customer
// const product = onSnapshot(collection(db, "product"), function (snapshot) {
//     snapshot.forEach(function (data) {
//         console.log("data", data.data())
//     })
// })


// vender

// const getProduct = await getDocs(productCollection)
//     getProduct.forEach(function (doc) {
//         console.log(doc.data(), "|doc")})


// const imageUrl = await uploadImage(productImage.files[0])

// await addDoc(productCollection, productObj)
// alert("product added successfully")

// phir image code












