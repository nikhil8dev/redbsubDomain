var firebaseConfig = {
    apiKey: "AIzaSyC2VbRgVvIMCyk-KOC45zSj1znN-ODSwII",
    authDomain: "signup-5f47e.firebaseapp.com",
    databaseURL: "https://signup-5f47e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "signup-5f47e",
    storageBucket: "signup-5f47e.appspot.com",
    messagingSenderId: "163961442480",
    appId: "1:163961442480:web:33a65fb7726595cb96eb75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var success = document.getElementById('error')
  var email = document.getElementById('email')
  var pass = document.getElementById('pass')
  var logBtn = document.getElementById('btn')
  var logout = document.getElementById('logout')

logBtn.addEventListener('click',e =>{
   const  mail = email.value;
   const  password = pass.value;
   const auth = firebase.auth();

   const promise = auth.signInWithEmailAndPassword(mail, password)
   promise
   .catch(e => console.log(e.message))
  

  
})

logout.addEventListener('click', e =>{
    firebase.auth().signOut();
})

firebase.auth().onAuthStateChanged(data =>{
    if(data){
      console.log(data)
      success.innerText = 'Log in successful'
      
    }else{
      console.log('not log')
      success.innerText = 'Not Logged'
    }
  })