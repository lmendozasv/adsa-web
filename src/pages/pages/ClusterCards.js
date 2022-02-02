import React from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import styled, { withTheme } from "styled-components";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import { borders } from "@material-ui/system";
import GridList from "@material-ui/core/GridList";
// import { browserHistory } from 'react-router';
// import { createBrowserHistory } from 'history'
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import  { Redirect } from 'react-router-dom';
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
//import tileData from './tileData';
import Box from "@material-ui/core/Box";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import { padding } from "polished";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { spacing } from "@material-ui/system";

import DotsIcon from "@material-ui/icons/FiberManualRecord";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
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

    //   [theme.breakpoints.down('xs')]: {
    //     marginBottom: "50%",
    //  },
    //   [theme.breakpoints.down('sm')]: {
    //     marginBottom: "50%",
    //   },
    //   [theme.breakpoints.down('md')]: {
    //     marginBottom: "6%",
    //   },
    //   [theme.breakpoints.down('lg')]: {
    //     marginBottom: "6%",
    //   },

    //   [theme.breakpoints.down('xl')]: {
    //     marginBottom: "60%",
    //   },
  },
  control: {
    padding: theme.spacing(2),
  },
  header: {
    // background: "#DFDFDF",
    background: "#fff",    
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    color: "#000",
    overflow: "visible",
    // height: "60px",
    height: "51px",
    paddingLeft: "8px",
    paddingTop: "15px",
  },

  avatar: {
    // marginTop: "10px",
    // borderTopLeftRadius: 40, //funciona
    width: "40px",
    height: "40px",
    marginLeft: "1.9px",
    marginTop: "10px",
    marginRight:"7px",
    marginBlockEnd: "5px",
    background: "#fff",
  },
  rootCard: {
    overflow: "visible",
    // borderColor:"#000",
    // borderWidth:2
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
    marginLeft: "35px",
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

    margin: "0px !important",
    // height:"50px"
  },
  footerStyles: {
    background: "#fff",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    color: "#EEF4CE",
    paddingLeft: "10px",
    // paddingTop: "10px",
    // textAlign: "center",
    overflow: "visible",
    paddingTop: "5px",
    paddingBottom: "5px",
    // paddingLeft: "10px",
    paddingRight: "8px",
  },
  guarantedStyle: {
    width: "20px",
    height: "20px",
    marginTop: "5px",
  },
  footerText: {
    // color: "#EEF4CE",
    color: "#000",
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
    marginTop: "0px",
    width: "55px",
    height: "55px",
    background: "#FFFFFF",
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
    marginLeft: "1.9px",
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
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  dpaper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },

}));
const Spacer = styled.div(spacing);
const StyledBadge = withStyles((theme) => ({
  badge: {
    // width:'10px',
    // height:'10px',

    backgroundColor: "#FF0000",
    color: "#FF0000",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 4.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const StyledRating = withStyles({
  iconFilled: {
    color: "#F42441",
  },
  iconHover: {
    color: "#F42441",
  },
})(Rating);

//MODAL
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function SingleLineGridList({ dataList, instx, context }) {
  console.log(context);
  //modal
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [titleSelected, setTitle] = React.useState("");
  const [userOffering, setUserOffering] = React.useState("");
  const [tileSelected, setTileSelected] = React.useState([]);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleOpen = (t) => {
    // console.log(t);
    setTitle(t.service_name);
    setUserOffering(t.user_name);
    setTileSelected(t);
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleViewDetail = (t) => {    
    console.error(context);
    if (t!=null){
      // alert('no es null');
      localStorage.setItem("cg",JSON.stringify(t))
    }
    else{
      //alert('es null');
    }
    context.history.push({ 
      pathname: "/groupDetails",
      state: {
        groupData: t,
      }
    });  
  }

  const theme = useTheme();
  // const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid p={1} container className={classes.root} spacing={2}>
      {/* <Grid item        
      > */}
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={5}
        className={classes.paper}
      >
        {/* <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          dividers
        >
          <DialogTitle id="responsive-dialog-title">
            Comparte {tileSelected.service_name}
          </DialogTitle>
          <DialogContent dividers>
            

            <div className={classes.droot}>
      <Paper className={classes.dpaper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{tileSelected.user_name}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.dpaper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>{tileSelected.user_name}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.dpaper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{tileSelected.user_name}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>

            <Typography className={classes.titleName} variant="subtitle2">
              Datos del propietario
            </Typography>
            <br />
            <Box
              className={classes.avatarHaloDialog}
              border={3}
              borderRadius="50%"
              borderColor="primary.main"
            >
              <Avatar
                src={tileSelected.pic_url}
                aria-label="recipe"
                className={classes.avatarDialog}
              >
                {tileSelected.user_name}
              </Avatar>
              {tileSelected.verified && (
                <Avatar className={classes.avatarVerifyDialog}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/iccheck15.svg?alt=media&token=851e4b83-fdc3-4bdc-aa03-363cb1b7910d" />
                </Avatar>
              )}
              <hr />
            </Box>

            
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
            <Button
              autoFocus
              variant="contained"
              onClick={handleClose}
              color="primary"
              autoFocus
            >
              Continuar
            </Button>
          </DialogActions>
        </Dialog> */}
        {dataList.slice(0, 8).map((tile) => (          
          <Grid key={tile.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            {/* border: `1px solid #001E3C`,
    width: `175px`,
    height: `80px`,
    boxShadow: "2px 2px #001E3C" */}
            <Paper
              // className={classes.paper}
              variant="outlined"
              style={{border:`1px solid #001E3C`,boxShadow: "2px 2px #001E3C"}}  
            >
              <Card
                onClick={() => handleViewDetail(tile)}
                className={classes.rootCard}
                
              >
                <CardHeader                
                  classes={{
                    root: classes.header,
                    content: classes.contentCard,
                  }}
                  avatar={
                    <div>                                        
                    
                    {/* <Box                                          
                      className={classes.avatarHalo}
                      border={3}
                      borderRadius="50%"
                      borderColor="primary.main"
                    > */}
                      <Avatar
                      variant="rounded"
                        src={tile.pic_url}
                        aria-label="recipe"
                        className={classes.avatar}         
                        style={{
                          border: '1.0px double #001e3c',
                          boxShadow: "3px 3px #F42441"

                       }}               
                      >
                        {tile.user_name}
                      </Avatar>
                      {tile.verified && (
                        <Avatar                        
                         className={classes.avatarVerify}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/iccheck15.svg?alt=media&token=851e4b83-fdc3-4bdc-aa03-363cb1b7910d" alt="perfil"/>
                        </Avatar>
                      )}

                      {/* </StyledBadge> */}
                    {/* </Box> */}
                    </div>
                  }
                  title={
                    <Box mt={2}>                    
                    <Typography
                      className={classes.titleName}
                      variant="subtitle2"
                      // noWrap={false}
                    >
                      {(tile.user_name.length>15?tile.user_name.split(" ")[0]+" "+tile.user_name.split(" ")[1]:tile.user_name)}
                      {/* {tile.user_name} */}
                    </Typography>
                    </Box>
                  }
                  subheader={
                    <Rating
                      className={classes.ratingAdjust}
                      size="small"
                      readOnly
                      name="simple-controlled"
                      value={tile.rating}
                    />
                  }
                />

                <CardContent
                style={{ paddingLeft: "10px", paddingBottom:"0px" }}
                 className={classes.cardContent}>
                  <Typography noWrap={true}>
                    <Box fontWeight="fontWeightBold" ml={0} mt={0} mb={0}>
                      {tile.service_name}
                    </Box>
                  </Typography>

                  <div>
                    <StyledRating
                      className={classes.ratingAdjust}
                      name="customized-color"
                      defaultValue={tile.total_spots - tile.free_spots}
                      getLabelText={(value) =>
                        `${value} Seat${value !== 1 ? "s" : ""}`
                      }
                      precision={0.5}
                      max={tile.total_spots}
                      readOnly
                      icon={<DotsIcon fontSize="inherit" />}
                    />
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      component="span"
                    >
                      ({tile.free_spots}/{tile.total_spots}) Disponibles
                    </Typography>
                  </div>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {tile.group_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {tile.cluster_code}
                  </Typography>
                  {/* <Spacer mb={1} /> */}
                </CardContent>

                <CardActions className={classes.footerStyles}>
                  <div className={classes.footerAdjustCenter}>
                    <Typography
                      variant="subtitle1"
                      className={classes.footerText}                      
                    >
                      $
                      {(parseFloat(tile.service_price) + parseFloat(tile.commission))/100
                      }/Mes
                    </Typography>
                  </div>

                  <div className={classes.footerAdjustRight}>
                    {/* <Typography variant="h6" className={classes.footerText} component="p">     
          IMGEN  
        </Typography> */}
        {tile.credential_status==0 && (
                    <img
                      className={classes.guarantedStyle}
                      src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/ic_guaranted_25_state_0.svg?alt=media&token=acd8e31a-1a34-42d9-98c2-f2144db57ff6"
                    />)
        }
        {tile.credential_status==1 && (
                    <img
                      className={classes.guarantedStyle}
                      src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/ic_guaranted_25.svg?alt=media&token=409e0e07-a0f7-46e2-8a19-4f97e9888eec"
                    />)
        }
        {/* {tile.credential_status==2 && (
                    <img
                      className={classes.guarantedStyle}
                      src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/ic_guaranted_25.svg?alt=media&token=409e0e07-a0f7-46e2-8a19-4f97e9888eec"
                    />)
        } */}
                  </div>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        ))}
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
}
