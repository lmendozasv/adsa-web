import React from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { spacing } from "@material-ui/system";
// import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import DotsIcon from "@material-ui/icons/FiberManualRecord";
import Alert from "@material-ui/lab/Alert";

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
const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);
class JoinToGroup extends React.Component {
  componentDidMount() {
      //console.log(this.props);
    // console.log(this.props.location.state.groupData);
    
    try{
      this.setState({ data: this.props.location.state.groupData });
    }
    catch(err){      
      var ox = localStorage.getItem("cg");
      this.setState({ data: JSON.parse(ox) });
    }
    
    var xspots =
      this.state.total_spots -
      this.state.free_spots;

    //console.log(xspots);
    this.setState({ tspots: xspots });
    localStorage.setItem("xspots", xspots);
    localStorage.setItem("ratx", this.state.rating);
  }

  constructor() {
    super();
    this.state = {
      data: [],
      tspots: 0,
    };
  }
  render() {
    return (
      <div>
        <Helmet title="Detalles de grupo" />

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
              Detalles de grupo {this.state.data.group_name}
            </Typography>
            <hr />
            <Spacer mb={5} />
          </Grid>
          <Grid alignItems="center" item xl={3} lg={6} md={6} sm={6} xs={12}>
            <UserProfile data={this.state.data} />
          </Grid>

          <Grid item xl={9} lg={6} md={6} sm={6} xs={12}>
            <GroupDataDetails data={this.state.data} ins={this.props} />
          </Grid>
        </Grid>
        <Spacer mb={5} />
        <Alert color="success" fullWidth severity="info">
          El servicio de <b>{this.state.data.service_name} </b>tiene una alta
          demanda en KIP. ¡Apresúrate a unirte al grupo!
        </Alert>
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
    marginBottom:'20px',
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
    width: "60px",
    height: "60px",
    marginLeft: "2px",
    // marginTop: "1.5px",
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
}));

const StyledRatings = withStyles({
  iconFilled: {
    color: "#172449",
  },
  iconHover: {
    color: "#172449",
  },
})(Rating);


const handleJoinNow = (t,ns) => {    
    console.log(ns);
    console.log(t);
    ns.history.push({ 
      pathname: "/join",
      state: {groupData: t}
    });  
  }

function UserProfile({ data, ins }) {
  const classes = useStyles();
  var xra = localStorage.getItem("ratx");
  return (
      
    <div className={classes.ckroot}>
      <Paper id="OP" className={classes.ckpaper} elevation={3}>
        <Box textAlign="center" fontWeight="fontWeightRegular" m={1}>
          Administrador del grupo
        </Box>
        <div className={classes.centeredDiv}>
          <Box
            className={classes.avatarHaloDialog}
            border={0}
            borderRadius="50%"
            borderColor="primary.main"
          >
            <Avatar

              variant="rounded"                            
              style={{
                border: '1.0px double #001e3c',
                boxShadow: "3px 3px #172449"

              }}  

              src={data.pic_url}
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
        <Box
          textAlign="center"
          fontSize="button.fontSize"
          fontWeight="fontWeightBold"
          m={1}
        >
          {data.user_name}

          <Box textAlign="center" fontWeight="fontWeightRegular" m={1}></Box>
          <Rating
            className={classes.ratingAdjust}
            size="small"
            readOnly
            name="simple-controlled"
            value={xra}
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
          {data.group_name} ({data.cluster_code})
        </Box>
        <Spacer mb={5} />
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography variant="body2" gutterBottom display="block">
              Correo electrónico
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
          {data.email_verified==1?
              <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              <img
                className={classes.guarantedStyle}
                src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/ic_guaranted_25.svg?alt=media&token=409e0e07-a0f7-46e2-8a19-4f97e9888eec"
              />
            </Typography>
              :
              <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              <img
                className={classes.guarantedStyle}
                src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/ic_guaranted_25_state_0.svg?alt=media&token=acd8e31a-1a34-42d9-98c2-f2144db57ff6"
              />
            </Typography>
              }
          </Grid>

          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography variant="body2" gutterBottom display="block">
              Número telefónico
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
              {data.phone_verified==1?
              <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              <img
                className={classes.guarantedStyle}
                src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/ic_guaranted_25.svg?alt=media&token=409e0e07-a0f7-46e2-8a19-4f97e9888eec"
              />
            </Typography>
              :
              <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              <img
                className={classes.guarantedStyle}
                src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/ic_guaranted_25_state_0.svg?alt=media&token=acd8e31a-1a34-42d9-98c2-f2144db57ff6"
              />
            </Typography>
            }
            
          </Grid>

          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography variant="body2" gutterBottom display="block">
              Doc. Identidad
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
          {data.id_verified==1?
              <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              <img
                className={classes.guarantedStyle}
                src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/ic_guaranted_25.svg?alt=media&token=409e0e07-a0f7-46e2-8a19-4f97e9888eec"
              />
            </Typography>
              :
              <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              <img
                className={classes.guarantedStyle}
                src="https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/ic_guaranted_25_state_0.svg?alt=media&token=acd8e31a-1a34-42d9-98c2-f2144db57ff6"
              />
            </Typography>
              }
          </Grid>

          
        
        </Grid>
        <Divider />
        <Spacer mb={2} />
        {/* <Divider /> */}
        <Spacer mb={2} />

        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography variant="body2" gutterBottom display="block">
              Últ. conexión a KIP
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              {data.user_last_seen}
            </Typography>
          </Grid>

          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography variant="body2" gutterBottom display="block">
              Grupos activos
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              {data.active_groups}
            </Typography>
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
        <Divider/>
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
          {data.credential_status==1?
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
           </Box >
              :
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
           </Box >
              }
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
              ${(parseFloat(data.service_price) + parseFloat(data.commission))/100}
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
              onClick={() => handleJoinNow(data,ins)}
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
