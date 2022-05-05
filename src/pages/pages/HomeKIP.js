import React from "react";
import styled, { withTheme } from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import CustomGridList from "./CarouselServices";
import RecentClusters from "./ClusterCards";
import Helmet from "react-helmet";
import axios from "axios";
import "../../vendor/roundedBarCharts";
import { Bar } from "react-chartjs-2";
import { MoreVertical } from "react-feather";
import { red, green, blue } from "@material-ui/core/colors";

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
  Paper as MuiPaper,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import {
  Briefcase,
  DollarSign,
  ExternalLink,
  Facebook,
  Home,
  Instagram,
  MapPin,
  ShoppingBag,
  Twitter,
} from "react-feather";

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
const Paper = styled(MuiPaper)(spacing);
const Button = styled(MuiButton)(spacing);

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Grid = styled(MuiGrid)(spacing);

const LinearProgress = styled(MuiLinearProgress)(spacing);

const Spacer = styled.div(spacing);

const Centered = styled.div`
  text-align: center;
`;

const Avatar = styled(MuiAvatar)`
  display: inline-block;
  height: 128px;
  width: 128px;
`;

const AboutIcon = styled.span`
  display: flex;
  padding-right: ${(props) => props.theme.spacing(2)}px;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const ChartWrapper = styled.div`
  height: 280px;
  position: relative;
`;

const StatsIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 32px;

  svg {
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const ProductsChip = styled(Chip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
`;

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;

class ServicesList extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    //console.log(props);
  }
  componentDidMount() {
    console.log(this.props);
    var cat_selected = "0";
    var ENLACE_GRUPO = "";
    const urlParams = new URLSearchParams(window.location.search);
    cat_selected = urlParams.get("c");
    ENLACE_GRUPO = urlParams.get("group");
    // alert(ENLACE_GRUPO);
    //console.log("PARAMETRO: "+cat_selected);

    this._isMounted = true;
    var ins = this;
    var tk = localStorage.getItem("token_sec");
    axios
      .get(`http://localhost:5000/getServicesList`, {
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
    if (parseInt(cat_selected) > 0) {
      // console.log(cat_selected);
      var token = localStorage.getItem("token_sec");
      axios
        .post(
          "http://localhost:5000/getServicesByType",
          {
            catid: cat_selected,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (res) {
          //if (this._isMounted) {
          const grupos = res.data.data;
          ins.setState({ grupos });
          // console.log("setting state");
          // console.log(ins.state.grupos);
          //}
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .get(`http://localhost:5000/getLatestGroups`, {
          headers: {
            Authorization: "Bearer " + tk,
          },
        })
        .then((res) => {
          if (this._isMounted) {
            const grupos = res.data.data;
            this.setState({ grupos });
          }
        });
      // firebase.auth();
    }
    if (!ENLACE_GRUPO == undefined) {
      // referal
      var token = localStorage.getItem("token_sec");
      axios
        .post(
          "http://localhost:5000/getGroupByID",
          {
            id: ENLACE_GRUPO,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (res) {
          //if (this._isMounted) {
          const grupos = res.data.data;
          if (grupos.length > 0) {
            ins.setState({ grupos });
            ins.setState({ grupos }, () => {
              console.log(grupos[0]);
              ins.props.history.push({
                pathname: "/groupDetails",
                state: {
                  groupData: grupos[0],
                },
              });
            });
          } else {
            alert(
              "El grupo que buscas ya no está disponible. Puedes echar un vistazo a otros grupos"
            );
          }

          // console.log("setting state");
          // console.log(ins.state.grupos);
          //}
        })
        .catch(function (error) {
          // alert("s");
          console.log(error);
        });
    }
    //getGroupByID
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  state = {
    personas: [],
    grupos: [],
  };
  
  
  render() {
    return (
      <React.Fragment>
        <Helmet title="Bienvenido" />

        <Typography variant="h4">Bienvenido</Typography>
        <Spacer m={5} />
        <Grid container mt={0}>
          <Grid item xs={12} lg={6} xl={12}>
            <Box>
              <Paper m={4}>                
                <SalesRevenue/>
              </Paper>
            </Box>
          </Grid>

          <Grid item xl={6}>
            <Box>
              <Paper m={4}>                
                {/* <Earnings/> */}
                {/* <Products/> */}
                OTIF Preview
              </Paper>
            </Box>
          </Grid>


        </Grid>
      </React.Fragment>
    );
  }
}
function Details() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Profile Details
        </Typography>

        <Spacer mb={4} />

        <Centered>
          <Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />
          <Typography variant="body2" component="div" gutterBottom>
            <Box fontWeight="fontWeightMedium">Lucy Lavender</Box>
            <Box fontWeight="fontWeightRegular">Lead Developer</Box>
          </Typography>

          <Button mr={2} variant="contained" size="small">
            Follow
          </Button>
          <Button mr={2} variant="contained" color="primary" size="small">
            Message
          </Button>
        </Centered>
      </CardContent>
    </Card>
  );
}

function Skills() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Skills
        </Typography>

        <Spacer mb={4} />

        <Centered>
          <Chip size="small" mr={1} mb={1} label="HTML" color="secondary" />
          <Chip size="small" mr={1} mb={1} label="JavaScript" />
          <Chip size="small" mr={1} mb={1} label="Sass" />
          <Chip size="small" mr={1} mb={1} label="React" />
          <Chip size="small" mr={1} mb={1} label="Redux" />
          <Chip size="small" mr={1} mb={1} label="Next.js" />
          <Chip size="small" mr={1} mb={1} label="Material UI" />
          <Chip size="small" mr={1} mb={1} label="UI" />
          <Chip size="small" mr={1} mb={1} label="UX" />
        </Centered>
      </CardContent>
    </Card>
  );
}

function About() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>

        <Spacer mb={4} />

        <Grid container direction="row" alignItems="center" mb={2}>
          <Grid item>
            <AboutIcon>
              <Home />
            </AboutIcon>
          </Grid>
          <Grid item>
            Lives in{" "}
            <Link href="https://material-app.bootlab.io/">
              San Fransisco, SA
            </Link>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" mb={2}>
          <Grid item>
            <AboutIcon>
              <Briefcase />
            </AboutIcon>
          </Grid>
          <Grid item>
            Works at{" "}
            <Link href="https://material-app.bootlab.io/">Material UI</Link>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <AboutIcon>
              <MapPin />
            </AboutIcon>
          </Grid>
          <Grid item>
            Lives in <Link href="https://material-app.bootlab.io/">Boston</Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Elsewhere() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Elsewhere
        </Typography>

        <Spacer mb={4} />

        <Grid container direction="row" alignItems="center" mb={2}>
          <Grid item>
            <AboutIcon>
              <ExternalLink />
            </AboutIcon>
          </Grid>
          <Grid item>
            <Link href="https://material-app.bootlab.io/">lucylavender.io</Link>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" mb={2}>
          <Grid item>
            <AboutIcon>
              <Twitter />
            </AboutIcon>
          </Grid>
          <Grid item>
            <Link href="https://material-app.bootlab.io/">Twitter</Link>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center" mb={2}>
          <Grid item>
            <AboutIcon>
              <Facebook />
            </AboutIcon>
          </Grid>
          <Grid item>
            <Link href="https://material-app.bootlab.io/">Facebook</Link>
          </Grid>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <AboutIcon>
              <Instagram />
            </AboutIcon>
          </Grid>
          <Grid item>
            <Link href="https://material-app.bootlab.io/">Instagram</Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

function Earnings() {
  return (
    <Box position="relative">
      <Card mb={6} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">$ 2.405</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            Total Earnings
          </Typography>

          <StatsIcon>
            <DollarSign />
          </StatsIcon>
          <LinearProgress
            variant="determinate"
            value={75}
            color="secondary"
            mt={4}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

function Orders() {
  return (
    <Box position="relative">
      <Card mb={6} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">30</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            Orders Today
          </Typography>

          <StatsIcon>
            <ShoppingBag />
          </StatsIcon>
          <LinearProgress
            variant="determinate"
            value={30}
            color="secondary"
            mt={4}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

function Revenue() {
  return (
    <Box position="relative">
      <Card mb={6} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">$ 1.224</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            Total Revenue
          </Typography>

          <StatsIcon>
            <DollarSign />
          </StatsIcon>
          <LinearProgress
            variant="determinate"
            value={50}
            color="secondary"
            mt={4}
          />
        </CardContent>
      </Card>
    </Box>
  );
}

function Products() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Products
        </Typography>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Tech</TableCell>
                <TableCell>License</TableCell>
                <TableCell>Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  AppStack
                </TableCell>
                <TableCell>
                  <ProductsChip
                    size="small"
                    label="HTML"
                    rgbcolor={blue[500]}
                  />
                </TableCell>
                <TableCell>Single License</TableCell>
                <TableCell>76</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Bienvenido
                </TableCell>
                <TableCell>
                  <ProductsChip
                    size="small"
                    label="React"
                    rgbcolor={green[500]}
                  />
                </TableCell>
                <TableCell>Single License</TableCell>
                <TableCell>38</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Milo
                </TableCell>
                <TableCell>
                  <ProductsChip
                    size="small"
                    label="HTML"
                    rgbcolor={blue[500]}
                  />
                </TableCell>
                <TableCell>Single License</TableCell>
                <TableCell>43</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Robust UI Kit
                </TableCell>
                <TableCell>
                  <ProductsChip
                    size="small"
                    label="Angular"
                    rgbcolor={red[500]}
                  />
                </TableCell>
                <TableCell>Single License</TableCell>
                <TableCell>27</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Spark
                </TableCell>
                <TableCell>
                  <ProductsChip
                    size="small"
                    label="React"
                    rgbcolor={green[500]}
                  />
                </TableCell>
                <TableCell>Single License</TableCell>
                <TableCell>12</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </CardContent>
    </Card>
  );
}

const SalesRevenue = withTheme(({ theme }) => {
  const data = {
    labels: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
    ],
    datasets: [
      {
        label: "Programado",
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        hoverBackgroundColor: theme.palette.secondary.main,
        hoverBorderColor: theme.palette.secondary.main,
        data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
        barPercentage: 0.625,
        categoryPercentage: 0.5,
      }
      ,
      {
        label: "Express",
        backgroundColor: theme.palette.grey[200],
        borderColor: theme.palette.grey[200],
        hoverBackgroundColor: theme.palette.grey[200],
        hoverBorderColor: theme.palette.grey[200],
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.625,
        categoryPercentage: 0.5,
      }

      ,
      {
        label: "Flash",
        backgroundColor: "#EF3340",
        borderColor: "#EF3340",
        hoverBackgroundColor: theme.palette.grey[200],
        hoverBorderColor: theme.palette.grey[200],
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.625,
        categoryPercentage: 0.5,
      }


      ,
      {
        label: "Mismo dia",
        backgroundColor: theme.palette.grey[200],
        borderColor: theme.palette.grey[200],
        hoverBackgroundColor: theme.palette.grey[200],
        hoverBorderColor: theme.palette.grey[200],
        data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
        barPercentage: 0.625,
        categoryPercentage: 0.5,
      },

      
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cornerRadius: 2,
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          stacked: false,
          ticks: {
            stepSize: 20,
          },
        },
      ],
      xAxes: [
        {
          stacked: false,
          gridLines: {
            color: "transparent",
          },
        },
      ],
    },
  };

  return (
    <Card mb={1}>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertical />
        </IconButton>
      }
      title="Ocupación horaria (Hoy)"
    />

    <CardContent>
      <ChartWrapper>
        <Bar data={data} options={options} />
      </ChartWrapper>
    </CardContent>
  </Card>
  );
});

// function Profile() {
//   return (
//     <React.Fragment>
//       <Helmet title="KIP" />

//       <Typography variant="h3" gutterBottom display="inline">
//         Servicios populares
//       </Typography>

//       {/* <Breadcrumbs aria-label="Breadcrumb" mt={2}>
//         <Link component={NavLink} exact to="/">
//           Dashboard
//         </Link>
//         <Link component={NavLink} exact to="/">
//           Pages
//         </Link>
//         <Typography>Profile</Typography>
//       </Breadcrumbs> */}

//       <Divider my={6} />

//       <Grid container spacing={6}>
//       {/* <CustomGridList dataList={this.state.places} instx={this.onCardClick} /> */}
//         {/* <Grid item xs={12} lg={4} xl={6}>
//           <Details />
//           <Skills />
//           <About />
//           <Elsewhere />
//         </Grid>
//         <Grid item xs={12} lg={8} xl={9}>
//           <SalesRevenue />
//           <Grid container spacing={6}>
//             <Grid item xs={12} lg={4}>
//               <Earnings />
//             </Grid>
//             <Grid item xs={12} lg={4}>
//               <Orders />
//             </Grid>
//             <Grid item xs={12} lg={4}>
//               <Revenue />
//             </Grid>
//           </Grid>
//           <Products />
//         </Grid> */}
//       </Grid>
//     </React.Fragment>
//   );
// }

export default ServicesList;