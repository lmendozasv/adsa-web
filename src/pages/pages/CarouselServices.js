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
import Box from '@material-ui/core/Box';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ButtonBase from '@material-ui/core/ButtonBase';

import Container from '@material-ui/core/Container';


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
  cover: {
    width: 100,    
    height: "auto",
    marginLeft:50    
  },
  newx:{    
    marginRight:30,
    overflow:"visible",
    maxWidth:900,   
      width:900,   
    // flexGrow:"unset"
  },
  maix:{    
    // overflow:'auto',
    // height:90,  
    margin:0,    
    [theme.breakpoints.up('xs')]: {
      maxWidth:"93vw",   
      width:"93vw",   
     //maxWidth:600,   
     //width:600,
   },    
    [theme.breakpoints.up('sm')]: {
       maxWidth:"96vw",   
       width:"96vw",   
      //maxWidth:600,   
      //width:600,
    },  
    [theme.breakpoints.up('md')]: {
      maxWidth:"76vw",   
       width:"76vw",   
      // maxWidth:960,   
      // width:960,
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth:"76vw",   
       width:"76vw",   
      // maxWidth:1280,   
      // width:1280,
    },
    [theme.breakpoints.up('xl')]: {
       maxWidth:"80vw",   
       width:"80vw",   
      // maxWidth:1350,   
      // width:1350,
      // maxWidth:"90%",   
      // width:"90%", 
    },
    
  },
  
}));

export default function SingleLineGridList({ dataList, instx }) {
  //const classes = useStyles();

  const classes = useStylesCard();
  const theme = useTheme();
  
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
          <Card             
          variant="outlined" 
          key={tile}
          className={classes.newx}
          >
             <ButtonBase  
            //  className={classes.newx}
            //  onClick={event => { alert("saskjdhas"); }}
            onClick={event => { instx(tile) }}
            >
          <CardMedia
        className={classes.cover}
        component="img"
        image={tile.pic_url}
        title={tile.title}        
      />
      
        <CardContent >
          <Typography variant="button">
          {tile.title}<br/>
          {/* {tile.business_sched_1}
          <br/>
          {tile.business_sched_2} */}
          </Typography>          
          <Typography variant="body2">
            {tile.business_sched_1}
          <br/>
          {tile.business_sched_2}
          </Typography>
        </CardContent>        
        </ButtonBase>
      
    </Card>
        
      
    ))}
      </Box>
       
      //  </div>
      
                  
  );
}
