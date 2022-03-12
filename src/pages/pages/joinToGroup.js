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
// import { SnackbarProvider } from 'notistack';

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
  TableRow,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";
import Helmet from "react-helmet";
import { margin } from "polished";
import axios from "axios";
const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);

class JoinToGroup extends React.Component {
  componentDidMount() {
    // console.log(this.props.location.state.groupData);
    
    try{
      this.setState({ data: this.props.location.state.groupData });
    }    
    catch(s){
      document.location.href="/";
    }
    var xspots =
      this.props.location.state.groupData.total_spots -
      this.props.location.state.groupData.free_spots;

    //console.log(xspots);
    this.setState({ tspots: xspots });
    localStorage.setItem("xspots", xspots);
    localStorage.setItem("ratx", this.props.location.state.groupData.rating);
    getRelTypes(this.props.location.state.groupData.id, this);
  }

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: [],
      tspots: 0,
      dataRelations: [],
      selectedRel: 0,
      isTrue:false
    };
  }

  handleChange = (event) => {
    //console.log(this.state);
    //console.log("1state: " + this.state.selectedRel);
    this.state.selectedRel = parseInt(event.target.value);
    //console.log("2state: " + this.state.selectedRel);
    // setValue(event.target.value);
    //selectedRel
    this.setState({ selectedRel: parseInt(event.target.value) });
    //console.log(""+event.target.value);
  };
  render() {
    return (
      <div>
        <Helmet title="Ingresa al grupo" />

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


          <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12} xl={12}>
          <Button
              backgroundColor="#172449"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleJoinNow(this.state.data,this)}
            >
              SOLICITAR ACCESO
            </Button>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            
          </Grid>
        </Grid>



        </Grid>
        {/* <Spacer mb={2} /> */}
        
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
    // marginLeft: "40%", mendoza
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
  axios
    .post(
      "https://plandy-api.herokuapp.com/getRelType",
      {
        group_id: id,
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
      ins.setState({ dataRelations: dt });
    })
    .catch(function (error) {
      console.log(error);
    });
};
const handleJoinNow = (t,ns) => {    
  var relaion = ns.state.selectedRel;
  var isTrues = ns.state.isTrue;
  if(relaion>0&&isTrues){
    ns.props.history.push({ 
      pathname: "/pay",
      state: {groupData: t}
    });  
  }
  else{
    alert("Para continuar es necesario seleccionar las opciones, intenta nuevamente");
  }
}

function UserProfile({ data, ins, relations }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
    ins.setState({ selectedRel: parseInt(event.target.value) });
    //console.log(event.target.value);
    localStorage.setItem("pcat", (parseInt(event.target.value)));
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
          Confirma tu solicitud
        </Box>
        <Divider />
        <Spacer mt={5} />
        <Box
          textAlign="left"
          fontSize="button.fontSize"
          fontWeight="fontWeightBold"
          color="#F42441"
          gutterBottom
        >
          Selecciona tu relación con {data.user_name} (Administrador del grupo)
        </Box>

        <Spacer mb={5} />

        <FormControl fullWidth component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
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
        </FormControl>
        <Divider />
        <Spacer mt={5} />

        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={10}>
            <Typography variant="caption" gutterBottom display="block">
              Confirmo que entiendo que Plandy no está asociado o
              afiliado a {data.service_name} y que he leído, entendido y he aceptado
              cumplir con los términos y condiciones de uso para compartir {data.service_name}.
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={2}>
            <Box textAlign="right" marginRight={4} >
              <Checkbox
                mr={10}                                
                inputProps={{ "aria-label": "primary checkbox" }}
                onChange={e => {
                  //console.log(e.target.checked);
                  ins.setState({ isTrue: e.target.checked });
                }}
              />
            </Box>
          </Grid>
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
              $ {comissionformated}
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
