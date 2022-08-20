import React from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { spacing, width } from "@material-ui/system";
// import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Dropzone from "react-dropzone";
import Button from "@material-ui/core/Button";
import DotsIcon from "@material-ui/icons/FiberManualRecord";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import InputMask from "react-input-mask";
import { storage } from "../auth/firebases";
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
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TextField as MuiTextField,
  TableRow,
  IconButton as MuiIconButton,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Helmet from "react-helmet";
import { margin } from "polished";
import axios from "axios";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  CloudUpload as CloudUploadIcon,
  KeyboardVoice as KeyboardVoiceIcon,
  Navigation as NavigationIcon,
  Save as SaveIcon,
} from "@material-ui/icons";

const IconButton = styled(MuiIconButton)(spacing);
const Spacer = styled.div(spacing);
const TextFieldSpacing = styled(MuiTextField)(spacing);
const TextField = styled(TextFieldSpacing)`
  //   width: ;
`;
const Divider = styled(MuiDivider)(spacing);
class JoinToGroup extends React.Component {
  componentDidMount() {
    var tk = localStorage.getItem("token_sec");
    axios
      .get(`http://localhost:5000/myprofile`, {
        headers: {
          Authorization: "Bearer " + tk,
        },
      })
      .then((res) => {
        const personas = res.data.data[0];
        console.log("getting");
        console.log(res.data.data[0]);
        this.setState({ data: personas });
        this.setState({ names: personas.names });
        this.setState({ last_names: personas.last_names });
        this.setState({ nt: personas.nt });
        this.setState({ pic_url: personas.pic_url });
        this.setState({ rating: personas.rt });
        // this.setState({ data: personas });
      });
    var xins = this;
    axios
      .get(`http://localhost:5000/mycards`, {
        headers: {
          Authorization: "Bearer " + tk,
        },
      })
      .then(function (response) {
        var dt = [];
        response.data.data.forEach(function (entry) {
          var itemx = {
            id: entry.id,
            rel_name: entry.brand + "-" + entry.lastfor,
          };
          dt.push(itemx);
        });
        xins.setState({ dataRelations: dt });
        console.log(xins.state.dataRelations);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  constructor() {
    super();
    this.state = {
      data: [],
      tspots: 0,
      nam_: "",
      last_nam_: "",
      ntel_: "",
      correo_: "",
      foto_: "",
      pic_url: "",
      rating: 0,
      dataRelations: [],
    };
  }
  render() {
    return (
      <div>
        <Helmet title="Datos personales" />

        <Grid container spacing={1}>
          <Grid
            alignItems="center"
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <Typography padding={10} variant="h3" gutterBottom display="inline">
              Datos personales
            </Typography>
            <Divider />
            <Spacer mb={5} />
          </Grid>
          <Grid alignItems="center" item xl={6} lg={6} md={6} sm={6} xs={12}>
            <UserProfile data={this.state.data} ins={this} />
          </Grid>

          {/* <Grid item xl={9} lg={6} md={6} sm={6} xs={12}>
            <GroupDataDetails data={this.state.data} ins={this.props} />
          </Grid> */}
        </Grid>

        <Spacer mb={5} />

        <Grid container spacing={1}>
          <Grid
            alignItems="center"
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <Typography padding={10} variant="h3" gutterBottom display="inline">
              Mis tarjetas
            </Typography>
            <Divider />
            <Spacer mb={5} />
          </Grid>
          <Grid alignItems="center" item xl={6} lg={6} md={6} sm={6} xs={12}>
            <MyCardsD data={this.state.dataRelations} ins={this} />
          </Grid>

          {/* <Grid item xl={9} lg={6} md={6} sm={6} xs={12}>
            <GroupDataDetails data={this.state.data} ins={this.props} />
          </Grid> */}
        </Grid>

        {/* <Grid container spacing={1}>
          <Grid
            alignItems="center"
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
          >
            <Spacer mb={5} />
            <Typography padding={10} variant="h3" gutterBottom display="inline">
              Métodos para recibir mis pagos
            </Typography>
            <Divider />
            <Spacer mb={5} />
          </Grid>
          <Grid alignItems="center" item xl={6} lg={6} md={6} sm={6} xs={12}>
            <MyAccountBanks data={this.state.data} />
          </Grid> */}

          {/* <Grid item xl={9} lg={6} md={6} sm={6} xs={12}>
            <GroupDataDetails data={this.state.data} ins={this.props} />
          </Grid> */}
        {/* </Grid> */}

        {/* <Spacer mb={5} />
        <Alert color="success" fullWidth severity="info">
          El servicio de <b>{this.state.data.service_name} </b>tiene una alta
          demanda en KIP. ¡Apresúrate a unirte al grupo!
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
    // marginLeft: "40%", mendoza
    marginTop: "0px",
    marginBottom: "20px",
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
    // marginTop: "0px",
    width: "100%",
    height: "100%",
    marginLeft: "2px",
    marginTop: "1.5px",
    marginBlockEnd: "5px",
    background: "#fff",
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
  inputChoseFile: {
    width: "0.1px",
    height: "0.1px",
    opacity: "0",
    overflow: "hidden",
    position: "absolute",
    zIndex: "-1",
  },
}));

const StyledRatings = withStyles({
  iconFilled: {
    color: "#172449",
  },
  iconHover: {
    color: "#172449",
  },
})(Rating);

const handleJoinNow = (t, ns) => {
  console.log(ns);
  console.log(t);
  ns.history.push({
    pathname: "/join",
    state: { groupData: t },
  });
};

const handleDeletecard = ()=>{
  // alert(t);
  alert("Delete card");
}

function MyAccountBanks({ data, ins }) {
  const classes = useStyles();
  var xra = localStorage.getItem("ratx");
  return (
    <div className={classes.ckroot}>
      <Paper id="OP" className={classes.ckpaper} elevation={3}></Paper>
    </div>
  );
}

function MyCardsD({ data, ins }) {
  const classes = useStyles();
  return (
    <div className={classes.ckroot}>
      <Paper id="OP" className={classes.ckpaper} elevation={3}>
        <Spacer mb={5} />
        <Grid container spacing={3}>
          {data.map((tile) => (
            <Grid container spacing={3}>
              <Grid item xs={8} md={8} lg={8} xl={8}>
                <Box
                  textAlign="left"
                  flexDirection="column"
                  fontSize="body2.fontSize"
                  fontWeight="fontWeightBold"
                  m={1}
                  color="#172449"
                >
                  {tile.rel_name}
                </Box>
              </Grid>
              <Grid item xs={4} md={4} lg={4} xl={4}>
                <Box
                  textAlign="right"
                  fontSize="body2.fontSize"
                  fontWeight="fontWeightBold"
                  m={1}
                  color="#172449"
                  fullWidth
                >
                  <Button fullWidth variant="outlined" color="primary"
                  //  onClick={ins.handleDeletecard(tile.id,ins)} 
                  //  onClick={() => {alert("ss");}}
                  onClick={() => {ins.handleDeletecard()}}
                   >
                    <DeleteIcon />
                    Eliminar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}

function UserProfile({ data, ins }) {
  const classes = useStyles();
  const inputFileRef = React.useRef();
  const makeid = () => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };
  const handleFileChoser = (e) => {
    inputFileRef.current.click();
  };
  const handleChange = (name) => (event) => {
    console.log("sssasd");
    ins.setState({
      [name]: event.target.value,
    });
  };
  const updatePR = (na, va) => {
    var token = localStorage.getItem("token_sec");
    axios
      .post(
        "http://localhost:5000/updateProfile",
        {
          n: na,
          v: va,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (res) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const submitData = () => {
    updatePR("names", ins.state.names);
    updatePR("last_names", ins.state.last_names);
    updatePR("phone_number", ins.state.nt);
    updatePR("pic_url", ins.state.pic_url);
    localStorage.setItem("pcx", ins.state.pic_url);
    window.location.reload();
  };

  const handleSubmit = (e) => {
    console.log(e.target.files);
    var mkid = makeid();
    const uploadTask = storage
      .ref(`/profilePictures/${mkid}`)
      .put(e.target.files[0]);
    uploadTask.on(
      "state_changed",
      (snapShot) => {},
      (error) => {},
      () => {
        storage
          .ref("profilePictures")
          .child(mkid)
          .getDownloadURL()
          .then((firebaseUrl) => {
            ins.setState({ foto: firebaseUrl });
            ins.setState({ pic_url: firebaseUrl });
          });
      }
    );
  };
  return (
    <div className={classes.ckroot}>
      <Paper id="OP" className={classes.ckpaper} elevation={3}>
        {/* <Box textAlign="center" fontWeight="fontWeightRegular" m={1}>
          Perfil de usuario en KIP
        </Box> */}
        <div className={classes.centeredDiv}>
          <Box
            className={classes.avatarHaloDialog}
            border={0}
            borderRadius="50%"
            borderColor="primary.main"
          >
            <Avatar
              onClick={handleFileChoser}
              variant="rounded"
              style={{
                border: "1.0px double #001e3c",
                boxShadow: "3px 3px #172449",
                cursor: "pointer",
              }}
              src={ins.state.pic_url}
              aria-label="recipe"
              className={classes.avatarDialog}
            >
              {data.user_name}
            </Avatar>

            {data.verified && (
              <Avatar className={classes.avatarVerifyDialog}>
                <img src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/iccheck15.svg?alt=media&token=851e4b83-fdc3-4bdc-aa03-363cb1b7910d" />
              </Avatar>
            )}
          </Box>
        </div>
        <input
          ref={inputFileRef}
          className={classes.inputChoseFile}
          type="file"
          name="images"
          id="imgid"
          onChange={handleSubmit}
          multiple
        />
        {/* <Box
          style={{ width: 10, height: 10 }}
          className={classes.avatarHaloDialog}
          border={0}
          borderRadius="50%"
          borderColor="primary.main"
          hidden={false}
        >
          <Dropzone

            getUploadParams={getUploadParams}
            LayoutComponent={NoDropzoneLayout}
            inputContent="Only Choose Files (No Dropzone)"
            onSubmit={handleSubmit}
            styles={{
              dropzone: { width: 400, height: 200 },
              dropzoneActive: { borderColor: "green" },
              inputcontent: { width: 400, height: 200 },
            }}
          />
        </Box> */}

        <Box
          textAlign="center"
          fontSize="button.fontSize"
          color={"#515A5A"}
          m={2}
        >
          {/* Toca la imagen para cambiar tu foto de perfil */}
          {/* {data.user_name} */}
          <Box textAlign="center" fontWeight="fontWeightRegular" m={1}></Box>
          <Rating
            className={classes.ratingAdjust}
            readOnly
            name="simple-controlled"
            value={ins.state.rating}
          />
        </Box>
        {/* <Divider /> */}
        <Spacer mb={5} />

        <Box
          textAlign="center"
          fontSize="caption.fontSize"
          fontWeight="fontWeightRegular"
          color="#172449"
          m={1}
        >
          {/* {data.group_name} ({data.cluster_code}) */}
        </Box>
        <Spacer mb={5} />
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="left"
              flexDirection="column"
              fontSize="body2.fontSize"
              fontWeight="fontWeightBold"
              m={1}
              color="#172449"
            >
              Nombres
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="right"
              fontSize="body2.fontSize"
              fontWeight="fontWeightBold"
              m={1}
              color="#172449"
            >
              {/* {data.names} */}
              <TextField
                fullWidth
                id="outlined-name"
                size="small"
                inputProps={{ maxLength: 35 }}
                required
                value={ins.state.names}
                onChange={handleChange("names")}
                variant="outlined"
              />
            </Box>
          </Grid>

          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="left"
              flexDirection="column"
              fontSize="body2.fontSize"
              fontWeight="fontWeightBold"
              m={1}
              color="#172449"
            >
              Apellidos
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="right"
              fontSize="body2.fontSize"
              fontWeight="fontWeightBold"
              m={1}
              color="#172449"
            >
              {/* {data.names} */}
              <TextField
                fullWidth
                id="outlined-name"
                size="small"
                inputProps={{ maxLength: 35 }}
                required
                value={ins.state.last_names}
                onChange={handleChange("last_names")}
                variant="outlined"
              />
            </Box>
          </Grid>

          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="left"
              flexDirection="column"
              fontSize="body2.fontSize"
              fontWeight="fontWeightBold"
              m={1}
              color="#172449"
            >
              Número telefónico
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <InputMask
              mask="+503 9999999999"
              disabled={false}
              maskChar=" "
              value={ins.state.nt}
              onChange={handleChange("nt")}
            >
              {() => (
                <TextField size="small" required fullWidth variant="outlined" />
              )}
            </InputMask>
          </Grid>
        </Grid>

        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Spacer mb={5} />

          <Button
            backgroundColor="#172449"
            fullWidth
            variant="outlined"
            color="primary"
            // onClick={() => ins.setState({ open: false })}
            onClick={submitData}
          >
            GUARDAR
          </Button>
        </Grid>
      </Paper>
    </div>
  );
}
//https://stripe.com/docs/stripe-js/react
function GroupDataDetails({ data, ins }) {
  const classes = useStyles();
  var xpo = localStorage.getItem("xspots");
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

          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="right"
              fontSize="button.fontSize"
              fontWeight="fontWeightLight"
              m={1}
            >
              <StyledRatings
                className={classes.ratingAdjust}
                defaultValue={xpo}
                precision={0.5}
                max={data.total_spots}
                readOnly
                icon={<DotsIcon fontSize="inherit" />}
              />
              <Spacer mb={2} />
              <Typography variant="h6" color="textSecondary" component="span">
                ({data.free_spots} libres de {data.total_spots} disponibles)
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Spacer mb={10} />

        <Spacer mb={10} />
        <Divider />
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="left"
              fontSize="button.fontSize"
              fontWeight="fontWeightRegular"
              m={1}
            >
              Ciclo de facturación
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="right"
              fontSize="button.fontSize"
              fontWeight="fontWeightBold"
              color="#172449"
              m={1}
            >
              <Typography variant="button" component="span">
                Mensual
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
              Credenciales de acceso
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            {data.credential_status == 1 ? (
              <Box
                textAlign="right"
                fontSize="button.fontSize"
                fontWeight="fontWeightBold"
                color="#172449"
                m={1}
              >
                <Typography variant="button" component="span">
                  Garantizadas
                </Typography>
              </Box>
            ) : (
              <Box
                textAlign="right"
                fontSize="button.fontSize"
                fontWeight="fontWeightBold"
                color="#172449"
                m={1}
              >
                <Typography variant="button" component="span">
                  Pendientes de validar
                </Typography>
              </Box>
            )}
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
              Fecha de creación
            </Box>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Box
              textAlign="right"
              fontSize="button.fontSize"
              fontWeight="fontWeightBold"
              color="#172449"
              m={1}
            >
              <Typography variant="button" component="span">
                {data.cluster_creation_at}
              </Typography>
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
              color="#172449"
              m={1}
            >
              $
              {(parseFloat(data.service_price) + parseFloat(data.commission)) /
                100}
            </Box>
          </Grid>
        </Grid>

        <Spacer mb={12} />

        <Alert fullWidth severity="info" variant="outlined">
          Puedes solicitar un reembolso hasta 25 días después de realizar el
          pago.
        </Alert>
        <Spacer mb={2} />
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}></Grid>
          <Grid item xs={12} md={12} lg={12} xl={12}>
            <Button
              backgroundColor="#172449"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleJoinNow(data, ins)}
            >
              SOLICITAR ACCESO AL GRUPO
            </Button>
          </Grid>
        </Grid>
        <Spacer mb={4} />
      </Paper>
    </div>
  );
}

export default JoinToGroup;
