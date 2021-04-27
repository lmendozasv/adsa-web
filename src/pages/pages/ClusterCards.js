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
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 210,
    // width: 205,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,

    [theme.breakpoints.down('xs')]: {
      maxWidth:"10vw",   
      width:"10vw",   
     //maxWidth:600,   
     //width:600,
   },    
    [theme.breakpoints.down('sm')]: {
       maxWidth:"10vw",   
       width:"10vw",   
      //maxWidth:600,   
      //width:600,
    },  
    [theme.breakpoints.down('md')]: {
      maxWidth:960,   
      width:960,
    },
    [theme.breakpoints.down('lg')]: {
      maxWidth:1280,   
      width:1280,
    },

    [theme.breakpoints.down('xl')]: {
       maxWidth:"10vw",   
       width:"10vw",   
      //maxWidth:1350,   
      //width:1350,
    },

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
    height: "60px",
    paddingLeft: "8px",
    paddingTop: "10px",
  },

  avatar: {
    marginTop: "0px",
    width: "50px",
    height: "50px",
    marginLeft: "1.9px",
    marginTop: "1.5px",
    marginBlockEnd: "5px",
    background: "#15244C",
  },
  rootCard: {
    overflow: "visible",
  },
  contentCard: {
    marginTop: "25px",
    marginLeft: "-10px",
    // lineHeight:'0.05'
  },
  avatarHalo: {
    marginTop: "30px",
    width: "60px",
    height: "60px",
    background: "#FFFFFF",
  },
  avatarVerify: {
    width: "15px",
    height: "15px",
    marginTop: "-20px",
    marginLeft: "45px",
    overflow: "visible",
  },
  titleName: {
    lineHeight: "1.00",
  },
  ratingAdjust: {
    marginLeft: "-3px",
    verticalAlign: "bottom",
  },
  cardContent: {
    marginTop: "12px",
    // height:"50px"
  },
  footerStyles: {
    background: "#15244C",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    color: "#EEF4CE",
    paddingLeft: "8px",
    paddingTop: "10px",
    textAlign: "center",
    overflow: "visible",
  },
  footerText: {
    color: "#EEF4CE",
  },
  footerAdjustCenter: {
    textAlign: "end",
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
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));
//MODAL

export default function SingleLineGridList({ dataList, instx }) {
  //modal
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //modal

  //const classes = useStyles();

  //const classes = useStylesCard();
  const theme = useTheme();

  // const [spacing, setSpacing] = React.useState(5);
  // const classes = useStyles();

  // const handleChange = (event) => {
  //   setSpacing(Number(event.target.value));
  // };

  // https://firebasestorage.googleapis.com/v0/b/aes-app-755d2.appspot.com/o/aes_oficinascomerciales.1280x0-2-2-2.jpg?alt=media&token=5afef333-27c9-44b4-a428-215c57eaa49e

  return (
    // <div style={{ width: '100%', overflow:'auto' }}>

    <Grid p={1} container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={5}
        >
          {dataList.slice(0, 15).map((tile) => (
            <Grid p={1} key={tile} item>
              <Dialog 
               open={open}
               disableEnforceFocus={true} 
               open={open}
               onClose={handleClose}
               aria-labelledby="simple-modal-title"
               aria-describedby="simple-modal-description"
               onClose={handleClose}>
                <div style={modalStyle} className={classes.paperDialog}>
                {tile}
                </div>
              </Dialog>

              <Paper variant="outlined" elevation24 className={classes.paper}>
                <Card onClick={handleOpen} className={classes.rootCard}>
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
                        {/* <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      > */}

                        <Avatar
                          src={tile.pic_url}
                          aria-label="recipe"
                          className={classes.avatar}
                        >
                          {tile.user_name}
                        </Avatar>
                        {tile.verified && 
                          <Avatar className={classes.avatarVerify}>
                          <img src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/iccheck15.svg?alt=media&token=851e4b83-fdc3-4bdc-aa03-363cb1b7910d" />
                        </Avatar>
                        }
                        

                        {/* </StyledBadge> */}
                      </Box>
                    }
                    title={
                      <Typography
                        className={classes.titleName}
                        variant="subtitle2"
                      >
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
                    // content={
                    //   <img   src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/Netflix_2015_logo.svg?alt=media&token=67c2111d-a0c6-4e8d-b4c4-00ee8821a568"/>
                    // }
                  />

{/* <CardActionArea>
        <CardMedia          
          image="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/Netflix_2015_logo.svg?alt=media&token=67c2111d-a0c6-4e8d-b4c4-00ee8821a568"
          title="Contemplative Reptile"
        />
        </CardActionArea> */}

                  <CardContent className={classes.cardContent}>
                  <img width="100%" height="20"   src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/Netflix_2015_logo.svg?alt=media&token=67c2111d-a0c6-4e8d-b4c4-00ee8821a568"/>
                  <Spacer mb={2} />
                    <Typography variant="h5">{tile.service_name}</Typography>
                    {/* <Spacer m={5} /> */}
                    
                    <div>
                      <StyledRating
                        className={classes.ratingAdjust}
                        name="customized-color"
                        defaultValue={tile.total_spots-tile.free_spots}
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
                    {/* <Spacer mb={1} /> */}
                  </CardContent>

                  <CardActions className={classes.footerStyles}>
                    <div className={classes.footerAdjustCenter}>
                      <Typography
                        variant="h6"
                        className={classes.footerText}
                        component="p"
                      >
                        $1.99/Mes
                      </Typography>
                    </div>

                    <div className={classes.footerAdjustRight}>
                      {/* <Typography variant="h6" className={classes.footerText} component="p">     
          IMGEN  
        </Typography> */}
                      <img
                        className={classes.footerText}
                        src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/ic_guaranted_25.svg?alt=media&token=409e0e07-a0f7-46e2-8a19-4f97e9888eec"
                      />
                    </div>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
