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

import Helmet from 'react-helmet';
// import  { Redirect } from 'react-router-dom'
//import { useHistory } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://plandy.net/">
        Plandy LLC
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

const blueLink = {
  color: "#172449",
};
//const history = useHistory();
const style = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/sideleft2.png?alt=media&token=6a3c3acd-a418-4f10-9660-898fff8e2f06)",
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
    isLoadingData: false,
    userStatus: "",
    pwxStatus: "",
    loggedIn: true,
    formMode: 0,
  };
  componentDidMount() {
    this.setState({ redirect: true });
    axios.get("https://ipinfo.io/?token=2aa938a0872d90").then(function (response) {
      // localStorage.setItem("ESTADO", JSON.stringify(response.data));
      console.log(response.data);
      localStorage.setItem("ct_", response.data.countryCode);
    });
    //   var firebaseConfig ={  apiKey: "AIzaSyBXD48l7cYIiS6t2h-E08fAYGdyQRB63No",
    //   authDomain: "plandy-c38e0.firebaseapp.com",
    //   projectId: "plandy-c38e0",
    //   storageBucket: "plandy-c38e0.appspot.com",
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

  handleSubmit = (name) => (event) => {
    var ix = this;
    ix.setState({ isLoadingData: true });
    var us_ = ix.state.usuario;
    var pw_ = ix.state.password;
    var isValid = true;
    //console.log(us_);
    if (us_.length > 0) {
      ix.setState({ userStatus: "" });
      isValid = true;
    } else {
      ix.setState({ userStatus: "Campo requerido" });
      isValid = false;
    }
    if (pw_.length > 0) {
      ix.setState({ pwxStatus: "" });
      isValid = true;
    } else {
      ix.setState({ pwxStatus: "Campo requerido" });
      isValid = false;
    }
    if (isValid) {
      firebase
        .auth()
        .signInWithEmailAndPassword(us_, pw_)
        .then(function (result) {
          console.log(result.user);
          localStorage.setItem("actxp", "0");
        })
        .catch(function (error) {
          ix.setState({ isLoadingData: false });
          if (
            error.message ===
            "There is no user record corresponding to this identifier. The user may have been deleted."
          ) {
            alert(
              "Lo sentimos, no se ha encontrado una cuenta con el correo electrónico ingresado."
            );
          }

          if (error.message === "The email address is badly formatted.") {
            alert("El correo electrónico ingresado no es válido");
          }
          //The user account has been disabled by an administrator.
          if (
            error.message ===
            "The user account has been disabled by an administrator."
          ) {
            alert("Estimado cliente, esta cuenta ha sido deshabilitada");
          }
          //Datos incorrectos,  si no recuerdas los detalles, intenta re-establecer tu contraseña
          if (
            error.message ===
            "The password is invalid or the user does not have a password."
          ) {
            alert(
              "Datos incorrectos,  si no recuerdas los detalles, intenta re-establecer tu contraseña"
            );
          }
        });
    } else {
      ix.setState({ isLoadingData: false });
    }
  };
  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to="/FinishedPaying" userInput={this.props.userInput} />;
  //   }
  // };
  render() {
    const { classes } = this.props;

    return !this.state.loggedIn ? (
      // <Redirect to="/home"/>
      <Redirect push to="/home" />
    ) : (
      <Grid container component="main" className={classes.root}>
        <Helmet title="Crear cuenta" />
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            {/* <Avatar  className={classes.avatar}> */}
            {/* <LockOutlinedIcon /> */}
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/logo_1.png?alt=media&token=f903ad4c-9350-4adf-bf81-fd6b7d363f05"/> */}
            {/* </Avatar> */}

            <Typography component="h1" variant="h1">
              Crea tu cuenta gratis
            </Typography>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {this.state.isLoadingData ? <CircularProgress /> : ""}
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
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

              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    ¿Olvidó su contraseña?
                  </Link>
                </Grid>
                
                
                <Grid item>
                  <Link href="#" variant="body2">
                    {"¿No tienes una cuenta? Regístrate"}
                  </Link>
                  
                </Grid>
              </Grid>

              <br />
              <br />
              <br />
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style={blueLink}>
                    También, puedes iniciar sesión con:
                  </Link>
                </Grid>

                <Grid
                  item
                  alignContent="left"
                  onClick={this.handleFacebook(this)}
                >
                  <Avatar className={classes.avatar}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/facebook%20(2).svg?alt=media&token=af771ec5-a8ae-45e4-9760-8c53ed7d6e77" />
                  </Avatar>
                </Grid>
                <Grid item onClick={this.handleGmail(this)}>
                  <Avatar className={classes.avatar}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/google%20(1).svg?alt=media&token=72d7320b-2b55-4309-8d53-3e7558b31a22" />
                  </Avatar>
                </Grid>
              </Grid>

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
