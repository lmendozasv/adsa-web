import React from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { spacing } from "@material-ui/system";
// import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import DotsIcon from "@material-ui/icons/FiberManualRecord";
import Alert from "@material-ui/lab/Alert";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
// import {Elements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
import CreditCardInput from "react-credit-card-input";
import { OutlinedInput } from "@material-ui/core";
import InputMask from "react-input-mask";
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';

// import { SnackbarProvider } from 'notistack';
import Cards from "react-credit-cards";
// import {loadStripe} from '@stripe/stripe-js';
// import {loadStripe} from '@stripe/stripe-js/pure';
// import {
//   CardElement,
//   Elements,
//   useStripe,
//   useElements,
// } from '@stripe/react-stripe-js';

// import { loadStripe } from "@stripe/stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

import {
  Avatar as MuiAvatar,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid as MuiGrid,
  LinearProgress as MuiLinearProgress,
  TextField,
  Link,
  Table,
  TableBody,
  TableCell,
  Input,
  InputLabel,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Helmet from "react-helmet";
import { margin } from "polished";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Spacer = styled.div(spacing);
const Divider = styled(MuiDivider)(spacing);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event);

    var cardElement = elements.getElement('card');
    
    //console.log(cardElement);


    finalx(stripe, elements.getElement(CardElement));
    // const pm = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: elements.getElement(CardElement),
    // }).then(function(result) {
    //   // Handle result.error or result.paymentMethod
    //   console.log(result);
    //   // paymentMethods.attach(
    //   //   result.paymentMethod.id,
    //   //   {customer: 'cus_JRaRS2VhsiTj5b'}
    //   // );
    // });;
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement onChange={console.log("")} options={{hidePostalCode: true}} />
      <button id="AGREGAR" hidden type="submit" disabled={!stripe} onClick={() => handleJoinNowTEST(null,this)}>
        Pay
      </button>
    </form>
  );
};
const stripePromise = loadStripe("pk_test_NkTmrIX79f2DM4LYqoJNbiBK");

class JoinToGroup extends React.Component {
  
  componentDidMount() {
    // console.log(stripe_instance);
    // console.log(this.props.location.state.groupData);
    // this.setState({ data: this.props.location.state.groupData });

    try{
      this.setState({ data: this.props.location.state.groupData });
      localStorage.setItem("cg",JSON.stringify(this.props.location.state.groupData))
    }
    catch(err){      
      // alert("reload");
      // document.location.href="/";
      var ox = localStorage.getItem("cg");
      console.log(JSON.parse(ox));
      this.setState({ data: JSON.parse(ox) });
      this.setState({ data: JSON.parse(ox) }, () => {
        // console.log("--->",xsd.state.chatState);
      });
    }

    // var xspots =
    //   this.props.location.state.groupData.total_spots -
    //   this.props.location.state.groupData.free_spots;
    var xspots =  this.state.data.total_spots - this.state.data.free_spots;

    //console.log(xspots);
    this.setState({ tspots: xspots });
    localStorage.setItem("xspots", xspots);
    localStorage.setItem("ratx", this.state.data.rating);
    getRelTypes(this.state.data.id, this);

    var stripes = window.Stripe("pk_test_NkTmrIX79f2DM4LYqoJNbiBK");
    var elements = stripes.elements();
    // console.log(elements);
    console.info("DIDMOUNT");
    console.info(elements);
    var cardElement = elements.getElement('card');    
    console.info(cardElement);
    
  }

  handleCardNumberChange = () => {
    console.log("handle");
  };
  handleCardExpiryChange = () => {
    console.log("handle");
  };
  handleCardCVCChange = () => {
    console.log("handle");
  };

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: [],
      tspots: 0,
      dataRelations: [],
      balance:0,
      selectedRel: 0,
      isTrue: false,
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
      cn: "",
      expiry: "",
      addCard:false,
      addingCard:false,
      selectedRela: true,
      isLoadingCard:false,
      addingToCluster:false,
    };
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleChange = (name) => (event) => {
    console.log(name);
    console.log(event.target.value);
    this.setState({
      [name]: event.target.value,
    });

    // console.log(this.state);
    //console.log("1state: " + this.state.selectedRel);
    // this.state.selectedRel = parseInt(event.target.value);
    //console.log("2state: " + this.state.selectedRel);
    // setValue(event.target.value);
    //selectedRel
    //this.setState({ selectedRel: event.target.value });
    // console.log(""+event.target.value);
  };
  render() {
    return (
      <div>





<Dialog
        open={this.state.addingToCluster}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        onClose={() => handleCloseJoinRequest(this)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Se ha enviado tu solicitud al administrador del grupo"}</DialogTitle>
        <DialogContent>
        <Divider />
          {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText> */}
          <Spacer mb={5} />
          {/* <Box
          textAlign="left"
          fontSize="button.fontSize"
          fontWeight="fontWeightRegular"
          color="#F42441"
        >
          Por favor, rellena los campos de tu tarjeta de débito o crédito
        </Box> */}
          <Spacer mb={15} />
              <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                
              <Box
          textAlign="left"
          fontSize="button.fontSize"
          fontWeight="fontWeightRegular"
          color="#15244C"
        >
          Tu solicitud ha sido enviada al administrador del grupo, recibirás una notificación cuando el administrador acepte o decline tu solicitud.
          <br/>
          <br/>

          <Box
          textAlign="left"
          fontSize="button.fontSize"
          fontWeight="fontWeightRegular"
          color="#F42441"
        >
          <b>
          <Typography variant="body2" gutterBottom display="block">
          Tu pago quedará reservado, hasta que el administrador acepte tu solicitud.
            </Typography>
            
          </b>

        </Box>

          
        </Box>

              </Grid>

            
            </Grid>
            <Spacer mb={15} />
            <Divider />
            
{/* 
            <Grid item xs={12} md={12} lg={12} xl={12}>
            <Alert fullWidth severity="success" variant="outlined">
              Los datos de tu método de pago y transacciones estan protegidos
              por Stripe
            </Alert>            
          </Grid> */}


        </DialogContent>
        <DialogActions>          
          
          <Button 
          onClick={() => handleCloseJoinRequest(this)}
          variant="contained"
          color="primary">
            Aceptar
          </Button>
          
          
        </DialogActions>
      </Dialog>







      <Dialog
        open={this.state.addingCard}
        TransitionComponent={Transition}
        keepMounted
        // onClose={handleClose}
        onClose={() => handleCloseAddCard(this)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Agregar nuevo método de pago"}</DialogTitle>
        <DialogContent>
        <Divider />
          {/* <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText> */}
          <Spacer mb={5} />
          <Box
          textAlign="left"
          fontSize="button.fontSize"
          fontWeight="fontWeightRegular"
          color="#F42441"
        >
          Por favor, rellena los campos de tu tarjeta de débito o crédito
        </Box>
          <Spacer mb={15} />
              <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </Grid>

            
            </Grid>
            <Spacer mb={15} />
            <Divider />
            

            <Grid item xs={12} md={12} lg={12} xl={12}>
            <Alert fullWidth severity="success" variant="outlined">
              Los datos de tu método de pago y transacciones estan protegidos
              por Stripe
            </Alert>
            {/* <Typography variant="caption" gutterBottom display="block">              
              <b>Los datos de tu método de pago y transacciones estan protegidos por Stripe.</b>            
            </Typography> */}
          </Grid>


        </DialogContent>
        <DialogActions>
          <Button 
          // onClick={handleClose} 
          onClick={() => handleCloseAddCard(this)}
          color="secondary">
            Cancelar
          </Button>
          {this.state.isLoadingCard?
          <CircularProgress color="secondary" />
          :
          <Button 
          onClick={() => handleJoinNow(null,this)}
          variant="contained"
          color="primary">
            Agregar tarjeta
          </Button>
          }
          
        </DialogActions>
      </Dialog>

        <Helmet title="Detalles de pago" />        
        <Grid container spacing={1}>
          <Grid alignItems="center" item xl={6} lg={6} md={6} sm={6} xs={12}>
            <UserProfile
              data={this.state.data}
              relations={this.state.dataRelations}
              ins={this}
            />
          </Grid>

          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            <GroupDataDetails data={this.state.data} ins={this.state} />
          </Grid>
        </Grid>
        <Spacer mb={2} />

        {/* <Alert color="success" fullWidth severity="info">
          El servicio de <b>{this.state.data.service_name} </b>tiene una alta
          demanda en Plandy. ¡Apresúrate a unirte al grupo!
        </Alert> */}
      </div>
    );
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 210,
    maxHeight: 210,
    minHeight: 210,
    // width: 205,
    marginBottom: "6%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  control: {
    padding: theme.spacing(2),
  },
  header: {
    background: "#DFDFDF",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    color: "#000",
    overflow: "visible",
    height: "51px",
    paddingLeft: "8px",
    paddingTop: "15px",
  },

  avatar: {
    marginTop: "0px",
    width: "30px",
    height: "30px",
    marginLeft: "1.9px",
    marginTop: "1.5px",
    marginBlockEnd: "5px",
    background: "#15244C",
  },
  rootCard: {
    overflow: "visible",
  },
  contentCard: {
    marginTop: "0px",
    marginLeft: "-10px",
    // lineHeight:'0.05'
  },
  avatarHalo: {
    marginTop: "0px",
    width: "40px",
    height: "40px",
    background: "#FFFFFF",
  },
  avatarVerify: {
    width: "15px",
    height: "15px",
    marginTop: "-15px",
    marginLeft: "23px",
    overflow: "visible",
  },
  titleName: {
    lineHeight: "1.00",
    marginTop: "1px",
  },
  ratingAdjust: {
    marginLeft: "-3px",
    verticalAlign: "bottom",
  },
  cardContent: {
    marginTop: "0px",
    // height:"50px"
  },
  footerStyles: {
    background: "#15244C",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    color: "#EEF4CE",
    paddingLeft: "8px",
    // paddingTop: "10px",
    // textAlign: "center",
    overflow: "visible",
    paddingTop: "2px",
    paddingBottom: "0px",
    paddingLeft: "10px",
    paddingRight: "8px",
  },
  guarantedStyle: {
    width: "20px",
    height: "20px",
  },
  footerText: {
    color: "#EEF4CE",
  },
  footerAdjustCenter: {
    // textAlign: "end",
    alignItems: "end",
    alignContent: "end",
    width: "100%",
  },
  footerAdjustRight: {
    textAlign: "end",
    alignItems: "end",
    alignContent: "end",
    width: "50%",
    verticalAlign: "bottom",
  },
  paperDialog: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

  avatarHaloDialog: {
    // marginLeft: "40%", 
    marginTop: "0px",
    width: "55px",
    height: "55px",
    background: "#FFFFFF",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },

  avatarVerifyDialog: {
    width: "15px",
    height: "15px",
    marginTop: "-15px",
    marginLeft: "37px",
    overflow: "visible",
  },
  avatarDialog: {
    marginTop: "0px",
    width: "45px",
    height: "45px",
    marginLeft: "2px",
    // marginTop: "1.5px",
    marginBlockEnd: "5px",
    background: "#15244C",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2.5px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "1.5px",
    },
    [theme.breakpoints.down("lg")]: {
      marginTop: "1.5px",
    },

    [theme.breakpoints.down("xl")]: {
      marginTop: "1.5px",
    },
  },

  droot: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
  },
  dpaper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },

  ckroot: {
    padding: theme.spacing(0, 3),
  },
  ckpaper: {
    padding: theme.spacing(2),
  },
  titleUser: {
    textAlign: "center",
  },
  centeredDiv: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
}));

const StyledRatings = withStyles({
  iconFilled: {
    color: "#F42441",
  },
  iconHover: {
    color: "#F42441",
  },
})(Rating);

const getRelTypes = (id, ins) => {
  var tk = localStorage.getItem("token_sec");

    //get plandy wallet
    axios
    .get(`http://localhost:5000/myWallet`, {
      headers: {
        Authorization: "Bearer " + tk,
      },
    })
    .then(function (response) {
      var dt = [];
      console.log(response.data.data[0].balance);
      ins.setState({ balance: response.data.data[0].balance });
      getCards(id,ins);
    })
    .catch(function (error) {
      console.log(error);
      getCards(id,ins);
    });
    
  
  
};
const getCards=(id,ins=this)=>{
  // alert('getting cards');
  // this.setState({ isLoadingCard: false });
  // this.setState({addingToCluster: false});
  
  var tk = localStorage.getItem("token_sec");
  axios
  .get(`http://localhost:5000/mycards`, {
    headers: {
      Authorization: "Bearer " + tk,
    },
  })
  .then(function (response) {
    var dt = [];
    //console.log(response.data);
    response.data.data.forEach(function (entry) {
      //console.log(entry);
      var itemx = {
        id: entry.id,
        rel_name: entry.brand + "-" + entry.lastfor,
      };
      //console.log(itemx);
      dt.push(itemx);
    });
    if(ins.state.balance>0)
    {
      dt.push({rel_name:"Plandy Wallet ("+ins.state.balance+")",id:9999999999});
    }
    else{
      console.error("BALANCE",ins.state.balance);
    }
    // console.log(response.data.data);
    ins.setState({ dataRelations: dt });
    console.log(ins.state.dataRelations);
  })
  .catch(function (error) {
    console.log(error);
  });
}
// const Stripe = require('stripe');
// const stripe = Stripe('pk_test_NkTmrIX79f2DM4LYqoJNbiBK');
const handleCloseAddCard = (st) =>{
  st.setState({ addingCard: false });
}
const handleCloseJoinRequest = (st) =>{
  //TODO GO TO HOME OR MY GROUPS
  //st.setState({ addingToCluster: false });
  st.props.history.push({ 
    pathname: "/"
  });  
}

const handleJoinNowTEST = async (t, ns) => {
  // alert("aquiva");
  // console.log(ns.state);
}

const handleJoinNow = async (t, ns) => {
  ns.setState({ isLoadingCard: true });
  addCardToStripe(ns);
  var relaion = ns.state.cvc;
  var isTrues = ns.state.cvc;
  //alert(isTrues);

  // console.log(ns);
  // console.log(relaion);
  // console.log(isTrues);
  // var stripe = Stripe('pk_test_NkTmrIX79f2DM4LYqoJNbiBK');
  //   try{
  //     console.log("iniciando");

  //     // const customer =  stripe_instance.customers.create({
  //     //   source: 'tok_mastercard',
  //     //   email: 'test@plandy.com',
  //     // });

  // const card =   stripe_instance.customers.createSource(
  //   'cus_JRaRS2VhsiTj5b',
  //   {source: {
  //     object: 'card',
  //     exp_month: 10,
  //     exp_year: 2022,
  //     number: '4242 4242 4242 4242',
  //     cvc: 100
  //  }
  // }
  // ).then(function(result) {
  //   if (result.error) {
  //     // Inform the user if there was an error
  //     var errorElement = document.getElementById('card-errors');
  //     errorElement.textContent = result.error.message;
  //     console.log(result.error);
  //   } else {
  //     // Send the source to your server
  //     // stripeSourceHandler(result.source);
  //     console.log(result.source);
  //   }
  // }
  // );

  //   } catch (e) {
  //     console.error('error is', e);
  //     //console.timeEnd(label);
  //   }

  // card.then(function(msg) {
  //   console.log(msg);
  // })
  // .catch(function(error) {
  //  console.error(error);
  // });

  // stripe.createToken(cardElement).then(function(result) {
  //   // Handle result.error or result.token
  // });
};
function addCardToServiceAndJoin(idService,ins) {
  // alert(idCard)
  var token = localStorage.getItem("token_sec");
  var xprel = localStorage.getItem("pcat");
  if (ins.state.selectedRel==9999999999){
    // alert("NO SE HA SELECCIONADO CARD");
    if(ins.state.balance>0){
      // alert("Si tiene plata");
    }
  }
  else{
    axios
    .post(
      "http://localhost:5000/assoc/1",
      {
        rel_type:xprel,
        card_id: ins.state.selectedRel,
        service_id: idService
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      // window.location.reload(false);
      //mendoza pendiente      
      //
      ins.setState({addingToCluster: true});
    })
    .catch(function (error) {
      alert(
        "Ha ocurrido un error al ingresar su método de pago, por favor intente nuevamente."
      );
    });
  }
  
}
function addCardToUser(tok, brand, lastfosr) {
  var token = localStorage.getItem("token_sec");
  axios
    .post(
      "http://localhost:5000/newcard",
      {
        token: tok,
        brand: brand,
        lastfour: lastfosr,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {

      window.location.reload(false);
      // getCards();
      // console.log(response);
      // // ins.setState({isSending: false});
      // alert("El NIC se agregó a tu cuenta correctamente");
      // //window.location.reload(false);
      // const history = createHistory();
      // history.go(0)
      // // handleQueryCreated(response.id);
    })
    .catch(function (error) {
      // console.log(error);
      window.location.reload(false);
      alert(
        "No fue posible agregar la tarjeta, por favor intente nuevamente o contacte a su banco."
      );
    });
}
function finalx(s, ce) {
  // s
  //   .createPaymentMethod({
  //     type: "card",
  //     card: ce,
  //     billing_details: {
  //       name: "Jenny Rosen",
  //     },
  //   })
  //   .then(function (result) {
  //     // Handle result.error or result.paymentMethod
  //   });
  var x = localStorage.getItem("unx");
  var ownerInfo = {
    owner: {
      name: x,    
    },
  };

  s.createSource(ce, ownerInfo).then(function (result) {
    if (result.error) {
      // Inform the user if there was an error
      // var errorElement = document.getElementById("card-errors");
      // errorElement.textContent = result.error.message;
      console.log(result.error);
      alert("Ha ocurrido un error al ingresar su método de pago, intente nuevamente.");
    } else {
      // Send the source to your server
      // stripeSourceHandler(result.source);

      // console.log(result.source.card.brand);
      // console.log(result.source.id);
      // console.log(result.source.card.last4);

      addCardToUser(
        result.source.id,
        result.source.card.brand,
        result.source.card.last4
      );
      //  s.createSource(
      //   'cus_AFGbOSiITuJVDs',
      //   {
      //     source: 'src_18eYalAHEMiOZZp1l9ZTjSU0',
      //   }
      // );
    }
  });

  // const card =   s.createSource(
  //   'cus_JRaRS2VhsiTj5b',
  //   {source: {
  //     object: 'card',
  //     card: ce,
  //  }
  // }
  // ).then(function(result) {
  //   if (result.error) {
  //     // Inform the user if there was an error
  //     var errorElement = document.getElementById('card-errors');
  //     errorElement.textContent = result.error.message;
  //     console.log(result.error);
  //   } else {
  //     // Send the source to your server
  //     // stripeSourceHandler(result.source);
  //     console.log(result.source);
  //   }
  // }
  // );
}
async function addCardToStripe(ins) {
  // console.log("Function called");
  var stripes = window.Stripe("pk_test_NkTmrIX79f2DM4LYqoJNbiBK");
  //console.log(stripes);

  var x = document.getElementById("AGREGAR");
  x.click();

  // const card = stripes.createPaymentMethod(
  //   {
  //   type: 'card',
  //   card: {
  //     number: '4242 4242 4242 4242',
  //     exp_month: 5,
  //     exp_year: 2022,
  //     cvc: '314'
  //   },
  // }
  // );
  // var cardElement = {
  //   name: "luis",
  //   address_line1: "test",
  // };
  // const {stripe, elements} = ins.props;
  // elements.getElement(CardElement);
  //console.log(elements.getElement(CardElement));
  // stripes
  //   .createPaymentMethod({
  //     type: "card",
  //     card: cardElement,
  //     billing_details: {
  //       name: "Jenny Rosen",
  //     },
  //   })
  //   .then(function (result) {
  //     // Handle result.error or result.paymentMethod
  //   });

  // const card =   stripe_instance.stripes.createSource(
  //   'cus_JRaRS2VhsiTj5b',
  //   {source: {
  //     object: 'card',
  //     exp_month: 10,
  //     exp_year: 2022,
  //     number: '4242 4242 4242 4242',
  //     cvc: 100
  //  }
  // }
  // ).then(function(result) {
  //   if (result.error) {
  //     // Inform the user if there was an error
  //     var errorElement = document.getElementById('card-errors');
  //     errorElement.textContent = result.error.message;
  //     console.log(result.error);
  //   } else {
  //     // Send the source to your server
  //     // stripeSourceHandler(result.source);
  //     console.log(result.source);
  //   }
  // }
  // );
}

function UserProfile({ data, ins, relations }) {
  const [value, setValue] = React.useState(0);

  const handleChangeP = (event) => {
    //isLoadingCard
    ins.setState({ selectedRela: false });    
    setValue(parseInt(event.target.value));
    ins.setState({ selectedRel: parseInt(event.target.value) });    
  };

  const classes = useStyles();
  var xra = localStorage.getItem("ratx");
  return (
    <div className={classes.ckroot}>
      <Paper id="OP" className={classes.ckpaper} elevation={3}>
        <Box
          fontSize="h2.fontSize"
          textAlign="left"
          fontWeight="fontWeightBold"
          m={1}
        >
          Detalles de pago
        </Box>
        <Divider />
        <Spacer mt={5} />
        <Box
          textAlign="left"
          fontSize="button.fontSize"
          fontWeight="fontWeightRegular"
          color="#F42441"
        >
          Agrega o selecciona un método de pago para enviar el monto
          automáticamente
        </Box>
        <Box
          textAlign="left"
          fontSize="button.fontSize"
          fontWeight="fontWeightBold"
          color="#172449"
          gutterBottom
        >
          (Tu pago quedará reservado de tu cuenta y será cobrado hasta que pertenezcas al grupo).
        </Box>

        <Spacer mb={10} />
        {
          relations.length > 0 ? (
            <FormControl fullWidth component="fieldset">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChangeP}
              >
                {relations.map((tile) => (
                  <Grid container spacing={3}>
                    <Grid item xs={6} md={6} lg={6} xl={6}>
                      <Typography variant="body2" gutterBottom display="block">
                        {tile.rel_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6} xl={6}>
                      <Box textAlign="right">
                        <FormControlLabel
                          value={tile.id}
                          control={<Radio />}
                          label={tile.service_name}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                ))}
              </RadioGroup>

              <Spacer mt={5} />
        {/* <Divider /> */}
        {/* <Spacer mt={5} /> */}

              {/* <Box
          textAlign="left"
          fontSize="button.fontSize"
          fontWeight="fontWeightBold"
          color="#172449"
          gutterBottom
        >
          También puedes agregar una nueva tarjeta
        </Box>
        <Spacer mb={5} />
              <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Elements stripe={stripePromise}>
                  <CheckoutForm />
                </Elements>
              </Grid>

            
            </Grid> */}

            </FormControl>
          ) : (
            ""
        //     <Grid container spacing={3}>
        //         <Box
        //   textAlign="left"
        //   fontSize="button.fontSize"
        //   fontWeight="fontWeightBold"
        //   color="#F42441"
        //   gutterBottom
        // >
        //   Agrega una nueva forma de pago
        // </Box>
        // <Spacer mb={10} />
        //       <Grid item xs={12} md={12} lg={12} xl={12}>
        //         <Elements stripe={stripePromise}>
        //           <CheckoutForm />
        //         </Elements>
        //       </Grid>

            
        //     </Grid>
          )          
        }
        <Spacer mt={5} />

        <Spacer mt={5} />


        <Grid container spacing={3}>
          
            <Grid item xs={12} md={12} lg={12} xl={12}>
            <Button
                backgroundColor="#172449"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!ins.state.selectedRela}
                onClick={
                  
                  () => ins.setState({ addingCard: true })
                }
              >
                AGREGAR MÉTODO DE PAGO
              </Button>
            </Grid>
          </Grid>

          <Spacer mt={5} />
        <Divider />
        <Spacer mt={5} />


        <Grid container spacing={3}>
          {/* <Grid item xs={6} md={6} lg={6} xl={10}>
            <Typography variant="caption" gutterBottom display="block">
              Selecciona o agrega un método de pago para enviar la cuota automáticamente cuando el administrador del grupo confirme tu solicitud. 
              
            </Typography>
          </Grid> */}

          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Button
                // backgroundColor="#172449"
                // style={{backgroundColor: '#172449', color: '#FFFFFF'}}
                fullWidth
                variant="contained"
                color="primary"
                disabled={ins.state.selectedRela}
                onClick={() => addCardToServiceAndJoin(ins.state.data.id,ins)}
              >
                ENVIAR SOLICITUD DE ACCESO
              </Button>
            </Grid>
            <Grid item xs={6} md={6} lg={6} xl={6}></Grid>
          </Grid>

          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Alert fullWidth severity="success" variant="outlined">
              Los datos de tu método de pago y transacciones estan protegidos
              por Stripe
            </Alert>
            {/* <Typography variant="caption" gutterBottom display="block">              
              <b>Los datos de tu método de pago y transacciones estan protegidos por Stripe.</b>            
            </Typography> */}
          </Grid>

          <Spacer mt={10} />

          {/* <Grid item xs={6} md={6} lg={6} xl={2}>
            <Box textAlign="right" marginRight={4} >
              <Checkbox
                mr={10}                                
                inputProps={{ "aria-label": "primary checkbox" }}
                onChange={e => {
                  console.log(e.target.checked);
                  ins.setState({ isTrue: e.target.checked });
                }}
              />
            </Box>
          </Grid> */}
        </Grid>
      </Paper>
    </div>
  );
}
//https://stripe.com/docs/stripe-js/react
function GroupDataDetails({ data, ins }) {
  const classes = useStyles();
  var xpo = localStorage.getItem("xspots");

  var Sdate = new Date(); 
  var Edate = new Date(); 
  Edate.setDate(Edate.getDate() + 30); 
  // console.log(date);

  let sye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(Sdate);
  let smo = new Intl.DateTimeFormat('en', { month: 'short' }).format(Sdate);
  let sda = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(Sdate);

  let eye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(Edate);
  let emo = new Intl.DateTimeFormat('en', { month: 'short' }).format(Edate);
  let eda = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(Edate);

  var startDate = `${sda}-${smo}-${sye}`;
  var endDate = `${eda}-${emo}-${eye}`; 
  
  // console.log(`${da}-${mo}-${ye}`);

  var comissionformated = (data.commission)/100;
  comissionformated = comissionformated.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  // console.log(comissionformated.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));

  var priceFrmated = (data.service_price)/100;
  priceFrmated = priceFrmated.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return (    
    <div className={classes.ckroot}>
      <Paper id="OP" className={classes.ckpaper} elevation={3}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="left"
              fontSize="h3.fontSize"
              fontWeight="fontWeightBold"
              m={1}
              color="#172449"
            >
              {data.service_name}
            </Box>
            <Box
              textAlign="left"
              fontSize="button.fontSize"
              fontWeight="fontWeightLight"
              m={1}
            >
              {data.service_desc}              
            </Box>

          </Grid>
        </Grid>

        <Box
              textAlign="left"
              fontSize="button.fontSize"
              fontWeight="fontWeightLight"
              m={1}
              color="#172449"
            >              
              Código de grupo ({data.cluster_code})
            </Box>
        
            

        <Spacer mb={5} />
        <Divider />
        <Spacer mb={5} />
        {/* <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="left"
              fontSize="button.fontSize"
              fontWeight="fontWeightRegular"
              m={1}
            >
              {startDate}
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="right"
              fontSize="button.fontSize"
              fontWeight="fontWeightBold"              
              m={1}
            >
              <Typography variant="button" component="span">
                {endDate}
              </Typography>
            </Box>
          </Grid>
        </Grid> */}
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="left"
              fontSize="button.fontSize"
              fontWeight="fontWeightRegular"
              m={1}
            >
              Período de acceso al servicio
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            
              <Box
                textAlign="right"
                fontSize="button.fontSize"
                fontWeight="fontWeightBold"
                color="#F42441"
                m={1}
              >
                <Typography variant="button" component="span">
                del {startDate} al {endDate}
                </Typography>
              </Box>
            
          </Grid>

          
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="left"
              fontSize="button.fontSize"
              fontWeight="fontWeightRegular"
              m={1}
            >
              Contribución de gastos
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="right"
              fontSize="button.fontSize"
              fontWeight="fontWeightBold"
              color="#F42441"
              m={1}
            >
              <Typography variant="button" component="span">
              {/* $ {(data.service_price)/100} */}
              $ {priceFrmated}
              </Typography>
            </Box>
          </Grid>
        </Grid>




        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="left"
              fontSize="button.fontSize"
              fontWeight="fontWeightRegular"
              m={1}
            >
              Gastos administrativos
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="right"
              fontSize="button.fontSize"
              fontWeight="fontWeightBold"
              color="#F42441"
              m={1}
            >
              <Typography variant="button" component="span">
              {/* $ {(data.commission)/100} */}
              $ {comissionformated}
              </Typography>
            </Box>
          </Grid>
        </Grid>




        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={121} xl={12}>
            <Box
              textAlign="center"              
              fontSize="button.fontSize"
              fontWeight="fontWeightBold"
              color="#F42441"
              m={1}
            >
              ¿Tienes un cupón? Agrégalo aquí
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="right"
              fontSize="button.fontSize"
              fontWeight="fontWeightBold"
              color="#F42441"
              m={1}
            >
              
            </Box>
          </Grid>
        </Grid>




        <Spacer mb={2} />
        <Divider />

        <Spacer mb={3} />

        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="left"
              fontSize="h2.fontSize"
              fontWeight="fontWeightRegular"
              m={1}
            >
              Total
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="right"
              fontSize="h2.fontSize"
              fontWeight="fontWeightBold"
              color="#F42441"
              m={1}
            >
              ${(parseFloat(data.service_price) + parseFloat(data.commission))/100}
            </Box>
          </Grid>
        </Grid>

        <Spacer mb={5} />

        <Alert fullWidth severity="info" variant="outlined">
          Puedes solicitar un reembolso total hasta 25 días después de realizar el
          pago.
        </Alert>
        <Spacer mb={2} />
        
        <Spacer mb={4} />
      </Paper>
    </div>
  );
}

export default JoinToGroup;
