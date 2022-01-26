import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import Button from '@material-ui/core/Button';

import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ButtonBase from "@material-ui/core/ButtonBase";

import Container from "@material-ui/core/Container";
import { width } from "@material-ui/system";


const useStylesCard = makeStyles((theme) => ({
  // root: {
  //   // display: 'flex',
  //   maxWidth: 5,
  //   width:5
  // },
  // details: {
  //   // display: 'flex',
  //   // flexDirection: 'column',
  // },
  // content: {
  //   // flex: '1 0 auto',
  // },

  card: {
    // borderRadius: 15,
    borderEndEndRadius: 5,
    borderTopLeftRadius: 5,
    borderEndStartRadius: 5,
    borderStartEndRadius: 5,

    backgroundColor: "#fff",
    // backgroundColor: theme.palette.secondary.light,
    color: "#001E3C",
    // color: theme.palette.primary.contrastText,
    border: `1px solid #001E3C`,
    width: `175px`,
    height: `80px`,
    boxShadow: "2px 2px #001E3C"
   },

  cardcontent: {
    padding: 0,
    "&:last-child": {
      padding: 10
    },
    width: "100%",
    alignItems: "center"
  }
  ,
  cover: {
    width: 100,
    height: "auto",
    marginLeft: 50,
  },
  newx: {
    marginRight: 30,
    overflow: "visible",
    maxWidth: 900,
    // width: 900,
    // flexGrow:"unset"
  },
  maix: {
    // overflow:'auto',
    // height:90,
    margin: 0,
    [theme.breakpoints.up("xs")]: {
      maxWidth: "93vw",
      width: "93vw",
      //maxWidth:600,
      //width:600,
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "96vw",
      width: "96vw",
      //maxWidth:600,
      //width:600,
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "76vw",
      width: "76vw",
      // maxWidth:960,
      // width:960,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "76vw",
      width: "76vw",
      // maxWidth:1280,
      // width:1280,
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "80vw",
      width: "80vw",
      // maxWidth:1350,
      // width:1350,
      // maxWidth:"90%",
      // width:"90%",
    },
  },
}));

export default function SingleLineGridList({ dataList, instx, context }) {
  //const classes = useStyles();

  const classes = useStylesCard();
  
  const theme = useTheme();

  const handleViewDetail = (t) => {
    document.location = "?c=" + t.id;
    // const params = new URLSearchParams(context.location.search);
    // params.set('test', 123);
    // params.set('cheese', 'yummy');

    // params.toString(); // => test=123&cheese=yummy
    // window.history.replaceState({}, '', `${context.location.pathname}?${params.toString()}`);

    // context.history.push({
    //   pathname: "?c=1",
    //   state: {
    //     groupData: t,
    //   }
    // });
  };

  // https://firebasestorage.googleapis.com/v0/b/aes-app-755d2.appspot.com/o/aes_oficinascomerciales.1280x0-2-2-2.jpg?alt=media&token=5afef333-27c9-44b4-a428-215c57eaa49e

  return (
    // <div
    //  id="OUT"
    //  className={classes.maix}
    // //  style={{
    // //   width: '90vw',
    // //    overflow:'auto' }}
    //    >

    <Box
      display="flex"
      flexWrap="nowrap"
      p={1}
      overflow={"scroll"}
      m={1}
      borderRadius={15}
      elevation10
      className={classes.maix}
      id="OUT1"
    >
      {dataList.map((tile) => (
        <Card variant="outlined" key={tile} className={classes.newx} classes={{ root: classes.card }}>
          <Button
          fullWidth   
                     
          
            //  className={classes.newx}
            //  onClick={event => { alert("saskjdhas"); }}
            // onClick={event => { instx(tile) }}
            onClick={() => handleViewDetail(tile)}
            style={{ backgroundColor: 'transparent',height:'100%' }} >
            {/* <CardMedia
        className={classes.cover}
        component="img"
        image={tile.pic_url}
        title={tile.title}        
      /> */}

            <CardContent 
             className={classes.cardcontent}             
            >
              <Typography variant="button"              
              >                
                {/* {tile.name} */}
                {tile.name.length>15?tile.name.substring(0,12)+"...":tile.name}
                {/* <br /> */}
                {/* {tile.business_sched_1}
          <br/>
          {tile.business_sched_2} */}
              </Typography>
              {/* <Typography variant="body2">
                {tile.business_sched_1}
                <br />
                {tile.business_sched_2}
              </Typography> */}
            </CardContent>
          </Button>
        </Card>
      ))}
    </Box>

    //  </div>
  );
}
