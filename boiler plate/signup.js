import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
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











const signupBtn =document.getElementById('signupBtn');
signupBtn.addEventListener('click',signUp)

 async function signUp(e){
try{
    // console.log('signup function')

    const fullName =document.getElementById('fullName').value
    const phoneNumber  =document.getElementById("phoneNumber").value
    const email =document.getElementById('email').value
    const password =document.getElementById('password').value
    const userType=document.getElementById('userType')

    const userAuth =await   createUserWithEmailAndPassword(auth, email, password)
    // console.log('userAuth', userAuth);
    // console.log(userAuth.user.uid)
    const uid = userAuth.user.uid
    console.log(uid);
    const userObj ={
        fullName,
         phoneNumber,  
         email,
         accountActivate:true,
         uid,
         type: userType.value
    }


    if(!password||!phoneNumber||!email||!password){
        console.log('first fill all the value');
    }
    if(userType.selectedIndex === 0 ){
       alert('please select user type')

    }

    
    console.log(userObj, 'userObj')

    const userRef =doc(db, "users", uid)
    const userDb = await setDoc(userRef,userObj)
    console.log('userDb',userDb)
    
    window.location.assign("login.html");



}catch(error){
    console.log('error',error.message)
    alert(error.message)

}

}
