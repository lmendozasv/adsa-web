import React from "react";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { spacing } from "@material-ui/system";
// import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
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
const Spacer = styled.div(spacing);
const Divider = styled(MuiDivider)(spacing);
class JoinToGroup extends React.Component {
  componentDidMount() {
    console.log(this.props.location.state.groupData);
    this.setState({ data: this.props.location.state.groupData });
  }

  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Foo",
          age: "20",
        },
        {
          id: 2,
          name: "Bar",
          age: "30",
        },
        {
          id: 3,
          name: "Baz",
          age: "40",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid alignItems="center" item xl={3} lg={6} md={6} sm={6} xs={12}>
            <UserProfile data={this.state.data} />
          </Grid>

          <Grid item xl={8} lg={6} md={6} sm={6} xs={12}>
            <UserProfile data={this.state.data} />
          </Grid>
        </Grid>
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
    marginLeft: "40%",
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
}));

function UserProfile({ data, ins }) {
  const classes = useStyles();

  return (
    <div className={classes.ckroot}>
      <Paper id="OP" className={classes.ckpaper} elevation={3}>
        <Box textAlign="center" fontWeight="fontWeightRegular" m={1}>
          Administrador del grupo
        </Box>
        <Box
          className={classes.avatarHaloDialog}
          border={3}
          borderRadius="50%"
          borderColor="primary.main"
        >
          <Avatar
            src={data.pic_url}
            aria-label="recipe"
            className={classes.avatarDialog}
          >
            {data.user_name}
          </Avatar>
          {data.verified && (
            <Avatar className={classes.avatarVerifyDialog}>
              <img src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/iccheck15.svg?alt=media&token=851e4b83-fdc3-4bdc-aa03-363cb1b7910d" />
            </Avatar>
          )}
        </Box>
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
            value={data.rating}
          />
        </Box>
        {/* <Divider /> */}
        <Spacer mb={5} />
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography variant="body2" gutterBottom display="block">
              Correo electrónico
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              <img
                className={classes.guarantedStyle}
                src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/ic_guaranted_25.svg?alt=media&token=409e0e07-a0f7-46e2-8a19-4f97e9888eec"
              />
            </Typography>
          </Grid>

          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography variant="body2" gutterBottom display="block">
              Número telefónico
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              <img
                className={classes.guarantedStyle}
                src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/ic_guaranted_25.svg?alt=media&token=409e0e07-a0f7-46e2-8a19-4f97e9888eec"
              />
            </Typography>
          </Grid>

          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography variant="body2" gutterBottom display="block">
              Documento de identidad
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              <img
                className={classes.guarantedStyle}
                src="https://firebasestorage.googleapis.com/v0/b/plandy-c38e0.appspot.com/o/ic_guaranted_25.svg?alt=media&token=409e0e07-a0f7-46e2-8a19-4f97e9888eec"
              />
            </Typography>
          </Grid>
        </Grid>
        <Spacer mb={2} />
        {/* <Divider /> */}
        <Spacer mb={2} />



        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography variant="body2" gutterBottom display="block">
              Últ. conexión
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            <Typography
              variant="body2"
              align="right"
              gutterBottom
              display="block"
            >
              Ayer
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
              3
            </Typography>
          </Grid>

          
        </Grid>


      </Paper>
    </div>
  );
}

// class UserProfile extends React.Component {

//   render() {
//     return (

//     );
//   }
// }

export default JoinToGroup;
