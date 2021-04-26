import firebase from "firebase";
import axios from "axios";
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
  measurementId: "G-5E292J171V",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();
const auth = firebase.auth();
//const history = useHistory();

// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

firebase.auth().onAuthStateChanged(async function (user) {
  // alert("2AUTHCHANGED - 00");
  var name, email, photoUrl, uid, emailVerified, provider,payload;
  var UIDTOKEN = "";
  var vurl = "000000";
  var actiontype = localStorage.getItem("actxp");
  if (user) {
    // alert("2AUTHCHANGED");

    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        UIDTOKEN = idToken;
        localStorage.setItem("token", UIDTOKEN);
        console.log(UIDTOKEN);
        // alert("2.2: =====> "+UIDTOKEN);
        if (actiontype === "0" && UIDTOKEN.length > 0) {
          //login
          vurl = "https://plandy-api.herokuapp.com/login";
          payload = {            
            firebaseuuid:UIDTOKEN            
          }
          // alert("2");
        }
        if (actiontype == "1") {
          //login
          vurl = "https://plandy-api.herokuapp.com/register";
        }
        //
        if (actiontype == "3" || actiontype == "4") {
          
          //Social
          //login
          vurl = "https://plandy-api.herokuapp.com/signinsocial";
          
          var fullname = ""
          var country = localStorage.getItem("ct_");

          var  email, photoUrl, uid, emailVerified, provider;

          if (user != null) {
            
            name = user.displayName;
            //alert(user.displayName);
            email = user.email;
            photoUrl = user.photoURL;
            emailVerified = user.emailVerified;
            if(actiontype==3){
              provider="facebook.com"
            }
            if(actiontype==4){
              provider="google.com"
            }
            //uid = user.uid;  
          
                    
            var allSections = name.split(" ");

            var names_ = "";
            var lastNames_ = "";

            if (allSections.length === 1) {
              names_ = allSections[0];
            }
            if (allSections.length === 2) {
              names_ = allSections[0];
              lastNames_ = allSections[1];
            }
            if (allSections.length === 3) {
              names_ = allSections[0] + " " + allSections[1];
              lastNames_ = allSections[2];
            }

            if (allSections.length === 4) {
              names_ = allSections[0] + " " + allSections[1];
              lastNames_ = allSections[2] + " " + allSections[3];
            }


            payload = {
              names:names_,
              lastname:lastNames_,
              firebaseuuid:UIDTOKEN,
              email:email,
              phonenumber:"",
              verifyphone:0,
              emailverified:1,
              countrycode:country,
              birthday:"01/01/1900",
              picurl:photoUrl,
              provider:provider
            }

            

          }
        }
        
        if(actiontype=="6"){
          vurl = "https://plandy-api.herokuapp.com/register";
          var country = localStorage.getItem("ct_");
          var nx = localStorage.getItem("nx");
          var lnx = localStorage.getItem("lnx");
          var emx = localStorage.getItem("emx");
          var pph = localStorage.getItem("pph");

          payload = {
            names:nx,
            lastname:lnx,
            firebaseuuid:UIDTOKEN,
            email:emx,
            phonenumber:pph,
            verifyphone:0,
            emailverified:0,
            countrycode:country,
            birthday:"01/01/1900",
            picurl:"https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/ic_profile_plandy.png?alt=media&token=d12372cd-5ae7-46b3-a941-c2a6ffacfbe9",
            provider:"email-password"
          }

        }

        if (UIDTOKEN.length > 0 && (actiontype == "0" || actiontype == "1" || actiontype == "3"|| actiontype == "4" || actiontype == "6")) {
          // handle jwttoken
          axios
            .post(
              vurl,
              
                payload
              ,
              {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
              }
            )
            .then(function (response) {
              // localStorage.setItem("ESTADO", JSON.stringify(response.data));
              localStorage.setItem("token_sec", response.data.jwt);
              localStorage.setItem("actxp", null);
              // localStorage.setItem("paths", []);
              // alert(response.data.msg);
              // history.push("/path/to/push");
              //read nics and store in paths
               //gt profile
               //alert(response.data.jwt);
               axios.get(`https://plandy-api.herokuapp.com/profile`, {
                  headers: {
                  Authorization: "Bearer " + response.data.jwt                  
                  },
                })
              .then((res) => {
                //alert(res.data[0]);
               
                 var nx = res.data.data[0].names+" "+res.data.data[0].last_names;
                 localStorage.setItem("unx",nx);
                 window.location.reload();
               })
              

             

            })
            .catch(function (error) {
              localStorage.setItem("1eRROR", error);
              console.log(error);
              if (
                error.message ==
                "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address."
              ) {
                alert(
                  "Estimado usuario, este correo electrónico ha iniciado sesión anteriormente con un método diferente, pruebe iniciar sesión con Google."
                );
                window.location.reload(false);
              }
            });
        }
        // alert(actiontype);
        // if (UIDTOKEN.length > 0 && (actiontype == "0" || actiontype == "1")) {
        //   // handle jwttoken
        //   axios
        //     .post(
        //       vurl,
        //       {
        //         firebaseuuid: UIDTOKEN,
        //       },
        //       {
        //         headers: {
        //           Accept: "application/json",
        //           "Content-Type": "application/json",
        //         },
        //       }
        //     )
        //     .then(function (response) {
        //       // localStorage.setItem("ESTADO", JSON.stringify(response.data));
        //       localStorage.setItem("token_sec", response.data.jwt);
        //       localStorage.setItem("actxp", null);
        //       // localStorage.setItem("paths", []);
        //       // alert(response.data.msg);
        //       // history.push("/path/to/push");
        //       //read nics and store in paths
        //       alert('login');
        //       axios.get(`https://plandy-api.herokuapp.com/profile`)
        //        .then(res => {
        //          var nx = res.data.names+res.data.last_names;
        //          localStorage.setItem("unx",nx);
        //          window.location.reload();
        //        })
        //     })
        //     .catch(function (error) {
        //       localStorage.setItem("1eRROR", error);
        //       console.log(error);
        //       if (
        //         error.message ==
        //         "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address."
        //       ) {
        //         alert(
        //           "Estimado usuario, este correo electrónico ha iniciado sesión anteriormente con un método diferente, pruebe iniciar sesión con Google."
        //         );
        //         window.location.reload(false);
        //       }
        //     });
        // }
      })
      .catch(function (error) {
        // Handle error
      });

    // var actiontype = localStorage.getItem("actxp");
    // alert("USER YES: "+actiontype);

    var isAnonymous = user.isAnonymous;
    localStorage.setItem("_usertype_", user.isAnonymous);
    if (isAnonymous) {
      localStorage.setItem("_x_", "Anonymous");
      name = user.uid;
      email = user.uid;
      photoUrl = "n/d";
      emailVerified = user.emailVerified;
      uid = user.uid;
      provider = "web";

      localStorage.setItem("api_stat", "0");
      // window.location.reload(false);
    } else {
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
});

export { storage, firebase as default };
