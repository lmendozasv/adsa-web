import firebase from "firebase";
import axios from 'axios';
//import { useHistory } from 'react-router-dom';

require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyBXD48l7cYIiS6t2h-E08fAYGdyQRB63No",
    authDomain: "plandy-c38e0.firebaseapp.com",
    projectId: "plandy-c38e0",
    storageBucket: "plandy-c38e0.appspot.com",
    messagingSenderId: "448741280295",
    appId: "1:448741280295:web:eff718146c0dab95855c02",
    measurementId: "G-5E292J171V"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage()
const auth = firebase.auth();
//const history = useHistory();

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION); 

firebase.auth().onAuthStateChanged(async function(user) {        
  alert("2AUTHCHANGED - 00");
  var name, email, photoUrl, uid, emailVerified, provider;
  var UIDTOKEN = "";
  var vurl = "000000";
  if (user) {
    alert("2AUTHCHANGED");

    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
      UIDTOKEN = idToken;
      console.log(UIDTOKEN);
      alert("2.2: =====> "+UIDTOKEN);
      if (actiontype ==="0" &&UIDTOKEN.length>0){
        //login
        vurl = "https://plandy-api.herokuapp.com/login";
        alert("2");
      }
      if (actiontype =="1"){
        //login
        vurl = "https://plandy-api.herokuapp.com/register";
        alert("3");
      }

      if(UIDTOKEN.length>0)
     { 
    // handle jwttoken
    axios.post(vurl, {          
          firebaseuuid: UIDTOKEN          
    },
    {
      headers: {            
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }    
  }
    )
    .then(function (response) {          
      localStorage.setItem("ESTADO", JSON.stringify(response.data));      
      localStorage.setItem("token", response.data.auth_token);      
      localStorage.setItem("paths", []);   
      alert(response.data.msg);
      // history.push("/path/to/push");
      //read nics and store in paths          
    })
    .catch(function (error) {
      localStorage.setItem("1eRROR", error);      
      console.log(error);
        if(error.message=="An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address."){
            alert("Estimado usuario, este correo electrónico ha iniciado sesión anteriormente con un método diferente, pruebe iniciar sesión con Google.");
            window.location.reload(false);
        }
    });
  }



    }).catch(function(error) {
      // Handle error
    });


    var actiontype = localStorage.getItem("actxp");
    alert("USER YES: "+actiontype);
    
    
   


    var isAnonymous = user.isAnonymous;
    localStorage.setItem("_usertype_", user.isAnonymous);   
    if(isAnonymous){
      localStorage.setItem("_x_", "Anonymous");   
      name = user.uid;
      email = user.uid;
      photoUrl = "n/d";
      emailVerified = user.emailVerified;
      uid = user.uid;        
      provider = "web";     
      
      localStorage.setItem("api_stat", "0");
     // window.location.reload(false);
    }
    else{
      localStorage.setItem("_x_", "NOTAnonymous");   
      name = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      emailVerified = user.emailVerified;
      uid = user.uid;  
      user.providerData.forEach(function (profile) {
      provider = profile.providerId;                              
      });  
      localStorage.setItem("api_stat", "1");
      //window.location.reload(false);
    }
    
  // }
  // else{    
  //   firebase.auth().signInAnonymously().catch(function(error) {      
  //     var errorCode = error.code;
  //     var errorMessage = error.message;    
  //     console.log(errorCode);
  //     console.log(errorMessage);      
  //     localStorage.setItem("2eRROR", errorCode);       
  //     localStorage.setItem("3eRROR", errorMessage);       
  //   }); 
    
  // }
  //handle APIJWT Token
  
}
}
);

 
  
 
  
  




export {
    storage, firebase as default
}