import React from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import styled, { withTheme } from "styled-components";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import { borders } from "@material-ui/system";
import GridList from "@material-ui/core/GridList";
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
    marginTop:"1px"
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
    paddingTop:"2px",
    paddingBottom:"0px",
    paddingLeft:"10px",
    paddingRight:"8px",
  },
  guarantedStyle:{
    width:"20px",
    height:"20px",
    marginTop:"5px",
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
      [theme.breakpoints.down('xs')]: {
        marginTop: "2.5px",
     },
      [theme.breakpoints.down('sm')]: {
        marginTop: "1.5px",
      },
      [theme.breakpoints.down('md')]: {
        marginTop: "1.5px",
      },
      [theme.breakpoints.down('lg')]: {
        marginTop: "1.5px",
      },

      [theme.breakpoints.down('xl')]: {
        marginTop: "1.5px",
      },
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

export default function SingleLineGridList({ dataList, instx }) {
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
        <Dialog          
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
          dividers
        >
          <DialogTitle id="responsive-dialog-title">
            Únete a {userOffering}
          </DialogTitle>
          <DialogContent dividers>
            {/* START */}
            
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
                  </Box>
               
            {/* END */}
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
        </Dialog>
        {dataList.slice(0, 15).map((tile) => (
          <Grid key={tile.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <Paper
              // className={classes.paper}
              variant="outlined"
              elevation24
            >
              <Card
                onClick={() => handleOpen(tile)}
                className={classes.rootCard}
              >
                <CardHeader
                  classes={{
                    root: classes.header,
                    content: classes.contentCard,
                  }}
                  avatar={
                    <Box
                      className={classes.avatarHalo}
                      border={3}
                      borderRadius="50%"
                      borderColor="primary.main"
                    >
                      <Avatar
                        src={tile.pic_url}
                        aria-label="recipe"
                        className={classes.avatar}
                      >
                        {tile.user_name}
                      </Avatar>
                      {tile.verified && (
                        <Avatar className={classes.avatarVerify}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/iccheck15.svg?alt=media&token=851e4b83-fdc3-4bdc-aa03-363cb1b7910d" />
                        </Avatar>
                      )}

                      {/* </StyledBadge> */}
                    </Box>
                  }
                  title={
                    <Typography className={classes.titleName} variant="subtitle2">
                      {tile.user_name}
                    </Typography>
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

                <CardContent className={classes.cardContent}>
                  <Typography noWrap={true}>
                    <Box fontWeight="fontWeightBold" m={1}>
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
                      ({tile.free_spots}/{tile.total_spots})
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
                      variant="subtitle2"
                      className={classes.footerText}
                      component="h6"
                    >
                      
                      ${
                      parseFloat(tile.service_price+tile.commission).toFixed(2)
                      }
                    </Typography>
                  </div>

                  <div className={classes.footerAdjustRight}>
                    {/* <Typography variant="h6" className={classes.footerText} component="p">     
          IMGEN  
        </Typography> */}
                    <img
                      className={classes.guarantedStyle}
                      src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/ic_guaranted_25.svg?alt=media&token=409e0e07-a0f7-46e2-8a19-4f97e9888eec"
                    />
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
