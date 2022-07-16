import React from "react";
import styled, { withTheme } from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import CustomGridList from "./CarouselServices";
import RecentClusters from "./ClusterCards";
// import react-big-calendar-like-google/lib/css/react-big-calendar.css
import "./Timeline.css";
import Helmet from "react-helmet";
import axios from "axios";
// import Dayz from 'dayz';
// import 'styles.css';
import moment from "moment";
// import date from 'moment';
import "../../vendor/roundedBarCharts";
import { Bar } from "react-chartjs-2";
import { MoreVertical } from "react-feather";
import { red, green, blue } from "@material-ui/core/colors";
import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import Timeline from "react-calendar-timeline";
import BigCalendar from "react-big-calendar-like-google";

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
  Typography,
} from "@material-ui/core";
import BlurOn from "@material-ui/icons/FiberManualRecord";
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
  Circle,
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

const groups = [
  { id: 1, title: "Flash" },
  { id: 2, title: "Express" },
  { id: 3, title: "Mismo dia" },
  { id: 4, title: "Programado" },
];

const items = [
  {
    id: 1,
    group: 1,
    title: "4",
    start_time: moment(),
  },
  {
    id: 2,
    group: 2,
    title: "item 2",
    start_time: moment().add(-0.5, "hour"),
    end_time: moment().add(0.5, "hour"),
  },
  {
    id: 3,
    group: 1,
    title: "item 3",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
];

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
      .get(`https://kip-logistic-api.azurewebsites.net/getHourly`, {
        headers: {
          Authorization: "Bearer " + tk,
        },
      })
      .then((res) => {
        if (this._isMounted) {
          const personas = res.data.data;
          this.setState({ personas });
          var xc = this;
          var lb = [];
          var ct = [];

          var prg = [];
          var exp = [];
          var fla = [];
          var mis = [];

          var eventsAll = [];

          res.data.details.forEach(function (entry) {
            var labl = "";
            var cn = 0;
            var ship = "";

            labl = entry.shipping_date;
            // labl = labl.substr(10, 6);
            labl = labl.substr(6, 6);
            ship = entry.shipping_descr.replace("Kip - ", "");
            var order_ship = {};

            var tod = new Date();
            var day = tod.getDate();
            var month = tod.getMonth();
            var year = tod.getFullYear();
            var hrs = labl.substring(0, 2);
            // console.warn(labl);
            hrs = parseInt(hrs);
            var endhrs = hrs + 2;
            var bg = "";

            // console.log(order_ship);

            // lb.push(labl+"("+entry.cnt+") "+ship);
            lb.push(labl);
            // lb.push(entry.cnt);

            if (entry.shipping_descr.includes("Programado")) {
              bg = "#48D597";
              //   prg.push(entry.cnt);
              //   exp.push(0);
              //   fla.push(0);
              //   mis.push(0);
            }
            if (entry.shipping_descr.includes("Express")) {
              bg = "#7761F6";
              //   prg.push(0);
              //   exp.push(entry.cnt);
              //   fla.push(0);
              //   mis.push(0);
            }
            if (entry.shipping_descr.includes("Flash")) {
              bg = "#EF3340";
              //   prg.push(0);
              //   exp.push(0);
              //   fla.push(entry.cnt);
              //   mis.push(0);
            }
            if (entry.shipping_descr.includes("Mismo")) {
              bg = "#1F9EEB";
              //   prg.push(0);
              //   exp.push(0);
              //   fla.push(0);
              //   mis.push(entry.cnt);
            }

            /*
            "cnt": 1,
			      "shipping_date": "2022-06-27 12:56:23",
			      "shipping_descr": "Kip - Agregar a pedido"
            */
            order_ship = {
              title: entry.os_op + "-" + ship,
              bgColor: bg,
              start: new Date(year, month, day, hrs),
              end: new Date(year, month, day, endhrs),
              desc: entry.os_op,
            };
            eventsAll.push(order_ship);
          });
          this.setState({ lbls: lb });

          this.setState({ programado: prg });
          this.setState({ express: exp });
          this.setState({ flash: fla });
          this.setState({ mismo: mis });
          this.setState({ ordersList: eventsAll });

          console.log(prg);
          console.log(exp);
          console.log(fla);
          console.log(mis);
          console.log(lb);
          console.log(eventsAll);

          //   const myEventsList = [{
          //     'title': 'Programado (3)',
          //     'bgColor': '#ff7f50',
          //     'start':new Date(2022,6,16,14),
          //     'end': new Date(2022,6,16,15),
          //     'desc': 'Pre-meeting meeting, to prepare for the meeting'
          //   },
          //   {
          //     'title': 'Flash (3)',
          //     'bgColor': '#db9a00',
          //     'start':new Date(2022,6,16,14),
          //     'end': new Date(2022,6,16,15),
          //     'desc': 'Pre-meeting meeting, to prepare for the meeting'
          //   },
          //   {
          //     'title': 'Express (30)',
          //     'bgColor': '#000',
          //     'start':new Date(2022,6,16,14),
          //     'end': new Date(2022,6,16,15),
          //     'desc': 'Pre-meeting meeting, to prepare for the meeting'
          //   },
          //   {
          //     'title': 'Mismo día (30)',
          //     'bgColor': '#000',
          //     'start':new Date(2022,6,16,14),
          //     'end': new Date(2022,6,16,15),
          //     'desc': 'Pre-meeting meeting, to prepare for the meeting'
          //   },
          //   {
          //     'title': 'Agregar a pedido (30)',
          //     'bgColor': '#000',
          //     'start':new Date(2022,6,16,14),
          //     'end': new Date(2022,6,16,15),
          //     'desc': 'Pre-meeting meeting, to prepare for the meeting'
          //   }
          // ]

          axios
            .get(`https://kip-logistic-api.azurewebsites.net/otifPanel`, {
              headers: {
                Authorization: "Bearer " + tk,
              },
            })
            .then((res) => {
              this.setState({ otif: res.data.otif });

              this.setState({ otifc: res.data.otif_c });
              // alert(res.data.otif);
            });
        }
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  state = {
    personas: [],
    grupos: [],
    st: "",
    lbls: [],
    programado: 0,
    express: 0,
    flash: 0,
    mismo: 0,
    otif: 0.0,
    otifc: 0.0,
    ordersList: [],
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
                <SalesRevenue ins={this} />
              </Paper>
            </Box>
          </Grid>

          <Grid item xl={4}>
            <Box>
              <Typography variant="h4">OTIF Hoy (Preview)</Typography>
              <Paper m={4}>
                <Earnings ins={this} />
                {/* <Products/> */}
                {/* OTIF (Hoy) */}
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

function Earnings({ ins }) {
  return (
    <Box position="relative">
      <Card mb={6} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">{ins.state.otif}%</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            OTIF
          </Typography>

          <StatsIcon>
            <BlurOn />
          </StatsIcon>
          {/* <LinearProgress
            variant="determinate"
            value={75}
            color="secondary"
            mt={4}
          /> */}
        </CardContent>
      </Card>

      <Card mb={6} pt={2}>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">{ins.state.otifc}%</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            OTIF con complementos
          </Typography>

          <StatsIcon>
            <Circle />
          </StatsIcon>
          {/* <LinearProgress
            variant="determinate"
            value={75}
            color="secondary"
            mt={4}
          /> */}
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

const SalesRevenue = withTheme(({ theme, ins }) => {
  BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
  const data = {
    labels: ins.state.lbls,
    datasets: [
      {
        label: "Programado",
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        hoverBackgroundColor: theme.palette.secondary.main,
        hoverBorderColor: theme.palette.secondary.main,
        data: ins.state.programado,
        barPercentage: 0.25,
        categoryPercentage: 0.25,
      },
      {
        label: "Express",
        backgroundColor: "#48D597",
        borderColor: theme.palette.grey[200],
        hoverBackgroundColor: theme.palette.grey[200],
        hoverBorderColor: theme.palette.grey[200],
        data: ins.state.express,
        barPercentage: 0.25,
        categoryPercentage: 0.25,
      },

      {
        label: "Flash",
        backgroundColor: "#EF3340",
        borderColor: "#EF3340",
        hoverBackgroundColor: theme.palette.grey[200],
        hoverBorderColor: theme.palette.grey[200],
        data: ins.state.flash,
        barPercentage: 0.25,
        categoryPercentage: 0.25,
      },

      {
        label: "Mismo dia",
        backgroundColor: "#1F9EEB",
        borderColor: theme.palette.grey[200],
        hoverBackgroundColor: theme.palette.grey[200],
        hoverBorderColor: theme.palette.grey[200],
        data: ins.state.mismo,
        barPercentage: 0.25,
        categoryPercentage: 0.25,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    cornerRadius: 2,
    legend: {
      display: true,
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
          },
          stacked: true,
          ticks: {
            stepSize: 1,
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
          <BlurOn aria-label="settings">
            <MoreVertical />
          </BlurOn>
        }
        title={"Distribución horaria de pedidos " + ins.state.st}
      />
      <CardContent>
        <BigCalendar
          events={ins.state.ordersList}
          step={30}
          timeslots={2}
          defaultView="day"
          onSelectEvent={event => alert(event.desc)}

          // views={['month','week', 'day', 'agenda']}
          // titleAccessor="Tis"
          // view={'week'}
        />
      </CardContent>

      {/* <CardContent>
        <ChartWrapper>
          <Bar data={data} options={options} />
        </ChartWrapper>
      </CardContent> */}
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
