import React from "react";

import async from "../components/Async";
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';

import SportsMotorsportsIcon from '@material-ui/icons/SportsMotorsports';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ArrowRightAltIcon from '@material-ui/icons/Build';
import BCIcon from '@material-ui/icons/BubbleChart';

import {
  BookOpen,
  Briefcase,
  Calendar as CalendarIcon,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  List,
  Map,
  Monitor,
  ShoppingCart,
  PieChart,
  Sliders,
  User,
  Users,
  Inbox
} from "react-feather";

// Auth components
const SignIn = async(() => import("../pages/auth/SignIn"));
const SignUp = async(() => import("../pages/auth/SignUp"));
const ResetPassword = async(() => import("../pages/auth/ResetPassword"));
const Page404 = async(() => import("../pages/auth/Page404"));
const Page500 = async(() => import("../pages/auth/Page500"));
const Login = async(() => import("../pages/auth/SignInSide"));
// const RegisterForm = async(() => import("../pages/auth/RegisterForm"));
// Components components
const Alerts = async(() => import("../pages/components/Alerts"));
const Avatars = async(() => import("../pages/components/Avatars"));
const Badges = async(() => import("../pages/components/Badges"));
const Buttons = async(() => import("../pages/components/Buttons"));
const Cards = async(() => import("../pages/components/Cards"));
const Chips = async(() => import("../pages/components/Chips"));
const Dialogs = async(() => import("../pages/components/Dialogs"));
const ExpPanels = async(() => import("../pages/components/ExpansionPanels"));
const Lists = async(() => import("../pages/components/Lists"));
const Menus = async(() => import("../pages/components/Menus"));
const Pagination = async(() => import("../pages/components/Pagination"));
const Progress = async(() => import("../pages/components/Progress"));
const Snackbars = async(() => import("../pages/components/Snackbars"));
const Tooltips = async(() => import("../pages/components/Tooltips"));

// Dashboards components
const Default = async(() => import("../pages/dashboards/Default"));
const Analytics = async(() => import("../pages/dashboards/Analytics"));

// Forms components
const Pickers = async(() => import("../pages/forms/Pickers"));
const SelectionCtrls = async(() => import("../pages/forms/SelectionControls"));
const Selects = async(() => import("../pages/forms/Selects"));
const TextFields = async(() => import("../pages/forms/TextFields"));
const Dropzone = async(() => import("../pages/forms/Dropzone"));
const Editors = async(() => import("../pages/forms/Editors"));

// Icons components
const MaterialIcons = async(() => import("../pages/icons/MaterialIcons"));
const FeatherIcons = async(() => import("../pages/icons/FeatherIcons"));

// Pages components
const Blank = async(() => import("../pages/pages/Blank"));
const InvoiceDetails = async(() => import("../pages/pages/InvoiceDetails"));
const InvoiceList = async(() => import("../pages/pages/InvoiceList"));
//const Orders = async(() => import("../pages/pages/Orders")); //ESTE COMPONENTE SIRVE PARA UNA LISTA
const Orders = async(() => import("../pages/pages/NewGroup"));
const Pricing = async(() => import("../pages/pages/Pricing"));
const Profile = async(() => import("../pages/pages/CajaADSA"));
const Settings = async(() => import("../pages/pages/Settings"));
const Tasks = async(() => import("../pages/pages/Tasks"));
const Projects = async(() => import("../pages/pages/ClientesADSA"));
const Solicitudes = async(() => import("../pages/pages/SolicitudesADSA"));
const Drivers = async(() => import("../pages/pages/Drivers"));
const Cars = async(() => import("../pages/pages/Cars"));
const Calendar = async(() => import("../pages/pages/groupDetails"));
const myCalendar = async(() => import("../pages/pages/mygroupDetails"));
const myCalenda = async(() => import("../pages/pages/mygroupDetail"));
const JoinToGroup = async(() => import("../pages/pages/joinToGroup"));
// const PayToJoin = async(() => import("../pages/pages/payToJoin"));
const userProfile = async(() => import("../pages/pages/userProfile"));
const userWallet = async(() => import("../pages/pages/userWallet"));
// const userNotifications = async(() => import("../pages/pages/userNotifications"));

// Tables components
const SimpleTable = async(() => import("../pages/tables/SimpleTable"));
const AdvancedTable = async(() => import("../pages/tables/AdvancedTable"));

// Chart components
const Chartjs = async(() => import("../pages/charts/Chartjs"));

// Maps components
const GoogleMaps = async(() => import("../pages/maps/GoogleMaps"));
const VectorMaps = async(() => import("../pages/maps/VectorMaps"));

// Documentation
const Docs = async(() => import("../pages/docs/Documentation"));
const Changelog = async(() => import("../pages/docs/Changelog"));
const Presentation = async(() => import("../pages/docs/Presentation"));

const dashboardsRoutes = {
  id: "Reportes",
  path: "/confs",
  header: "",
  icon: <ArrowRightAltIcon />,
  containsHome: true,
  children: [
    {
      path: "/adsa/pagos",
      name: "Reporte pagos",
      component: Drivers,
      icon:<SportsMotorsportsIcon/>
    },
    {
      path: "/adsa/corte",
      name: "Corte",
      component: Cars
    }
  ]
};

const pagesRoutes = {
  id: "Operaciones",
  path: "/",
  icon: <BCIcon />,
  children: [
    {
      path: "/",
      name: "Caja",
      component: Profile
    },
    {
      path: "/adsa/clientes",
      name: "Clientes",
      component: Projects
    },
    {
      path: "/adsa/solicitudes",
      name: "Solicitud de servicios",
      component: Solicitudes
    }
  ]
};

const authRoutes = {
  id: "Auth",
  path: "/",
  icon: <Users />,
  children: [
    {
      path: "login",
      name: "Login",
      component: Login
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500
    }
  ]
};

//rutas libres

export const dashboard = [    
  // profileRoutes,  
  dashboardsRoutes,
  pagesRoutes,  
];
//rutas con auth
export const auth = [authRoutes];

export default [
  pagesRoutes,
  // profileRoutes,    
  dashboardsRoutes,
];
