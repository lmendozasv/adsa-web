import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import CardHeader from "@material-ui/core/CardHeader";
import DialogContent from "@material-ui/core/DialogContent";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import Alert from "@material-ui/lab/Alert";
import Helmet from "react-helmet";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { Backdrop } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import Snackbar from "@material-ui/core/Snackbar";
import RadioGroup from "@material-ui/core/RadioGroup";
// import Alert from "@material-ui/lab/Alert";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import {
  CardContent,
  Grid,
  Link,
  Box,
  Button,
  MenuItem,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  TextField as MuiTextField,
  Typography,
  Select,
  InputLabel,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const Spacer = styled.div(spacing);

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const TextFieldSpacing = styled(MuiTextField)(spacing);

const TextField = styled(TextFieldSpacing)`
  //   width: ;
`;

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
    //   padding: theme.spacing(0, 3),
  },
  ckpaper: {
    //   padding: theme.spacing(2),
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

const handleAddCredentialType1 = (ins) => {
  ins.setState({ showEmailAndPassword: true });
  ins.setState({ showLink: false });
  ins.setState({ credtype: 1 });
};
const handleAddCredentialType2 = (ins) => {
  ins.setState({ showEmailAndPassword: false });
  ins.setState({ showLink: true });
  ins.setState({ credtype: 2 });
};
const addCredentialsToAPI = (a, b, ins, t) => {
  t.setState({ backdrop: false }, () => {
    console.log("--->" + t.state.backdrop); // myname
  });
  var tp = ins.credtype;
  var x = ins.clusterXID;
  var tk = localStorage.getItem("token_sec");
  var cred1 = a;
  var cred2 = b;
  axios
    .post(
      "http://localhost:5000/addDetails",
      {
        cid: x,
        l: cred1,
        a: cred2,
        b: cred1,
        da: cred2,
        db: "",
        t: tp,
      },
      {
        headers: {
          Authorization: "Bearer " + tk,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      // alert(response.data.id);
      console.log(response.data.code);
      if (response.data.code == "200") {
        t.setState({ backdrop: true }, () => {
          console.log("--->" + t.state.backdrop); // myname
        });
        //show 3 step
        t.setState({ step1: true }, () => {
          //callback
          console.log("--->" + t.state.step1); // myname
        });
        t.setState({ step2: true }, () => {
          //callback
          console.log("--->" + t.state.step2); // myname
        });
        t.setState({ step3: false }, () => {
          //callback
          console.log("--->" + t.state.step3); // myname
        });
      }
    })
    .catch(function (error) {
      // alert(response.data.id);
      console.log(error);
    });
};
const goToMyGroups = (ins,t)=>{
  // t.props.history.push({ 
  //   pathname: "/mysubscriptions"
  // }); 
  window.location.href = '/#/mysubscriptions';
}
const copyToClipboard = (ins, t) => {
  var tx = ins.lts;
  var txc =
    "¡Hola!\nHe creado un grupo en KIP para compartir los gastos de " +
    ins.serviceName +
    ". Puedes unirte al grupo usando este link: " +
    tx;
  navigator.clipboard.writeText(txc);
  // toaster:false, toasterMessage
  t.setState({ toasterMessage: "¡Enlace copiado!" });
  t.setState({ toaster: true });
};
const handleAddCredentials = (ins, t) => {
  // alert("Agregar credenciales");
  var val_set = ins.credtype;
  if (val_set == 0) {
    alert(
      "Por favor, seleccione el tipo de credenciales para agregar al grupo"
    );
  }
  if (val_set == 1) {
    //usuario y clave
    var u = ins.credential_email;
    var p = ins.pass;
    if (u.length > 0) {
      if (p.length > 0) {
        addCredentialsToAPI(u, p, ins, t);
      } else {
        alert("Por favor ingrese la clave a compartir");
      }
    } else {
      alert("Por favor ingrese un correo electrónico");
    }
  }
  if (val_set == 2) {
    //link y dirección
    var l = ins.link;
    var a = ins.address;
    if (l.length > 0) {
      if (a.length > 0) {
        addCredentialsToAPI(l, a, ins, t);
      } else {
        alert("Por favor ingrese el link a compartir");
      }
    } else {
      alert("Por favor ingrese la dirección exacta");
    }
  }
};
const handleCreateGroup = (ins, t) => {
  //INS = STATE
  //T = THIS
  // alert("CREADO"+ins.selectedCat);
  var svc = ins.selectedCat;
  var name = ins.groupname;
  var slotsToShare = ins.spotsToShare;
  var whoCanJoin = ins.selectedRelation;
  var groupType = ins.selectedVisibility;
  var isChecked = ins.isTrue;
  // console.log(svc);
  // console.log(name);
  // console.log(slotsToShare);
  // console.log(whoCanJoin);
  // console.log("fallanding", groupType);
  // console.log(isChecked);

  if (name) {
    console.log("----1");
    if (slotsToShare > 0) {
      console.log("-----2");
      if (whoCanJoin > 0) {
        console.log("-------3");
        if (groupType == 1 || groupType == 0) {
          console.log("------4");
          if (isChecked) {
            //Crear grupo
            console.log("------4a");
            var tk = localStorage.getItem("token_sec");
            // backdrop
            // t.setState({ backdrop: true });

            t.setState({ backdrop: false }, () => {
              //callback
              console.log("--->" + t.state.backdrop); // myname
            });
            axios
              .post(
                "http://localhost:5000/createNewGroup",
                {
                  s: svc,
                  n: name,
                  t: slotsToShare,
                  w: whoCanJoin,
                  g: groupType,
                },
                {
                  headers: {
                    Authorization: "Bearer " + tk,
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                }
              )
              .then(function (response) {
                // alert(response.data.id);
                t.setState({ clusterID: response.data.code });
                t.setState({ clusterXID: response.data.id });
                t.setState({ lts: response.data.l });
                //"https://www.facebook.com/sharer/sharer.php?u="+
                t.setState({
                  ltsfb:
                    "https://www.facebook.com/sharer/sharer.php?u=" +
                    response.data.l,
                });
                console.log(response.data.code);

                // console.log("antes");
                // console.log(ins.step1);
                // console.log(ins.step2);
                // console.log("=====+");
                // t.setState({ step1: false });
                // t.setState({ step2: true });
                // console.log("=======-");
                // console.log(t.state.step1);
                // console.log(t.state.step2);
                // console.log("despues");
                t.setState({ step1: true }, () => {
                  //callback
                  console.log("--->" + t.state.step1); // myname
                });
                t.setState({ step2: false }, () => {
                  //callback
                  console.log("--->" + t.state.step2); // myname
                });
                t.setState({ backdrop: true }, () => {
                  //callback
                  console.log("--->" + t.state.backdrop); // myname
                });
              })
              .catch(function (error) {
                // alert(response.data.id);
                console.log(error);
              });
          } else {
            console.log("5");
          }
        } else {
          console.log("6");
        }
      } else {
        console.log("7");
      }
    } else {
      console.log("8");
    }
  }

  // console.log(groupType);
};

function UserProfile({ ins, relations }) {
  const [value, setValue] = React.useState(0);

  const handleChangeP = (event) => {
    //isLoadingCard
    ins.setState({ selectedRela: false });
    setValue(parseInt(event.target.value));
    ins.setState({ selectedRel: parseInt(event.target.value) });
  };

  const classes = useStyles();

  return (
    <Grid container fullWidth xs={12} md={12} lg={12} xl={12}>
      {relations.length > 0 ? (
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Spacer m={2} />
          <TextField
            id="outlined-select-currency0"
            select
            label=""
            fullWidth
            value={ins.state.selectedCat}
            onChange={ins.handleChange("selectedCat")}
            // helperText="Please select your currency"
            variant="outlined"
          >
            {relations.map((tile) => (
              // <MenuItem value={10}>{tile.service_name}</MenuItem>
              <MenuItem key={tile.id} value={tile.id}>
                {tile.service_name}
              </MenuItem>
              //  </Grid>
            ))}
          </TextField>
        </Grid>
      ) : (
        ""
      )}

      <Spacer m={2} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Button
            backgroundColor="#172449"
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => ins.setState({ open: false })}
          >
            CANCELAR
          </Button>
        </Grid>

        <Spacer mt={5} />
        <Divider />
        <Spacer mt={5} />

        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Button
            // backgroundColor="#172449"
            // style={{backgroundColor: '#172449', color: '#FFFFFF'}}
            fullWidth
            variant="contained"
            color="primary"
            disabled={ins.state.selectedRela}
            //   onClick={() => addCardToServiceAndJoin(ins.state.data.id,ins)}
          >
            CONTINUAR
          </Button>
        </Grid>
        <Grid item xs={6} md={6} lg={6} xl={6}></Grid>
      </Grid>
    </Grid>
  );
}

class OutlinedTextFields extends React.Component {
  componentDidMount() {
    this._isMounted = true;

    var ins = this;
    var tk = localStorage.getItem("token_sec");
    axios
      .get(`http://localhost:5000/servicetypes`, {
        headers: {
          Authorization: "Bearer " + tk,
        },
      })
      .then((res) => {
        if (this._isMounted) {
          const personas = res.data.data;
          this.setState({ personas });
        }
      });
    var gn = "" + localStorage.getItem("unx");
    this.setState({ groupnamehelper: gn });
  }
  constructor(props) {
    super(props);

    this.currencies = [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
      {
        value: "BTC",
        label: "฿",
      },
      {
        value: "JPY",
        label: "¥",
      },
    ];
  }

  state = {
    name: "",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
    open: false,
    backdrop: true,
    personas: [],
    selectedMaxSlots: "0",
    officialPrice: "$ 0.00",
    legalEntity: "",
    serviceName: "",
    spots: [],
    groupname: "",
    groupnamehelper: "",
    svcname: "Netflix",
    selectedVis: false,
    selectedVisibility: "",
    isTrue: false,
    step1: false, //false = hidden
    step2: true,
    step3: true,
    dt1: true,
    dt2: false,
    willreceive: "$ 0.00",
    opxreal: 0,

    credential_email: "",
    pass: "",

    link: "",
    address: "",

    showEmailAndPassword: false,
    showLink: false,
    can_be_public: true,
    credtype: 0,
    clusterID: "",
    clusterXID: 0,
    lts: "",
    ltsfb: "",

    toaster: false,
    toasterMessage: "",
  };

  handleChangeRadio = (event) => {
    //isLoadingCard
    console.log(event);
    console.log(this.state.selectedCat);
    this.setState({ selectedVis: false });
    this.setState({ selectedVisibility: parseInt(event.target.value) });
    // setValue(parseInt(event.target.value));
    // ins.setState({ selectedRel: parseInt(event.target.value) });
  };

  getRelTypes = (selectedId, ins) => {
    var tk = localStorage.getItem("token_sec");
    axios
      .post(
        "http://localhost:5000/getConfs",
        {
          id: selectedId,
        },
        {
          headers: {
            Authorization: "Bearer " + tk,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        var dt = [];
        var cntSlots = [];
        response.data.data.forEach(function (entry) {
          //console.log(entry);
          var itemx = {
            id: entry.id,
            max_slots: entry.max_slots,
            official_price: entry.official_price,
            legal_entity: entry.legal_entity,
          };
          ins.setState({ selectedMaxSlots: entry.max_slots });

          ins.setState({ legalEntity: entry.legal_entity });
          ins.setState({ serviceName: entry.service_name });
          ins.setState({ dt1: entry.invitation_link });
          ins.setState({ dt2: entry.managed_credentials });
          ins.setState({ can_be_public: !entry.p });

          // alert("DEF: Link: "+entry.invitation_link+" - Credenciales:"+entry.managed_credentials);
          if (entry.invitation_link && !entry.managed_credentials) {
            ins.setState({ showEmailAndPassword: false });
            ins.setState({ showLink: true });
          }
          if (!entry.invitation_link && entry.managed_credentials) {
            ins.setState({ showEmailAndPassword: true });
            ins.setState({ showLink: false });
          }

          ins.setState({ opxreal: entry.official_price });
          if (entry.official_price > 0) {
            var ipx = entry.official_price / 100;
            ipx = ipx.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
            //console.log(ipx);
            var op = "$ " + ipx;
            ins.setState({ officialPrice: op });
          } else {
            ins.setState({ officialPrice: "$ 0.00" });
          }

          for (let i = 1; i <= entry.max_slots; i++) {
            var xl = { id: i, value: i };
            cntSlots.push(xl);
          }
          ins.setState({ spots: cntSlots });
          //spotsToShare
          ins.setState({ spotsToShare: cntSlots[0] });
          // spots

          //console.log(itemx);
          dt.push(itemx);
          //console.log(cntSlots);
        });
        // console.log(response.data.data);
        ins.setState({ dataRelations: dt });
      })
      .catch(function (error) {
        console.log(error);
      });
    /*GET REL TYPES*/
    var tk = localStorage.getItem("token_sec");
    axios
      .post(
        "http://localhost:5000/getRelTypes_a",
        {
          id: selectedId,
        },
        {
          headers: {
            Authorization: "Bearer " + tk,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        var dt = [];
        response.data.data.forEach(function (entry) {
          //console.log(entry);
          var itemx = {
            id: entry.id,
            rel_name: entry.rel_name,
          };
          console.log(itemx);
          dt.push(itemx);
        });
        // console.log(response.data.data);
        ins.setState({ dataRelationsCustom: dt });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
    // console.log([name]);
    // console.log(event.target.value);
    if ([name] == "selectedCat") {
      this.getRelTypes(event.target.value, this);
    }
    //calcular en base a los spots para compartir
    // willreceive
    if ([name] == "spotsToShare") {
      var wr = event.target.value;
      var mx = this.state.selectedMaxSlots + 1;
      // alert(wr);
      // alert(this.state.opxreal);
      // alert(mx);

      var wrx = this.state.opxreal / mx;
      var tox = (wrx / 100) * wr;
      // var tox = (wrx / 100);
      tox = "$ " + tox.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
      this.setState({ willreceive: tox });
    }
  };

  render() {
    return (
      <Card
        style={{ border: `1px solid #001E3C`, boxShadow: "2px 2px #001E3C" }}
        mb={6}
      >
        {/* <Dialog open={this.state.open}>
          <DialogTitle>
            ¡Urra! El grupo se ha creado correctamente{" "}
            <span role="img" aria-label="party">
              🥳
            </span>
          </DialogTitle>
          <Divider />
          <Box mt={1} pl={6} pr={6}>
            <ul>
              <li>
                <Typography variant="button" gutterBottom>
                  Comparte el link de tu grupo con tus amigos y familiares.{" "}
                  <span role="img" aria-label="party">
                    🔗
                  </span>
                </Typography>
              </li>
              <li>
                <Typography variant="button" gutterBottom>
                  Agregar los detalles de acceso al grupo.{" "}
                  <span role="img" aria-label="party">
                    🔐
                  </span>
                </Typography>
              </li>

              <li>
                <Typography variant="button" gutterBottom>
                  Agregar los detalles de acceso al grupo.{" "}
                  <span role="img" aria-label="party">
                    🔐
                  </span>
                </Typography>
              </li>
            </ul>
          </Box>          
        </Dialog> */}

        <CardContent>
          <Snackbar
            open={this.state.toaster}
            autoHideDuration={100}
            message={this.state.toasterMessage}
          />
          <Box hidden={this.state.backdrop} sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
          <Paper hidden={this.state.step1} mt={3}>
            <form>
              <Typography mb={10} variant="h6" gutterBottom>
                1/3 - Datos del servicio
              </Typography>

              <Grid container spacing={2} mt={10}>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <TextField
                    id="outlined-select-currency0"
                    select
                    label="Servicio que compartirás"
                    fullWidth
                    value={this.state.selectedCat}
                    onChange={this.handleChange("selectedCat")}
                    // helperText="Please select your currency"
                    variant="outlined"
                  >
                    {this.state.personas.map((tile) => (
                      <MenuItem key={tile.id} value={tile.id}>
                        {tile.service_name}
                      </MenuItem>
                    ))}
                  </TextField>
                  {/* /** fin */}
                </Grid>
              </Grid>
              <Spacer m={2} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Nombre del grupo"
                    inputProps={{ maxLength: 35 }}
                    required
                    value={this.state.groupname}
                    onChange={this.handleChange("groupname")}
                    helperText={
                      "Ej. " +
                      this.state.svcname +
                      " de " +
                      this.state.groupnamehelper
                    }
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Spacer m={2} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <TextField
                    fullWidth
                    id="outlined-disabled"
                    label="Precio oficial"
                    defaultValue="$ 0.00"
                    value={this.state.officialPrice}
                    helperText="(Lo que tú pagas por mes)"
                    variant="outlined"
                    color="success"
                  />
                </Grid>
                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={12} md={6} lg={6} xl={6}>
                    <TextField
                      id="outlined-select-currency0"
                      select
                      required
                      label="Espacios disponibles"
                      fullWidth
                      helperText={
                        "Máximo a compartir: " +
                        this.state.selectedMaxSlots +
                        " (Excluyendo el tuyo)"
                      }
                      value={this.state.spotsToShare}
                      onChange={this.handleChange("spotsToShare")}
                      variant="outlined"
                    >
                      {this.state.spots.map((tile) => (
                        <MenuItem key={tile.id} value={tile.id}>
                          {tile.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                )}

                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <Spacer m={2} />
                </Grid>

                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" gutterBottom>
                      Datos de acceso al grupo
                    </Typography>
                  </Grid>
                )}
                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={12} md={6} lg={6} xl={6}>
                    <TextField
                      id="outlined-select-currency0"
                      select
                      required
                      label="¿Quién puede unirse?"
                      fullWidth
                      value={this.state.selectedRelation}
                      onChange={this.handleChange("selectedRelation")}
                      // helperText="Please select your currency"
                      variant="outlined"
                    >
                      {this.state.dataRelationsCustom.map((tile) => (
                        <MenuItem key={tile.id} value={tile.id}>
                          {tile.rel_name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                )}

                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={12} md={6} lg={6} xl={6}>
                    <FormControl helperText="asdas">
                      <FormLabel id="demo-row-radio-buttons-group-label">
                        Tipo de grupo
                      </FormLabel>
                      <RadioGroup
                        row
                        required
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={this.handleChangeRadio}
                      >
                        <FormControlLabel
                          value="1"
                          disabled={this.state.can_be_public}
                          control={<Radio />}
                          label="Público"
                        />
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="Privado"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                )}
                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Spacer m={2} />
                  </Grid>
                )}
                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={10} md={11} lg={11} xl={11}>
                    <Typography variant="caption" gutterBottom display="block">
                      Confirmo que entiendo que KIP no está asociado o
                      afiliado a {this.state.legalEntity} y que he leído,
                      entendido y he aceptado cumplir con los términos y
                      condiciones de uso para compartir {this.state.serviceName}
                      .
                    </Typography>
                  </Grid>
                )}

                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={2} md={1} lg={1} xl={1}>
                    <Box textAlign="right" marginRight={4}>
                      <Checkbox
                        mr={10}
                        inputProps={{ "aria-label": "primary checkbox" }}
                        onChange={(e) => {
                          console.log(e.target.checked);
                          this.setState({ isTrue: e.target.checked });
                        }}
                      />
                    </Box>
                  </Grid>
                )}
                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Spacer m={2} />
                  </Grid>
                )}
                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Button
                    backgroundColor="#172449"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => handleCreateGroup(this.state, this)}
                  >
                    CONTINUAR
                  </Button>
                )}
              </Grid>

              {/* <TextField
                id="outlined-email-input"
                label="Email"
                m={2}
                type="email"
                name="email"
                autoComplete="email"
                variant="outlined"
              />

              <TextField
                id="outlined-password-input"
                label="Password"
                m={2}
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />

              <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                m={2}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-dense"
                label="Dense"
                margin="dense"
                variant="outlined"
              />

              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={this.state.multiline}
                onChange={this.handleChange("multiline")}
                m={2}
                helperText="hello"
                variant="outlined"
              />

              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                m={2}
                variant="outlined"
              />

              <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                m={2}
                helperText="Some important text"
                variant="outlined"
              />

              <TextField
                id="outlined-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
                m={2}
                variant="outlined"
              />

              <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                m={2}
                variant="outlined"
              />

              <TextField
                id="outlined-number"
                label="Number"
                value={this.state.age}
                onChange={this.handleChange("age")}
                type="number"
                m={2}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                m={2}
                variant="outlined"
              />

              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                m={2}
                value={this.state.currency}
                onChange={this.handleChange("currency")}
                helperText="Please select your currency"
                variant="outlined"
              >
                {this.currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency-native"
                select
                label="Native select"
                m={2}
                value={this.state.currency}
                onChange={this.handleChange("currency")}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
                variant="outlined"
              >
                {this.currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="outlined-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="outlined-bare"
                m={2}
                defaultValue="Bare"
                variant="outlined"
              /> */}
            </form>
          </Paper>

          {/* STEP 2 START*/}
          <Paper hidden={this.state.step2} mt={3}>
            <form>
              <Typography mb={10} variant="h6" gutterBottom>
                2/3 - Credenciales y acceso al grupo
              </Typography>
              <Box mt={2}> </Box>
              <Typography variant="caption" gutterBottom display="block">
                Selecciona el tipo de acceso que darás a los miembros de tu
                grupo para acceder a tu grupo de{" "}
                <b>{this.state.serviceName} </b>.
              </Typography>
              <Box mt={2}> </Box>
              <Grid container>
                {this.state.dt1 && this.state.dt2 ? (
                  <Grid container spacing={2} mt={10}>
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                      <Button
                        backgroundColor="#172449"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={() => handleAddCredentialType1(this)}
                      >
                        Usuario y clave
                      </Button>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                      <Button
                        backgroundColor="#172449"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={() => handleAddCredentialType2(this)}
                      >
                        Link de invitación
                      </Button>
                    </Grid>
                    {/* tiene las 2 formas de credencial */}
                  </Grid>
                ) : (
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    {this.state.dt1 ? (
                      <Button
                        backgroundColor="#172449"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={() => handleAddCredentialType2(this)}
                      >
                        Link de invitación
                      </Button>
                    ) : (
                      ""
                    )}
                    {this.state.dt2 ? (
                      <Button
                        backgroundColor="#172449"
                        fullWidth
                        variant="outlined"
                        color="primary"
                        // startIcon={
                        //   <Avatar
                        //     src={
                        //       "http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png"
                        //     }
                        //   />
                        // }
                        onClick={() => handleAddCredentialType1(this)}
                      >
                        Usuario y clave
                      </Button>
                    ) : (
                      ""
                    )}
                  </Grid>
                )}
              </Grid>
              <Spacer m={2} />
              {this.state.showEmailAndPassword ? (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      id="txCorreo"
                      label="Correo electrónico"
                      inputProps={{ maxLength: 256 }}
                      required
                      value={this.state.credential_email}
                      onChange={this.handleChange("credential_email")}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      id="outlined-name"
                      label="Contraseña"
                      inputProps={{ maxLength: 500 }}
                      required
                      value={this.state.pass}
                      onChange={this.handleChange("pass")}
                      variant="outlined"
                    />
                  </Grid>
                  <Spacer m={2} />
                  <Button
                    backgroundColor="#172449"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddCredentials(this.state, this)}
                  >
                    GUARDAR Y FINALIZAR
                  </Button>

                  <Spacer m={2} />
                  <Alert color="success" fullWidth severity="info">
                    Los miembros del grupo tendrán acceso siempre y cuando
                    envíen su cuota mensual de forma automática o manual por
                    medio de KIP.
                    {/* <b>{this.state.serviceName} </b>. */}
                  </Alert>
                  <Box mt={2}> </Box>
                </Grid>
              ) : (
                ""
              )}
              {this.state.showLink ? (
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      id="txCorreo"
                      label="Link de invitación"
                      inputProps={{ maxLength: 256 }}
                      required
                      value={this.state.link}
                      onChange={this.handleChange("link")}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <TextField
                      fullWidth
                      id="txCorreo"
                      label="Dirección residencial"
                      inputProps={{ maxLength: 256 }}
                      required
                      value={this.state.address}
                      onChange={this.handleChange("address")}
                      variant="outlined"
                    />
                  </Grid>
                  <Spacer m={2} />
                  <Button
                    backgroundColor="#172449"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddCredentials(this.state, this)}
                  >
                    GUARDAR Y FINALIZAR
                  </Button>
                  <Spacer m={2} />
                  <Alert color="success" fullWidth severity="info">
                    Los miembros del grupo tendrán acceso siempre y cuando
                    envíen su cuota mensual de forma automática o manual por
                    medio de KIP.
                  </Alert>
                </Grid>
              ) : (
                ""
              )}
            </form>
          </Paper>
          {/* STEP 2 END */}

          {/* STEP 3 START */}
          <Paper hidden={this.state.step3} mt={3}>
            <Typography mb={10} variant="h6" gutterBottom>
              3/3 | ¡Hemos terminado!
            </Typography>
            <Spacer m={2} />
            <Divider mt={5} mb={5} />
            <Typography variant="h6" gutterBottom>
              Tus ingresos mensuales estimados para este grupo
            </Typography>
            <Spacer m={5} />

            <Grid container  alignItems="center" spacing={2}>
              <Grid item xs={12} md={12} lg={12} xl={12}>                
                <Box>
                  <Typography variant="h2" gutterBottom>
                    {this.state.willreceive}
                  </Typography>
                </Box>
                <Divider mt={5} mb={5} />
                <Typography variant="button" gutterBottom>
                  Comparte el link de tu grupo (Toca para copiar el link)
                </Typography>
              </Grid>
              <TextField
                fullWidth
                id="outlined-disabled"
                label=""
                defaultValue=""
                InputProps={{
                  readOnly: true,
                }}
                value={this.state.lts}
                variant="outlined"
                color="success"
                helperText="Toca para copiar el link"
                // onClick={() => {
                //    alert("✔️ This works on every component!");
                // }}
                onClick={() => copyToClipboard(this.state, this)}
              />
              {/* <Spacer m={2} /> */}
              {/* <Alert color="success" fullWidth severity="info">
                Los miembros del grupo tendrán acceso siempre y cuando envíen su
                cuota mensual de forma automática o manual por medio de KIP.                
              </Alert> */}
              {/* <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank">
  Share on Facebook
</a> */}

              {/* <Grid item xs={12} md={12} lg={12} xl={12}>
                <Spacer m={2} />
                <Divider mt={5} mb={5} />
                <div
                  class="fb-share-button"
                  data-href={this.state.lts}
                  data-layout="button"
                  data-size="small"
                >
                  <a
                    target="_blank"
                    href={this.state.ltsfb}
                    class="fb-xfbml-parse-ignore"
                  >
                    Compartir en Facebook
                  </a>
                </div>
              </Grid> */}

              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Spacer m={2} />
                <Divider mt={5} mb={5} />
                <Button
            backgroundColor="#172449"
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => goToMyGroups(this.state, this)}
          >
            IR A MIS GRUPOS
          </Button>
              </Grid>
            </Grid>
          </Paper>
          {/* STEP 3 END */}
        </CardContent>
      </Card>
    );
  }
}

function TextFields() {
  return (
    <React.Fragment>
      <Helmet title="Crear grupo" />
      <Typography variant="h3" gutterBottom display="inline">
        Crear grupo para compartir
      </Typography>
      <Divider my={6} />

      {/* <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Forms
        </Link>
        <Typography>Text Fields</Typography>
      </Breadcrumbs> */}

      {/* <Divider my={6} /> */}

      <Grid container spacing={6}>
        <Grid item xs={12} md={8} lg={6} xl={6}>
          {/* <DefaultTextFields /> */}
          <OutlinedTextFields />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TextFields;
