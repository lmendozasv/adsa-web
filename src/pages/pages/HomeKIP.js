import React from "react";
import styled, { withTheme } from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
// import { Calendar, momentLocalizer } from 'react-big-calendar'
// import react-big-calendar-like-google/lib/css/react-big-calendar.css
// import "./Timeline.css";
import Helmet from "react-helmet";
import axios from "axios";
// import Dayz from 'dayz';
// import 'styles.css';
import moment from "moment";
// import date from 'moment';
// import "../../vendor/roundedBarCharts";
// import { Bar } from "react-chartjs-2";
import { MoreVertical } from "react-feather";
import { red, green, blue } from "@material-ui/core/colors";
// import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
// import Timeline from "react-calendar-timeline";
// import BigCalendar from "react-big-calendar-like-google";
// import withDragAndDrop from 'react-big-calendar-like-google/lib/addons/dragAndDrop';

// import FullCalendar from '@fullcalendar/react'; // must go before plugins
// // import momentPlugin from '@fullcalendar/moment'
// import dayGridPlugin from '@fullcalendar/daygrid'
// // import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";
// import timeGridPlugin from "@fullcalendar/timegrid";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

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
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  Paper as MuiPaper,
  CardHeader,
  Typography,
} from "@material-ui/core";
import BlurOn from "@material-ui/icons/FiberManualRecord";
import { spacing } from "@material-ui/system";
import {
  Add as AddIcon,
  Archive as ArchiveIcon,
  FilterList as FilterListIcon,
  List as RemoveRedEyeIcon,
  NavigateNext as ArrowForwardIosIcon,
  Close as IconClose,
  SportsMotorsports as IconMoped,
  Search as SearchIcon,
  CancelRounded as CancelRoundedIcon,
  FilterAlt as FilterAltIcon,
} from "@material-ui/icons";
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

// const DragAndDropCalendar = withDragAndDrop(BigCalendar);

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


    this._isMounted = true;
    var ins = this;
    this.updateCalendarViewTask();

    setInterval(function () {
      ins.updateCalendarViewTask();
    }, 10000);


  }
  updateCalendarViewTask(){
    console.log("UPDATING");
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
          // COLORES DE BODEGA
          // GRIS = RECIBIDO
          // CELESTE = PICKEADO
          // VERDE MUSGO = COMPLETO, FACTURADO
          // AMARILLO = EN CAJA 
          // NARANJA = EN RUTA
          // VERDE = ENTREGADO
          // MORADO = ENTREGADO TARDE
          if (entry.os_status.includes("new")||entry.os_status.includes("processing")||entry.os_status.includes("READY")) { // RECIBIDO
            bg = "#999999";
          }
          if (entry.os_status.includes("PICKED")||entry.os_status.includes("PICKEADO")) { // pickeado
            bg = "#1F9EEB";
          }
          if (entry.os_status.includes("CLOSED")||entry.os_status.includes("FACTURADO")) { // facturado
            bg = "#2f4538";
          }
          if (entry.os_status.includes("COLLECTED")||entry.os_status.includes("A FACTURAR")) { // EN CAJA
            bg = "#F1C40F";
          }
          if (entry.os_status.includes("on-the-way")) { // EN RUTA
            bg = "#D35400";
          }
          if (entry.os_status.includes("complete")) { // DELIVERED 
            bg = "#58D68D";
          }

          /*
          "cnt": 1,
          "shipping_date": "2022-06-27 12:56:23",
          "shipping_descr": "Kip - Agregar a pedido"
          */
          order_ship = {
            title: entry.customer + "-" + entry.os_op + "-" + entry.os_status,
            backgroundColor: bg,
            start: new Date(year, month, day, hrs),
            end: new Date(year, month, day, endhrs),
            // desc: entry.customer,
            customer:entry.customer,
            allData:entry,
            durationEditable:false,
            // overlap:false,
            borderColor:bg
          };
          eventsAll.push(order_ship);
        });
        this.setState({ lbls: lb });

        this.setState({ programado: prg });
        this.setState({ express: exp });
        this.setState({ flash: fla });
        this.setState({ mismo: mis });

        this.setState({ ordersList: [] });
        this.setState({ ordersList: eventsAll });

        // console.log(prg);
        // console.log(exp);
        // console.log(fla);
        // console.log(mis);
        // console.log(lb);
        // console.log(eventsAll);

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

    customerSelected: "",
    idSelected: 0,
    deliveryTypeSelected: "",
    deliveryDateSelected: "",
    isDetailOpen:false,
    opSelected:"",


  };
  addHours(numOfHours, date = new Date()) {
    date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);  
    return date;
  }
  handleChangeDeliveryTime(s) {
    var nHours = this.addHours(6,s.event.start);
    console.log(nHours.getHours());
    // alert(nHours.getHours());
    var nTime = String(nHours.getHours()).padStart(2, '0') + ":" + String(s.event.start.getMinutes()).padStart(2, '0')+":00";
    var nDateM = s.event.start.getMonth()+1;
    var nDateD = s.event.start.getDate();
    var nDateY = s.event.start.getYear()+1900;    
    var aDT = nDateY+"-"+String(nDateM).padStart(2, '0')+"-"+String(nDateD).padStart(2, '0') + " " + nTime ;
    console.log(aDT);    
    //update db
    var tk = localStorage.getItem("token_sec");
    axios
        .post(
          "https://kip-logistic-api.azurewebsites.net/updateDeliveryDateTime",
          {
            i: s.event._def.extendedProps.allData.id,
            n: aDT,
          },
          {
            headers: {
              Authorization: "Bearer " + tk,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (res) {
          console.log("Fin");
        })
        .catch(function (error) {
          console.log(error);          
        });
  }
  handleClick(e){    
    this.setState({ isDetailOpen: true });
    var ae = e.event.title.split("-");
    this.setState({ customerSelected: ae[0] });
    this.setState({ opSelected: ae[1] });
    this.setState({ deliveryTypeSelected: e.event._def.extendedProps.allData.shipping_descr});    
    this.setState({ deliveryDateSelected: e.event._def.extendedProps.allData.shipping_date});
  }
  
  render() {
    return (
      <React.Fragment>
        <Helmet title="Bienvenido" />
        <SalesRevenue ins={this} />
        {/* <Typography variant="h4">Bienvenido</Typography>
        <Spacer m={5} /> */}
        <Grid container mt={0}>
          {/* <Grid item xs={12} lg={6} xl={12}>
            <Box>
              <Paper m={4}>
                
              </Paper>
            </Box>
          </Grid> */}

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

function SalesRevenue({ ins }) {
  return (
    // <FullCalendar
    //     plugins={[ dayGridPlugin ]}
    //     initialView="dayGridDay"
    //     // events={ins.state.ordersList}
    //     weekends={false}
    //   />




    <Card mb={1}>


      <Dialog open={ins.state.isDetailOpen}>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>{ins.state.customerSelected} - {ins.state.opSelected}</Box>
            <Box>
              <IconButton
              onClick={o=>ins.setState({ isDetailOpen: false })}              
              >
                <IconClose />
              </IconButton>
            </Box>
          </Box>
          <Divider my={0} />
        </DialogTitle>

        <DialogContent>
          <Grid justify="space-between" container spacing={1}>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <Typography variant="caption" gutterBottom display="inline">
                Tipo de envío:
              </Typography>
            </Grid>

            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <Typography variant="button" gutterBottom display="inline">
                {ins.state.deliveryTypeSelected}
              </Typography>
            </Grid>

            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <Typography variant="caption" gutterBottom display="inline">
                Fecha envío:
              </Typography>
            </Grid>

            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <Typography variant="button" gutterBottom display="inline">
                {ins.state.deliveryDateSelected}
              </Typography>
            </Grid>

            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
              <Typography variant="caption" gutterBottom display="inline">
                Cliente:
              </Typography>
            </Grid>

            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <Typography variant="button" gutterBottom display="inline">
                {ins.state.customerSelected}
              </Typography>
            </Grid>

            {/* <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              Tipo empaque:
            </Typography>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Typography variant="button" gutterBottom display="inline">
              -
            </Typography>
          </Grid> */}
          </Grid>

          <br />
{/* 
          <Button fullWidth variant="outlined" color="primary">
            Ok
          </Button> */}
          <br />
          <br />
        </DialogContent>
      </Dialog>

      <CardHeader
        // action={
        //   // <BlurOn aria-label="settings">
        //   //   <MoreVertical />
        //   // </BlurOn>
        // }
        title={"Calendario de operaciones" + ins.state.st}
      />
      <CardContent>
        {/* <DragAndDropCalendar */}
        {/* <BigCalendar
        selectable
          events={ins.state.ordersList}
          step={30}
          timeslots={2}
          defaultView="day"
          onSelectEvent={event => alert(event.desc)}
          onEventDrop={event => alert(event.desc)}
          // views={['month','week', 'day', 'agenda']}
          // titleAccessor="Tis"
          // view={'week'}
        /> */}
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          defaultView="timeGridDay"
          header={{
            // left: "prev,next",
            left:"title",
            // center: "title",
            right: "timeGridDay,listDay"
          }}
          droppable={true}
          initialView="dayGridMonth"
          weekends={true}
          events={ins.state.ordersList}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          eventDrop={event => ins.handleChangeDeliveryTime(event)}
          eventClick={eventClickInfo=>ins.handleClick(eventClickInfo)}
        />
      </CardContent>

      {/* <CardContent>
        <ChartWrapper>
          <Bar data={data} options={options} />
        </ChartWrapper>
      </CardContent> */}
    </Card>
  );
};


export default ServicesList;
