import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Redirect, Route, Switch } from "react-router";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import firebase from "./firebases";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import InputMask from "react-input-mask";
import Helmet from 'react-helmet';
// import  { Redirect } from 'react-router-dom'
//import { useHistory } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib 
import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://KIP.net/">
        KIP
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const themeAvatar = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiAvatar: {
      // Name of the rule
      root: {
        // Some CSS
        display:"compact",
        margin:0
      },
    },
  },
});


const blueLink = {
  color: "#172449",
};
//const history = useHistory();
const style = (theme) => ({
  root: {
    height: "100vh",
  },
  image_register:{
    //
    backgroundImage:
      "url(https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/ic_register_alt_2.png?alt=media&token=36856896-803f-4eb8-a236-2fd4888a542c)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  image: {
    backgroundImage:
      "url(/adsadigital.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FFF",
    display:"compact" 
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

//component
class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    if (props.user) {
      alert("You can't login if you are logged in!");
      props.history.push("/ticket-list");
    }
    // this.handleQueryCreated = this.handleQueryCreated.bind(this);
  }
  state = {
    redirect: false,
    usuario: "",
    password: "",
    otp:"",
    isLoadingData: false,
    userStatus: "",
    pwxStatus: "",
    loggedIn: true,
    formMode: 0,
    nameStatus:"",
    lnameStatus:"",
    emailStatus:"",
    phoneStatus:"",
    nombres:"",
    apellidos:"",
    correo:"",
    telefono:"",
    terminos:false,
    pwxStatusnew: "",
    pwnew:""
  };
  componentDidMount() {
    this.setState({ redirect: true });
    axios.get("https://ipinfo.io/?token=2aa938a0872d90").then(function (response) {
      // localStorage.setItem("ESTADO", JSON.stringify(response.data));
      // console.log(response.data);
      localStorage.setItem("ct_", response.data.country);
      localStorage.setItem("ct_0_d", JSON.stringify(response.data));
    });
    //   var firebaseConfig ={  apiKey: "AIzaSyBXD48l7cYIiS6t2h-E08fAYGdyQRB63No",
    //   authDomain: "KIP-c38e0.firebaseapp.com",
    //   projectId: "KIP-c38e0",
    //   storageBucket: "KIP-c38e0.appspot.com",
    //   messagingSenderId: "448741280295",
    //   appId: "1:448741280295:web:eff718146c0dab95855c02",
    //   measurementId: "G-5E292J171V"
    // }
    //   firebase.initializeApp(firebaseConfig);
  }

  handleChange = (name) => (event) => {

    this.setState({
      [name]: event.target.value,
    });
    console.log(event.target.value);
    console.log(name);
    if (name === "user_nic_selected") {
      this.setState({ user_nic_selected: event.target.value });
      this.loadLastInvoiceDetails(event.target.value);
    }
    if (name === "user") {
      this.setState({ usuario: event.target.value });
    }
    if (name === "pw") {
      this.setState({ password: event.target.value });
    }
  };
  handleFacebook = (name) => (event) => {
    var ix = this;
    ix.setState({ isLoadingData: true });
    var provider = firebase.auth.AuthProvider;
    provider = new firebase.auth.FacebookAuthProvider();
    // provider.addScope('email');
    provider.setCustomParameters({
      display: "popup",
    });
    console.log(provider, "fbprovider");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        localStorage.setItem("actxp", "3");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  handleGmail = (name) => (event) => {
    var provider = firebase.auth.AuthProvider;
    provider = new firebase.auth.GoogleAuthProvider();
    console.log(provider, "gprovider");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var user = result.user;
        // console.log(credential);
        // console.log(token);
        //console.log(user);
        localStorage.setItem("actxp", "4");
      })
      .catch((error) => {
        alert(error);
        // alert("Error");
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  handleSignup = (name) => (event) => {
    var ix = this;
    ix.setState({ isLoadingData: true });
    var pnam,plname,pemail,pphone;
    var isValidRegister = true;
    var cntx = 0;
    
    var pnam = ix.state.nombres;
    var plname = ix.state.apellidos;
    var pemail = ix.state.correo;
    var pphone = ix.state.telefono;

    var termix = ix.state.terminos;
    var pxx = ix.state.pwnew;
    var re = new RegExp("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/");
    //alert(termix);
    if(pxx.length>8){
      ix.setState({ pwxStatusnew: "" });
      isValidRegister = true;
     
    }
    else{
      cntx++;
      ix.setState({ pwxStatusnew: "Intenta cumplir con los requisitos para la contraseña de tu nueva cuenta" });
      isValidRegister = false;     
    }
    
    if (pnam.length > 0 ) {
      ix.setState({ nameStatus: "" });
      isValidRegister = true;
    } else {
      cntx++;
      ix.setState({ nameStatus: "Campo requerido" });
      isValidRegister = false;
    }
    
    if (plname.length > 0  ) {
      ix.setState({ lnameStatus: "" });
      isValidRegister = true;
    } else {
      cntx++;
      ix.setState({ lnameStatus: "Campo requerido" });
      isValidRegister = false;
    }

    if (pemail.length > 0 ) {
      ix.setState({ emailStatus: "" });
      isValidRegister = true;
    } else {
      cntx++;
      ix.setState({ emailStatus: "Campo requerido" });
      isValidRegister = false;
    }


    if (pphone.length > 0 ) {
      ix.setState({ phoneStatus: "" });
      isValidRegister = true;
    } else {
      cntx++;
      ix.setState({ phoneStatus: "Campo requerido" });
      isValidRegister = false;
    }


    if (termix) {      
      isValidRegister = true;
    } else {
      alert("Por favor, revisa nuestros términos y condiciones para poder continuar con el registro")
      isValidRegister = false;
    }

    
    if(isValidRegister && cntx ==0){
      // alert("final isvalid")
      firebase.auth().createUserWithEmailAndPassword(pemail, pxx)
      .then((userCredential) => {        
        var user = userCredential.user;        
        localStorage.setItem("actxp", "6");

    
      localStorage.setItem("nx",pnam);
      localStorage.setItem("lnx",plname);
      localStorage.setItem("emx",pemail);
      localStorage.setItem("pph",pphone);

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    }
    else{
      ix.setState({ isLoadingData: false });
    }


  }
  handleSubmit = (name) => (event) => {
    var ix = this;
    ix.setState({ isLoadingData: true });
    var us_ = ix.state.usuario;
    var pw_ = ix.state.password;
    var otp_ = ix.state.otp;
    var isValid = true;
    //console.log(us_);
    if (us_.length > 0 && isValid) {
      ix.setState({ userStatus: "" });
      isValid = true;
    } else {
      ix.setState({ userStatus: "Campo requerido" });
      isValid = false;
    }
    if (pw_.length > 0 && isValid) {
      ix.setState({ pwxStatus: "" });
      isValid = true;
    } else {
      ix.setState({ pwxStatus: "Campo requerido" });
      isValid = false;
    }
    if (isValid) {
      axios
    .post(
      "https://kip-logistic-api.azurewebsites.net/auth",
      {
        u: us_,
        p: pw_,
        o: otp_
      },
      {
        headers: {          
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      var dt = [];
      console.log(response);
      var al = "";
      al = response.data.firstname+" "+response.data.lastname;
      localStorage.setItem("actxp", al);
      localStorage.setItem("token_sec", response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      window.location.reload();
      localStorage.setItem("unx", al);
      // response.data.data.forEach(function (entry) {
      //   //console.log(entry);
      //   var itemx = {
      //     id: entry.id,
      //     rel_name: entry.rel_name,
      //   };
      //   console.log(itemx);
      //   dt.push(itemx);
      // });
      // console.log(response.data.data);
      //ins.setState({ dataRelations: dt });
    })
    .catch(function (error) {
      console.log("Incorrect");
      ix.setState({ isLoadingData: false });
      alert("No se ha podido iniciar sesión, intente nuevamente");
      console.log(error);
    });
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(us_, pw_)
      //   .then(function (result) {
      //     console.log(result.user);
      //     localStorage.setItem("actxp", "0");
      //   })
      //   .catch(function (error) {
      //     ix.setState({ isLoadingData: false });
      //     if (
      //       error.message ===
      //       "There is no user record corresponding to this identifier. The user may have been deleted."
      //     ) {
      //       alert(
      //         "Lo sentimos, no se ha encontrado una cuenta con el correo electrónico ingresado."
      //       );
      //     }

      //     if (error.message === "The email address is badly formatted.") {
      //       alert("El correo electrónico ingresado no es válido");
      //     }
      //     //The user account has been disabled by an administrator.
      //     if (
      //       error.message ===
      //       "The user account has been disabled by an administrator."
      //     ) {
      //       alert("Estimado cliente, esta cuenta ha sido deshabilitada");
      //     }
      //     //Datos incorrectos,  si no recuerdas los detalles, intenta re-establecer tu contraseña
      //     if (
      //       error.message ===
      //       "The password is invalid or the user does not have a password."
      //     ) {
      //       alert(
      //         "Datos incorrectos,  si no recuerdas los detalles, intenta re-establecer tu contraseña"
      //       );
      //     }
      //   });
    } else {
      ix.setState({ isLoadingData: false });
    }
  };
  handleFormMode = (name) => (event) =>{
    if(this.state.formMode==0){
      this.setState({ formMode: 1 });
    }
    if(this.state.formMode==1){
      this.setState({ formMode: 0 });
    }
  }
  render() {
    const { classes } = this.props;

    return !this.state.loggedIn ? (      
      <Redirect push to="/" />
    ) : (

      this.state.formMode==0 ? 
        //Login State 0
         <Grid container component="main" className={classes.root}>
        <Helmet title="Bienvenido" />
        <CssBaseline />
        
        
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            {/* <Avatar  className={classes.avatar}> */}
            {/* <LockOutlinedIcon /> */}
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/logo_1.png?alt=media&token=f903ad4c-9350-4adf-bf81-fd6b7d363f05"/> */}
            {/* </Avatar> */}

            <Typography component="h1" variant="h1">
              Bienvenido
            </Typography>
            
            {this.state.isLoadingData ? <CircularProgress /> : ""}
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Usuario"
                helperText={this.state.userStatus}
                error={this.state.userStatus}
                onChange={this.handleChange("user")}
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                helperText={this.state.pwxStatus}
                error={this.state.pwxStatus}
                onChange={this.handleChange("pw")}
              />
               <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="otp"
                label="2FA OTP"
                helperText={this.state.userStatus}
                error={this.state.userStatus}
                onChange={this.handleChange("otp")}
                name="otp"
                autoFocus
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recordarme"
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSubmit(this)}
              >
                Iniciar sesión
              </Button>

              {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    ¿Olvidó su contraseña?
                  </Link>
                </Grid>
                
                
                <Grid item>
                  <Link href="#" variant="body2"
                  onClick={this.handleFormMode(this)}
                  >
                    {"¿No tienes una cuenta? Regístrate"}
                  </Link>
                  
                </Grid>
              </Grid> */}

              <br />
              <br />
              <br />
              {/* <Grid container>
                <Grid item xs>                  
                  <Typography variant="body2" color="textSecondary" style={blueLink} align="left">
                  También, puedes iniciar sesión con:
                  </Typography>
                </Grid>
                <ThemeProvider theme={themeAvatar}>                                    
                <Grid
                  item                 
                  onClick={this.handleFacebook(this)}
                >
                  
                  <Avatar className={classes.avatar}>
                    <img                      
                     src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/facebook%20(2).svg?alt=media&token=af771ec5-a8ae-45e4-9760-8c53ed7d6e77"
                      />
                  </Avatar>
                  
                </Grid>
                <Grid item onClick={this.handleGmail(this)}>
                
                  <Avatar className={classes.avatar}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/google%20(1).svg?alt=media&token=72d7320b-2b55-4309-8d53-3e7558b31a22" />
                  </Avatar>
                
                </Grid>
                </ThemeProvider>
              </Grid> */}

              <Box mt={5}></Box>
            </form>
            <Copyright />
          </div>
        </Grid>
      
      </Grid>
        :       
        //Register State 1
        <Grid container component="main" className={classes.root}>
        <Helmet title="Crea tu cuenta" />
        <CssBaseline />                      
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            {/* <Avatar  className={classes.avatar}> */}
            {/* <LockOutlinedIcon /> */}
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/logo_1.png?alt=media&token=f903ad4c-9350-4adf-bf81-fd6b7d363f05"/> */}
            {/* </Avatar> */}

            <Typography component="h1" variant="h1">
              Crea tu cuenta y comparte tus servicios de forma segura y legal
            </Typography>
            <br />
            
            {this.state.isLoadingData ? <CircularProgress /> : ""}
            <form className={classes.form} noValidate>

            <Grid container spacing={3}>
        
        <Grid item xs={6}>
        <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="nombres"
                label="Nombres"
                helperText={this.state.nameStatus}
                error={this.state.nameStatus}
                onChange={this.handleChange("nombres")}
                name="nombres"                
                autoFocus
              />
        </Grid>
        <Grid item xs={6}>
        <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="apellidos"
                label="Apellidos"                
                id="apellidos"                
                helperText={this.state.lnameStatus}
                error={this.state.lnameStatus}
                onChange={this.handleChange("apellidos")}
              />
        </Grid>


        <Grid item xs={6}>
        <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="correo"
                label="Usuario."                
                id="correo"                
                helperText={this.state.emailStatus}
                error={this.state.emailStatus}
                onChange={this.handleChange("correo")}
              />
        </Grid>


        <Grid item xs={6}>
        <InputMask
  mask="+999 9999999999"  
  disabled={false}
  maskChar=" "
  value={this.state.telefono}
  onChange={this.handleChange("telefono")}
>
  {() => <TextField label="Número telefónico" margin="normal"  
   helperText={this.state.phoneStatus}
                error={this.state.phoneStatus} required fullWidth variant="outlined" />}
</InputMask>
        {/* <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="telefono"
                label="Número telefónico"                
                id="telefono"                
                helperText={this.state.phoneStatus}
                error={this.state.phoneStatus}
                onChange={this.handleChange("telefono")}
              /> */}
        </Grid>


        <Grid item xs={6}>        
        <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="passwordnew"
                label="Contraseña"
                type="password"
                id="passwordnew"
                autoComplete="current-password"
                helperText={<ul>
                  <li>Al menos 8 carácteres</li>                  
                  </ul>}
                error={this.state.pwxStatusnew}
                onChange={this.handleChange("pwnew")}
              />
        </Grid>
        
      </Grid>
      
             
             
              <FormControlLabel
                control={
                  <div>
                  <Checkbox
                  onChange={e => {
                    // console.log(e.target.checked);
                    this.setState({ terminos: e.target.checked });
                  }}
                   value={this.state.terminos} color="primary" />
                  <Link
                  href="https://www.google.com"
                  >Acepto los términos y condiciones de KIP</Link>
                  </div>
                
              }
                label=""
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.handleSignup(this)}
              >
                Crear cuenta
              </Button>

              <Grid container>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
                
                
                <Grid item>
                  <Link href="#" variant="body2"
                  onClick={this.handleFormMode(this)}
                  >
                    {"¿Ya tienes tu cuenta? Inicia sesión"}
                  </Link>
                </Grid>
              </Grid>

              <br />
              <br />
              <br />
              {/* <Grid container>
                <Grid item xs>
                <Typography variant="body2" color="textSecondary" style={blueLink} align="left">
                  Tambiéns, puedes iniciar sesión con:
                  </Typography>
                </Grid>

                <Grid
                  item
                  alignContent="left"
                  onClick={this.handleFacebook(this)}g

>
                  <ThemeProvider theme={themeAvatar}>      
                  <Avatar className={classes.avatar}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/facebook%20(2).svg?alt=media&token=af771ec5-a8ae-45e4-9760-8c53ed7d6e77" />
                  </Avatar>
                  </ThemeProvider>
                </Grid>
                <Grid item onClick={this.handleGmail(this)}>
                <ThemeProvider theme={themeAvatar}>      
                  <Avatar className={classes.avatar}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/google%20(1).svg?alt=media&token=72d7320b-2b55-4309-8d53-3e7558b31a22" />
                  </Avatar>
                  </ThemeProvider>      
                </Grid>
              </Grid> */}

              <Box mt={5}></Box>
            </form>
            <Copyright />
          </div>
        </Grid>
        
      </Grid>
        
        


     
      
    );
  }
}
export default withStyles(style)(LoginComponent);
