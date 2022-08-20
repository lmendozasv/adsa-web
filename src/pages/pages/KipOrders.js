import React, { useEffect } from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import axios from "axios";
import SearchBar from "material-ui-search-bar";
import Helmet from "react-helmet";
import InputAdornment from "@material-ui/core/InputAdornment";
import ReactToPrint from 'react-to-print';

import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Checkbox,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid,
  IconButton,
  Link,
  Paper as MuiPaper,
  MenuItem,
  Table,
  TableBody,
  TextField as MuiTextField,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

import { green, orange, red } from "@material-ui/core/colors";

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
  AssignmentTurnedIn as FactCheckIcon
} from "@material-ui/icons";

import { spacing } from "@material-ui/system";
import { withStyles } from "@material-ui/core/styles";
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const Divider = styled(MuiDivider)(spacing);
const TextFieldSpacing = styled(MuiTextField)(spacing);

const TextField = styled(TextFieldSpacing)`
  //   width: ;
`;
const style = (theme) => ({
  root: {
    height: "100vh",
  },
  image_register: {
    //
    backgroundImage:
      "url(https://firebasestorage.googleapis.com/v0/b/KIP-c38e0.appspot.com/o/ic_register_alt_2.png?alt=media&token=36856896-803f-4eb8-a236-2fd4888a542c)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  image: {
    backgroundImage:
      "url(https://firebasestorage.googleapis.com/v0/b/kip-sv-qa.appspot.com/o/backdash.png?alt=media&token=ddf36e11-8fd7-46ef-840f-f0b6f9ca0767)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FFF",
    display: "compact",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const Chip = styled(MuiChip)`
  ${spacing};
  // 0 Pedidos | 2 Nuevos | 0 Checklist (Invalid) | 0 Pickeando | 0 En Caja(Invalid) | 5 Facturado | 4 Asignado| 6 Entregado | 1 Cancelado | 1 Espera (Invalid)
  background: ${(props) => props.totalPedidos && "#B6EED5"};
  background: ${(props) => props.Nuevos && "#172449"};
  background: ${(props) => props.Checklist && "#C68F3C"};
  background: ${(props) => props.Pickeado && "#7761F6"};
  background: ${(props) => props.EnCaja && "#FFE100"};
  background: ${(props) => props.Facturado && "#1F9EEB"};
  background: ${(props) => props.Asignado && "#E4DFFD"};
  background: ${(props) => props.EnCamino && "#F9A000"};
  background: ${(props) => props.Entregado && "#EF3340"};
  background: ${(props) => props.Cancelado && "#ECECEC"};
  background: ${(props) => props.Espera && "#ECECEC"};
  color: ${(props) => props.theme.palette.common.black};
`;

const InfoChip = styled(MuiChip)`
  ${spacing};

  background: ${(props) => props.info && "#fff"};
  background: ${(props) => props.shipped && "#172449"};
  background: ${(props) => props.processing && orange[700]};
  background: ${(props) => props.cancelled && red[500]};
  color: ${(props) => props.theme.palette.common.black};
`;

const Spacer = styled.div`
  flex: 1 1 100%;
`;

const ToolbarTitle = styled.div`
  min-width: 150px;
`;
var rpt = "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.0 Transitional//EN'> <html> <head> <meta http-equiv='content-type' content='text/html; charset=iso-8859-1'/> <title></title> <meta name='generator' content='https://conversiontools.io' /> <meta name='author' content='Jose Escobar'/> <meta name='created' content='2022-03-17T12:51:11'/> <meta name='changedby' content='Luis Mendoza'/> <meta name='changed' content='2022-07-29T23:10:00'/> <meta name='AppVersion' content='16.0300'/> <meta name='ContentTypeId' content='0x010100599EB5C541CFC44F8102F36FD5798F89'/> <meta name='DocSecurity' content='0'/> <meta name='HyperlinksChanged' content='false'/> <meta name='LinksUpToDate' content='false'/> <meta name='ScaleCrop' content='false'/> <meta name='ShareDoc' content='false'/> <style type='text/css'> body,div,table,thead,tbody,tfoot,tr,th,td,p { font-family:'Calibri'; font-size:x-small } a.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em; } a.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em; } comment { display:none; } @media print{body{width: 90%;}}</style> </head> <body> <table cellspacing='0' border='0'> <colgroup span='11' width='68'></colgroup> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=11 height='14' align='center' valign=middle bgcolor='#595959'><b><font color='#FFFFFF'>COORD. LOGISTICA</font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle bgcolor='#D9D9D9'><b><font size=2 color='#000000'>#OP DE LS:</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 align='center' valign=middle bgcolor='#FFFFFF'><font color='#000000'>[VAROPLS]</font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 align='right' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>FECHA Y HORA ENVIO:</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=4 align='left' valign=middle bgcolor='#FFFFFF'><b><font color='#000000'>F: [VARDIA] H: [VARHORA] ( )</font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle bgcolor='#D9D9D9'><b><font size=2 color='#000000'>CLIENTE:</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 align='center' valign=middle bgcolor='#FFFFFF'><font color='#000000'>[VARCLIENTE]</font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='right' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>CAPTURED AMOUNT Y <br>TRANSACION ID<br>(en comentario pedido)</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' rowspan=2 align='left' valign=middle bgcolor='#FFFFFF'><b><font size=3 color='#000000'>$[VARCAPTUREDAMOUNT]</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 rowspan=2 align='center' valign=middle bgcolor='#FFFFFF'><font size=4 color='#000000'>[VARIDFAC]</font></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle bgcolor='#D9D9D9'><b><font size=2 color='#000000'>CONTROL PEDIDOS:</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 align='center' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>VERIFICAR DIRECCIÓN:</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 align='center' valign=middle bgcolor='#FFFFFF'><b><font color='#000000'>SI / NO</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 align='right' valign=middle bgcolor='#D9D9D9'><b><font size=3 color='#000000'>TIPO FACTURA:</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=4 align='center' valign=middle bgcolor='#FFFFFF'><b><font color='#000000'>TK / FCF / CCF / FCF-E</font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=11 rowspan=2 height='25' align='left' valign=top bgcolor='#FFFFFF'><b><font color='#000000'>Nota de pedido: [VARNOTAPEDIDO]</font></b></td> </tr> <tr> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 height='42' align='left' valign=middle bgcolor='#FFFFFF'><b><font color='#000000'>BOLSA ([VARBO])<br>JABA ([VARJA])</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='left' valign=middle bgcolor='#FFFFFF'><b><font color='#000000'>CON NOTA ([VARCN])<br>SIN NOTA ([VARSN])</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 rowspan=2 align='center' valign=middle bgcolor='#FFFFFF'><b><font size=4 color='#000000'>[VARTIPOENVIO]</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='left' valign=bottom bgcolor='#FFFFFF'><b><font size=4 color='#000000'>$ [VARMONTOPEDIDO]</font></b></td> </tr> <tr> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=11 height='14' align='center' valign=middle bgcolor='#595959'><b><font color='#FFFFFF'>PICKERS</font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' height='21' align='left' valign=middle bgcolor='#D9D9D9'><b><font size=1 color='#000000'>PICKER 1:</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=4 align='center' valign=middle><font color='#000000'><br></font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle bgcolor='#D9D9D9'><b><font size=1 color='#000000'>PICKER 2:</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 align='center' valign=middle><font color='#000000'><br></font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='center' valign=middle bgcolor='#D9D9D9'><b><font size=1 color='#000000'>CANT. ITEMS:</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><font color='#000000'><br></font></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='32' align='center' valign=middle bgcolor='#D9D9D9'><b><font size=3 color='#000000'>CÓDIGO LS</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>DESCRIPCIÓN PRODUCTO</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='center' valign=middle bgcolor='#D9D9D9'><b><font size=1 color='#000000'>CANT.<br>PEDIDO</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='center' valign=middle bgcolor='#D9D9D9'><b><font size=1 color='#000000'>CANT.<br>FALTA</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='center' valign=middle bgcolor='#D9D9D9'><b><font size=1 color='#000000'>VINO<br>EN BP?</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='center' valign=middle bgcolor='#D9D9D9'><b><font size=1 color='#000000'>ERROR<br>INVENTARIO</font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 height='21' align='right' valign=middle><b><font size=3 color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=5 align='center' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 height='20' align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>ESTADO DE PEDIDO</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>REVISO FECHA VENCIMIENTO?</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>PRODUCTOS LIMPIOS</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>REVISO NOTA PEDIDO</font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 rowspan=2 height='38' align='center' valign=middle><b><font color='#000000'>COMPLETO / INCOMPLETO</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 rowspan=2 align='center' valign=middle><b><font color='#000000'>SI / NO</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='center' valign=middle><b><font color='#000000'>SI / NO</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 rowspan=2 align='center' valign=middle><b><font color='#000000'>SI / NO</font></b></td> </tr> <tr> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=11 height='14' align='center' valign=middle bgcolor='#595959'><b><font color='#FFFFFF'>FACTURADOR</font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000' colspan=3 rowspan=2 height='40' align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>NOMBRE FACTURADOR</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>COBRO VIA</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>MONTO<br>FACTURADO</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=4 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>CANTIDAD DE JABAS</font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>ESTANTES</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>CUARTO 1</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>CUARTO 2</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' align='left' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>CUARTO 3</font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000' colspan=3 rowspan=3 height='60' align='left' valign=middle><font color='#000000'><br></font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 align='left' valign=middle><font color='#000000'>( ) FAC</font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=3 align='left' valign=middle><b><font size=5 color='#000000'>$</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' rowspan=3 align='center' valign=middle><font color='#000000'><br></font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' rowspan=3 align='center' valign=middle><font color='#000000'><br></font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' rowspan=3 align='center' valign=middle><font color='#000000'><br></font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' rowspan=3 align='center' valign=middle><font color='#000000'><br></font></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 align='left' valign=middle><font color='#000000'>( ) LINK DE PAGO</font></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 align='left' valign=middle><font color='#000000'>( ) EFECTIVO</font></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=11 height='14' align='center' valign=middle bgcolor='#595959'><b><font color='#FFFFFF'>CONTROL SALIDA</font></b></td> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 rowspan=2 height='39' align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>NOMBRE CONTROL DE SALIDA</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>MONTO FINAL<br>COBRADO</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'># DE REFERENCIA <br>FAC</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'># DE TRANSACCION<br>LINK DE PAGO</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='center' valign=middle bgcolor='#D9D9D9'><b><font color='#000000'>PAGO EN EFECTIVO<br>QUIEN AUTORIZA</font></b></td> </tr> <tr> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=3 rowspan=2 height='38' align='center' valign=middle><font color='#000000'><br></font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='left' valign=middle><b><font size=4 color='#000000'>$</font></b></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='left' valign=middle><font color='#000000'><br></font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='center' valign=bottom><font size=1 color='#000000'>(PEDIR A CONSERJES)</font></td> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=2 rowspan=2 align='center' valign=middle><b><font color='#000000'><br></font></b></td> </tr> <tr> </tr> <tr> <td style='border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=11 height='14' align='center' valign=middle bgcolor='#595959'><b><font color='#FFFFFF'>SELLOS</font></b></td> </tr> <tr> <td style='border-left: 1px solid #000000' height='20' align='left' valign=top><b><font color='#000000'><br></font></b></td> <td align='left' valign=top><b><font color='#000000'><br></font></b></td> <td align='left' valign=top><b><font color='#000000'><br></font></b></td> <td style='border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=4 rowspan=5 align='center' valign=bottom><b><font size=1 color='#000000'>SELLO DE CLIENTE NUEVO, KIPPER PLUS O KIPPER VIP</font></b></td> <td style='border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000' colspan=4 rowspan=5 align='center' valign=bottom><b><font size=1 color='#000000'>SELLO DE HORA DE ENTREGA, FLASH O EXPRESS</font></b></td> </tr> <tr> <td style='border-left: 1px solid #000000' height='20' align='left' valign=top><b><font color='#000000'><br></font></b></td> <td align='left' valign=top><b><font color='#000000'><br></font></b></td> <td align='left' valign=top><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-left: 1px solid #000000' height='20' align='left' valign=top><b><font color='#000000'><br></font></b></td> <td align='left' valign=top><b><font color='#000000'><br></font></b></td> <td align='left' valign=top><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-left: 1px solid #000000' height='20' align='left' valign=top><b><font color='#000000'><br></font></b></td> <td align='left' valign=top><b><font color='#000000'><br></font></b></td> <td align='left' valign=top><b><font color='#000000'><br></font></b></td> </tr> <tr> <td style='border-bottom: 1px solid #000000; border-left: 1px solid #000000' height='20' align='left' valign=top><b><font color='#000000'><br></font></b></td> <td style='border-bottom: 1px solid #000000' align='left' valign=top><b><font color='#000000'><br></font></b></td> <td style='border-bottom: 1px solid #000000' align='left' valign=top><b><font color='#000000'><br></font></b></td> </tr> </table> </body> </html>";


function createData(
  idLS,
  dt_pedido,
  dt_envio,
  nombre_cliente,
  status,
  monto,
  cupon,
  idMagento,
  dir,
  tel,
  ltlng,
  ubicacion,
  empaque,
  nota,
  trx,
  monto_capturado,
  glocation,
  driver_id,
  otif_status,
  payment_method,
  payment_ref,
  order_id,
  os_shipping_description
) {
  // console.log(idLS);
  return {
    idLS,
    dt_pedido,
    dt_envio,
    nombre_cliente,
    status,
    monto,
    cupon,
    idMagento,
    dir,
    tel,
    ltlng,
    ubicacion,
    empaque,
    nota,
    trx,
    monto_capturado,
    glocation,
    driver_id,
    otif_status,
    payment_method,
    payment_ref,
    order_id,
    os_shipping_description
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: "idLS", alignment: "left", label: "OP en LS" },
  { id: "dt_pedido", alignment: "left", label: "Fecha pedido" },
  { id: "dt_envio", alignment: "left", label: "Fecha envío" },
  { id: "nombre_cliente", alignment: "left", label: "Cliente" },
  { id: "status", alignment: "left", label: "Estado" },
  { id: "amount", alignment: "right", label: "Monto" },
  { id: "coupon_code", alignment: "right", label: "Cupón" },
  { id: "actions", alignment: "right", label: "Acciones" },
];




function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all" }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignment}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

let EnhancedTableToolbar = (props) => {
  const { numSelected, ins } = props;

  return (
    <Toolbar style={{ "min-height": 50, height: 50 }}>
      <ToolbarTitle>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} seleccionados
          </Typography>
        ) : (
          <Typography variant="caption" id="tableTitle">
            Órdenes
          </Typography>
        )}
      </ToolbarTitle>
      <Spacer />
      <div>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <ArchiveIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filtros">
            <IconButton
              onClick={(event) => ins.applyFilter(event, "modal")}
              aria-label="Filtros"
            >
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

function EnhancedTable({ dataRows, ins }) {
  // setTimeout(function() { alert("k"); }, 5000);
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("customer");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  console.log(">>>>======" + dataRows.length);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      // const newSelecteds = rows.map((n) => n.id);
      const newSelecteds = dataRows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  var emptyRows =
    rowsPerPage - Math.min(rowsPerPage, dataRows.length - page * rowsPerPage);
  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div>
      <Paper>
        {ins.state.openDetail ? <DetailsModal ins={ins} /> : ""}
        {ins.state.openDetailToSend ? <DetailsModalToSend ins={ins} /> : ""}
        {ins.state.openFilters ? <FilterRows ins={ins} /> : ""}
        {ins.state.openDetailToPrint ? <PrintCheckPage ins={ins} /> : ""}
        <EnhancedTableToolbar numSelected={selected.length} ins={ins} />
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              // rowCount={rows.length}
              rowCount={dataRows.length}
            />
            <TableBody>
              {/* {stableSort(rows, getComparator(order, orderBy)) */}
              {stableSort(dataRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={`${row.id}-${index}`}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                          onClick={(event) => handleClick(event, row.id)}
                        />
                      </TableCell>

                      <TableCell align="left">#{row.idLS}</TableCell>
                      <TableCell align="left">{row.dt_pedido}</TableCell>
                      <TableCell align="left">{row.dt_envio}</TableCell>
                      <TableCell align="left">{row.nombre_cliente}</TableCell>
                      <TableCell>
                        {
                          (row.status === "new"||row.status === "READY") && (
                            <Chip
                              size="small"
                              mr={1}
                              mb={1}
                              label="Nuevo"
                              Nuevos
                            />
                          )
                        }

                        {row.status === "checklist" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Checklist"
                            Checklist
                          />
                        )}
                        {row.status === "PICKEADO" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Pickeado"
                            Pickeado
                          />
                        )}
                        {row.status === "A FACTURAR" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="En caja"
                            EnCaja
                          />
                        )}
                        {row.status === "FACTURADO" ||
                          (row.status === "CLOSED" && (
                            <Chip
                              size="small"
                              mr={1}
                              mb={1}
                              label="Facturado"
                              Facturado
                            />
                          ))}
                        {row.status === "driver-assigned" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Asignado"
                            Asignado
                          />
                        )}
                        {row.status === "on-the-way" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="En camino"
                            EnCamino
                          />
                        )}
                        {row.status === "delivered" ||
                          (row.status === "complete" && (
                            <Chip
                              size="small"
                              mr={1}
                              mb={1}
                              label="Entregado"
                              Entregado
                            />
                          ))}
                        {row.status === "cancelled" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Cancelado"
                            Cancelado
                          />
                        )}
                        {row.status === "holded" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="En espera"
                            Espera
                          />
                        )}
                      </TableCell>
                      <TableCell align="right">$ {row.monto}</TableCell>
                      <TableCell align="right">{row.cupon}</TableCell>

                      <TableCell padding="none" align="right">
                        <Box mr={2}>
                          <IconButton
                            onClick={ins.handleChange("dialog-" + row.idLS)}
                            aria-label="details"
                          >
                            <RemoveRedEyeIcon />
                          </IconButton>
                          {row.status==="CLOSED"?
                          <IconButton
                          onClick={ins.handleChange("dialots-" + row.idLS)}
                          aria-label="delete"
                        >
                          <ArrowForwardIosIcon />
                        </IconButton>
                          :""}
                          

                          {row.status==="new"||row.status==="READY"?
                          <IconButton
                            onClick={ins.handleChange("dialoxs-" + row.idLS)}
                            aria-label="checklist"
                          >
                            <FactCheckIcon />
                          </IconButton>
                           :""}


                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          // count={rows.length}
          count={dataRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
function PrintCheckPage({ ins }) {
  return (
    <Dialog open={ins.state.openDetailToPrint}>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>Hoja de checking</Box>
          <Box>
            <IconButton onClick={ins.handleChange("closet-checkpage")}>
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
              -
            </Typography>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              Fecha envío:
            </Typography>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Typography variant="button" gutterBottom display="inline">
              -
            </Typography>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              Estado pago:
            </Typography>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Typography variant="button" gutterBottom display="inline">
              -
            </Typography>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              Tipo empaque:
            </Typography>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Typography variant="button" gutterBottom display="inline">
              -
            </Typography>
          </Grid>
        </Grid>

        <br />

        <Button fullWidth variant="outlined" color="primary">
          IMPRIMIR
        </Button>
        <br />
        <br />
      </DialogContent>
    </Dialog>
  );
}
function FilterRows({ ins }) {
  return (
    <Dialog open={ins.state.openFilters}>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>Filtros</Box>
          <Box>
            <IconButton onClick={ins.handleChange("close-filters")}>
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
              -
            </Typography>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              Fecha envío:
            </Typography>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Typography variant="button" gutterBottom display="inline">
              -
            </Typography>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              Estado pago:
            </Typography>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Typography variant="button" gutterBottom display="inline">
              -
            </Typography>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              Tipo empaque:
            </Typography>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Typography variant="button" gutterBottom display="inline">
              -
            </Typography>
          </Grid>
        </Grid>

        <br />

        <Button fullWidth variant="outlined" color="primary">
          APLICAR
        </Button>
        <br />
        <br />
      </DialogContent>
    </Dialog>
  );
}
function DetailsModalToSend({ ins }) {
  return (
    <Dialog open={ins.state.openDetailToSend}>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            {ins.state.detailViewing.idLS}-{ins.state.detailViewing.idMagento}
          </Box>
          <Box>
            <IconButton onClick={ins.handleChange("closets")}>
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
              Cliente:
            </Typography>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Typography variant="button" gutterBottom display="inline">
              {ins.state.detailViewing.nombre_cliente}
            </Typography>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              F. Envío:
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Typography variant="button" gutterBottom display="inline">
              {ins.state.detailViewing.dt_envio}
            </Typography>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              Pago:
            </Typography>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            {/* <Typography variant="button" gutterBottom display="inline"> */}
            {ins.state.detailViewing.trx.length > 0 ? (
              <div>
                {ins.state.detailViewing.trx} - ${" "}
                {ins.state.detailViewing.monto_capturado} (FAC)
              </div>
            ) : (
              <Grid justify="space-between" container spacing={1}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    id="outlined-select-currency0"
                    select
                    size="small"
                    label="Método de pago"
                    fullWidth
                    value={ins.state.paymentMethodSelected}
                    onChange={ins.handleChange("paymentMethodSelected")}
                    variant="outlined"
                  >
                    {ins.state.paymentMethods.map((tile) => (
                      <MenuItem key={tile.id} value={tile.id}>
                        {tile.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {ins.state.askref ? (
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                      id="outlined-select-currency0g"
                      size="small"
                      label="Referencia de pago"
                      my={2}
                      fullWidth
                      value={ins.state.paymentMethodRef}
                      onChange={ins.handleChange("paymentMethodRef")}
                      variant="outlined"
                    ></TextField>
                  </Grid>
                ) : (
                  ""
                )}
              </Grid>
            )}

            {/* </Typography> */}
          </Grid>

          {/* https://www.waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&zoom=17 */}
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              Driver asignado:
            </Typography>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Spacer m={2} />
              <TextField
                id="outlined-select-currency0"
                select
                label=""
                size="small"
                fullWidth
                value={ins.state.orderSelectedDriver}
                onChange={ins.handleChange("orderSelectedDriver")}
                variant="outlined"
              >
                {ins.state.drivers.map((tile) => (
                  <MenuItem key={tile.id} value={tile.id}>
                    {tile.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <Typography variant="caption" gutterBottom display="inline">
              OTIF:
            </Typography>
          </Grid>

          <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
            <TextField
              id="outlined-select-currency0"
              select
              label=""
              size="small"
              fullWidth
              value={ins.state.otifStatus}
              onChange={ins.handleChange("otifStatus")}
              variant="outlined"
            >
              {ins.state.otifStatuses.map((tile) => (
                <MenuItem key={tile.id} value={tile.id}>
                  {tile.name}
                </MenuItem>
              ))}
            </TextField>
            {ins.state.asksubs ? (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  id="outlined-select-currency0g"
                  size="small"
                  label="Cantidad de sustitutos (SKU)"
                  my={2}
                  fullWidth
                  value={ins.state.otifsubsv}
                  onChange={ins.handleChange("otifsubsv")}
                  variant="outlined"
                ></TextField>
              </Grid>
            ) : (
              ""
            )}
          </Grid>

          <Divider my={6} />
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="caption" gutterBottom display="inline">
              Entregas con misma fecha (
              {ins.state.detailViewing.dt_envio.substring(0, 5)}) para el driver
              seleccionado :
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {ins.state.cargaDriver.map((tile) => (
              <MenuItem key={tile.id} value={tile.id}>
                {tile.name + " - " + tile.id}
              </MenuItem>
            ))}
          </Grid>

          {/* 000015911-1649984605 */}
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button
              onClick={ins.handleChange("assignToDriver")}
              fullWidth
              variant="contained"
              color="primary"
            >
              <IconMoped />
              ASIGNAR A DRIVER
            </Button>
          </Grid>
          <Divider my={6} />
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

function DetailsModal({ ins }) {
  return (
    <Dialog open={ins.state.openDetail}>
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <Box flexGrow={1}>
            {ins.state.detailViewing.idLS}-{ins.state.detailViewing.idMagento}
          </Box>
          <Box>
            <IconButton onClick={ins.handleChange("close")}>
              <IconClose />
            </IconButton>
          </Box>
        </Box>
        <Divider my={0} />
      </DialogTitle>
      <DialogContent>
        <Grid justify="space-between" container spacing={1}>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography variant="caption" gutterBottom display="inline">
              Cliente:
            </Typography>
          </Grid>

          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Typography variant="button" gutterBottom display="inline">
              {ins.state.detailViewing.nombre_cliente}
            </Typography>
          </Grid>

          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography variant="caption" gutterBottom display="inline">
              Ubicación:
            </Typography>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Typography variant="button" gutterBottom display="inline">
              {ins.state.detailViewing.ubicacion}
            </Typography>
          </Grid>

          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography variant="caption" gutterBottom display="inline">
              Teléfono:
            </Typography>
          </Grid>
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Typography variant="button" gutterBottom display="inline">
              {ins.state.detailViewing.tel}
            </Typography>
          </Grid>

          {/* https://www.waze.com/ul?ll=40.75889500%2C-73.98513100&navigate=yes&zoom=17 */}
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography variant="caption" gutterBottom display="inline">
              Coordenadas:
            </Typography>
          </Grid>

          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Link
              variant="button"
              gutterBottom
              display="inline"
              href={
                "https://maps.google.com/?q=" + ins.state.detailViewing.ltlng
              }
              target="_blank"
            >
              Ver en Maps
            </Link>
          </Grid>

          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography variant="caption" gutterBottom display="inline">
              Ubic. Google:
            </Typography>
          </Grid>

          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Typography variant="button" gutterBottom display="inline">
              {ins.state.detailViewing.glocation}
            </Typography>
          </Grid>

          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography variant="caption" gutterBottom display="inline">
              Empaque:
            </Typography>
          </Grid>

          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Typography variant="button" gutterBottom display="inline">
              {ins.state.detailViewing.empaque}
            </Typography>
          </Grid>

          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography variant="caption" gutterBottom display="inline">
              Nota:
            </Typography>
          </Grid>

          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Typography variant="button" gutterBottom display="inline">
              {ins.state.detailViewing.nota}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Divider my={1} />
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
            <Typography variant="caption" gutterBottom display="inline">
              ID FAC:
            </Typography>
          </Grid>

          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <Typography variant="button" gutterBottom display="inline">
              {ins.state.detailViewing.trx} - ${" "}
              {ins.state.detailViewing.monto_capturado}
            </Typography>
          </Grid>

          <Divider my={5} />
        </Grid>
        {/* <Divider my={5} /> */}
      </DialogContent>
    </Dialog>
  );
}

class OrdersComponent extends React.Component {
  constructor(props) {
    super(props);
    this.getDriverLoad = this.getDriverLoad.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.searchValue = this.searchValue.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    this.getStatuses = this.getStatuses.bind(this);
    this.countWithoutOP = this.countWithoutOP.bind(this);
    // this.handleQueryCreated = this.handleQueryCreated.bind(this);
  }
  state = {
    tix: "Órdenes",
    ordenes: [],
    openDetail: false,
    openDetailToSend: false,
    openDetailToPrint: false,
    openFilters: false,
    canPrintChecklist: false,
    drivers: [],
    paymentMethods: [
      { id: 1, name: "Efectivo" },
      { id: 2, name: "Link de pago" },
    ],
    otifStatuses: [
      { id: 1, name: "Completo" },
      { id: 2, name: "Con sustitutos" },
      { id: 3, name: "Incompleto" },
    ],
    cargaDriver: [],
    orderSelectedDriver: "",
    paymentMethodSelected: "",
    paymentMethodRef: "",
    askref: false,
    otifStatus: "",
    otifsubsv: "",
    order_id: "",
    searchTerm: "",
    ordenesStatuses: [],
    allOrdersCount: 0,
    ordersWithoutOP: 0,

    asksubs: false,
    st1: true,
    st2: true,
    st3: true,
    st4: true,
    st5: true,
    st6: true,
    st7: true,
    st8: true,
    st9: true,
    st10: true,
    st11: true,
  };
  getStatuses = (items, prop) => {
    var results = {};
    var len = items.length;
    for (var i = 0; i < len; i++) {
      var value = items[i][prop];
      var count = (results[value] || 0) + 1;
      results[value] = count;
    }
    var ranked = [];
    for (var key in results) {
      if (results.hasOwnProperty(key)) {
        ranked.push({ value: key, count: results[key] });
      }
    }
    return ranked.sort(function (a, b) {
      return b.count - a.count;
    });
  };
  countWithoutOP = (i) => {
    // var antVal = i.state.ordersWithoutOP;
    i.setState(
      {
        ordersWithoutOP: i.state.ordersWithoutOP + 1,
      },
      () => { }
    );
  };
  searchValue = (ev) => {
    var searchVal = "";
    var tk = localStorage.getItem("token_sec");
    var ir = this;
    var fie = "";

    if (ev.length > 0) {
      if (ev == "buscarClick") {
        searchVal = this.state.searchTerm;
        if (searchVal.length > 0) {
          fie = "search";
        } else {
          alert("Por favor ingrese un término de búsqueda");
        }
      }

      axios
        .post(
          "https://kip-logistic-api.azurewebsites.net/orders",
          {
            f: fie,
            v: searchVal,
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
          var dt = [];
          // const unique = [...new Set(res.data.data.map(item => item.os_state))];
          var xp = ir.getStatuses(res.data.data, "os_state");
          console.log(xp);
          // alert(res.data.data.length);
          ir.setState(
            {
              ordenesStatuses: xp,
            },
            () => { }
          );
          ir.setState(
            {
              allOrdersCount: res.data.data.length,
            },
            () => { }
          );
          // console.log(xp);

          ir.setState({ ordersWithoutOP: 0 });
          res.data.data.forEach(function (entry) {
            var row = entry.details[0];
            var dt_1 = entry.os_dt_created;
            var mmntx = "";
            if (row) {
              mmntx = parseFloat(row.captured_amount.replace("$", "")).toFixed(
                2
              );
            }

            var mmntx_a = "";
            mmntx_a = parseFloat(entry.os_total.replace("$", "")).toFixed(2);
            // console.log(entry.fullfilment_details[0].driver_id);
            var ux_states = [];
            if (entry.os_op.length == 0 || entry.os_op == "NO-OP") {
              ir.countWithoutOP(ir);
            }
            console.log(row, entry.os_op);
            // console.log(entry);
            var pt = "";
            var cc = "";
            var trxid = "";

            try {
              pt = row.package_type;
            } catch (error) {
              console.error(error);
            }

            try {
              cc = row.customers_comments;
            } catch (error) {
              console.error(error);
            }

            try {
              trxid = row.trx_id;
            } catch (error) {
              console.error(error);
            }

            dt.push(
              createData(
                entry.os_op,
                dt_1,
                entry.os_delivery,
                entry.os_customer_name,
                entry.os_state,
                mmntx_a,
                entry.os_coupon_code,
                entry.os_magento,
                entry.location,
                entry.telephone,
                entry.os_geo_lat,
                entry.location,
                pt,
                cc,
                trxid,
                mmntx,
                entry.glocation,
                entry.fullfilment_details[0].driver_id,
                entry.fullfilment_details[0].otif_status,
                entry.fullfilment_details[0].payment_method,
                entry.fullfilment_details[0].payment_ref,
                entry.os_id,
                entry.os_shipping_description
              )
            );
          });
          // console.log(dt);
          ir.setState(
            {
              ordenes: dt,
            },
            () => {
              // console.log(unique)
              // ux_states = unique;
              console.log(ir.state.ordenes);
            }
          );
          console.log("Fin");
        })
        .catch(function (error) {
          console.log(error);
          // alert(error);
        });
    } else {
      alert("Evento no controlado 193");
    }
  };
  applyFilter = (event, id) => {
    // applyFilter = (name) => (event) => {
    console.log(this.state.ordenes);
    console.log(id); //FIlTRO A APLICAR
    if (id == "new") {
      this.setState({ st1: !this.state.st1 });
    }
    let obj = this.state.ordenes.find((o) => o.status === "processing");
    console.log(obj);
    //alert("Apply filter");
    if (id == "modal") {
      this.setState({ openFilters: !this.state.openFilters });
    }

    if (
      this.state.st1 ||
      this.state.st2 ||
      this.state.st3 ||
      this.state.st4 ||
      this.state.st5 ||
      this.state.st6 ||
      this.state.st7 ||
      this.state.st8 ||
      this.state.st9 ||
      this.state.st10 ||
      this.state.st11
    ) {
      // Si existe algun filtro, entonces: 1- hacer backup de todas las ordenes 2- filtrar las que estan
    }
  };
  saveDetailsAndShip(ins) {
    //paymentMethod,paymentMethodRef,driverId,otifID
    var paymentMethod = ins.state.paymentMethodSelected;
    var paymentMethodRef = ins.state.paymentMethodRef;
    var orderSelectedDriver = ins.state.orderSelectedDriver;
    var otifStatus = ins.state.otifStatus;
    var otifsubs = ins.state.otifsubsv;
    var oid = ins.state.order_id;

    var day = ins.state.detailViewing.dt_envio.substring(0, 2);
    var month = ins.state.detailViewing.dt_envio.substring(3, 5);
    var year = new Date().getFullYear();
    var hour = ins.state.detailViewing.dt_envio.substring(6, 8);

    axios
      .post(
        "https://kip-logistic-api.azurewebsites.net/addDetails",
        {
          driver_id: orderSelectedDriver,
          otif_status: otifStatus,
          payment_method: paymentMethod,
          payment_ref: paymentMethodRef,
          order_id: oid,
          day: day,
          month: month,
          year: year,
          hour: hour,
          otifsubs: otifsubs,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (res) {
        ins.setState(
          {
            openDetailToSend: false,
          },
          () => {
            alert("Orden actualizada correctamente");
            window.location.reload();
          }
        );
      })
      .catch(function (error) {
        console.log(error);
        // alert(error);
      });
  }
  getDriverLoad(osOP, driver_id, ins) {
    axios
      .post(
        "https://kip-logistic-api.azurewebsites.net/drivers",
        {
          driver_id: driver_id,
          opid: osOP,
          day: "",
          month: "",
          year: "",
          hour: "",
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (res) {
        var dt = [];
        res.data.data.forEach(function (entry) {
          var vx = "";
          vx = {
            id: entry.delivery_date,
            name: entry.op,
          };
          dt.push(vx);
          // console.log(entry);
        });

        ins.setState(
          {
            cargaDriver: dt,
          },
          () => {
            // console.log(ins.state.cargaDriver);
          }
        );
        console.log("Fin");
      })
      .catch(function (error) {
        console.log(error);
        // alert(error);
      });
  }
  // componentWillUnmount() {
  //   clearInterval(slideInterval);
  // }
  componentDidMount() {
    // console.log(rpt);
    var tk = localStorage.getItem("token_sec");
    var ir = this;
    //window.location.reload(1);
    var op = this;

    setInterval(function () {
      op.searchValue("initial");
    }, 10000); //SINCRONIZADOR

    // alert("DIDMOUNT");
    this.searchValue("initial");
    //drivers
    axios
      .get(`https://kip-logistic-api.azurewebsites.net/drivers`, {
        headers: {
          Authorization: "Bearer " + tk,
        },
      })
      .then(function (res) {
        var dt = [];
        var dta = [];
        res.data.data.forEach(function (entry) {
          // dt.push(entry.vn);
          // dta.push(entry.id);
          var c = {
            id: entry.id,
            name: entry.vn,
          };
          dt.push(c);
        });
        ir.setState(
          {
            drivers: dt,
          },
          () => { }
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  clearSearch = () => {
    this.setState({ searchTerm: "" });
    this.searchValue("initial");
  };
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
    console.log(event.target.value);
    console.log(name);
    if (name.includes("dialog")) {
      this.setState({ openDetail: !this.state.openDetail });
      var rec = name;
      rec = name.replace("dialog-", "");
      let obj = this.state.ordenes.find((o) => o.idLS === rec);
      this.setState({ detailViewing: obj });
    }
    if (name.includes("close")) {
      this.setState({ openDetail: false });
    }

    // DETAILS TO SEND
    if (name.includes("dialots")) {
      this.setState({ openDetailToSend: !this.state.openDetailToSend });
      var rec = name;
      rec = name.replace("dialots-", "");
      let obj = this.state.ordenes.find((o) => o.idLS === rec);
      this.setState({ detailViewing: obj });
      this.setState({ orderSelectedDriver: obj.driver_id });
      this.setState({ paymentMethodSelected: obj.payment_method });
      this.setState({ paymentMethodRef: obj.payment_ref });
      this.setState({ otifStatus: obj.otif_status });
      this.setState({ order_id: obj.order_id });
    }
    //ChecklistToPrint
    if (name.includes("dialoxs")) {
      var rec = name;
      rec = name.replace("dialoxs-", "");
      let obj = this.state.ordenes.find((o) => o.idLS === rec);
      console.log(obj);

      var cnn = "";
      var snn = "";

      if (obj.nota.length > 0) {
        cnn = "X";
        snn = " ";
      }
      else {
        cnn = " ";
        snn = "X";
      }


      var idfac = "";
      var dtenv = "";
      var tempaque ="";

      dtenv = obj.dt_envio.split(" ");
      idfac = obj.trx.split("-");
      rpt = rpt.replace("[VAROPLS]", rec);
      rpt = rpt.replace("[VARCLIENTE]", obj.nombre_cliente);
      rpt = rpt.replace("[VARCAPTUREDAMOUNT]", obj.monto_capturado);
      rpt = rpt.replace("[VARIDFAC]", idfac[0]);
      rpt = rpt.replace("[VARNOTAPEDIDO]", obj.nota);
      rpt = rpt.replace("[VARCN]", cnn);
      rpt = rpt.replace("[VARSN]", snn);
      rpt = rpt.replace("[VARTIPOENVIO]", obj.os_shipping_description);
      rpt = rpt.replace("[VARMONTOPEDIDO]", obj.monto_capturado);

      rpt = rpt.replace("[VARDIA]", dtenv[0]);
      rpt = rpt.replace("[VARHORA]", dtenv[1]);

      if (obj.empaque==="bolsas"){
        rpt = rpt.replace("[VARBO]", "X");
        rpt = rpt.replace("[VARJA]", " ");
      }
      if (obj.empaque==="java"){
        rpt = rpt.replace("[VARBO]", "X");
        rpt = rpt.replace("[VARJA]", " ");
      }



      var win = window.open();
      win.document.open();
      win.document.write(rpt);
      win.document.close();
      win.print();
      // win.close();
    }


    if (name.includes("closets")) {
      this.setState({ openDetailToSend: false });
      this.setState({ openDetailToPrint: false });

    }
    // close-checkpage
    if (name.includes("closet-checkpage")) {
      this.setState({ openDetailToPrint: false });

    }
    if (name.includes("close-filters")) {
      this.setState({ openFilters: false });
    }
    if (name == "orderSelectedDriver") {
      // alert("consultar:"+event.target.value);
      this.getDriverLoad(
        this.state.detailViewing.idLS,
        event.target.value,
        this
      );
    }

    if (name == "paymentMethodSelected") {
      // alert("consultar:"+event.target.value);
      if (event.target.value == 2) {
        this.setState({ askref: true });
      } else {
        this.setState({ askref: false });
      }
    }

    if (name == "otifStatus") {
      // alert("consultar:"+event.target.value);
      if (event.target.value == 2) {
        // alert("2");
        this.setState({ asksubs: true });
      } else {
        // alert("otro");
        this.setState({ asksubs: false });
      }
    }

    if (name == "assignToDriver") {
      // alert("assignToDriver");
      this.saveDetailsAndShip(this);
    }
  };
  render() {
    // const { classes } = this.props;
    return (
      <React.Fragment>
        <Helmet title="Órdenes" />

        

        <Grid container spacing={2}>
          <Grid item xs={10} sm={11} md={11} lg={11} xl={11}>
            <TextField
              id="outlined-select-currency0gsearch"
              size="small"
              label="Buscar en pedidos"
              fullWidth
              variant="outlined"
              value={this.state.searchTerm}
              onChange={this.handleChange("searchTerm")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ fontSize: "small" }} />
                  </InputAdornment>
                ),
                endAdornment: this.state.searchTerm && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={(event) => this.clearSearch()}
                  >
                    <CancelRoundedIcon style={{ fontSize: "small" }} />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Button
              // size="small"
              variant="contained"
              color="primary"
              fullWidth
              onClick={(event) => this.searchValue("buscarClick")}
            >
              Buscar
            </Button>
          </Grid>
          {/* <Grid item xs={7} sm={7} md={7} lg={7} xl={7}></Grid> */}
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <br />
            Este día (Filtros rápidos):
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            {/* 
             -new 
            -processing
            -complete
            -driver-assigned
            -delivered
            -holded
            -on-the-way
            -INICIAL
            -A FACTURUAR
            -PICKEADO
              */}
            {/* // totalPedidos */}
            {/* background: ${(props) => props.totalPedidos && "#B6EED5"};
                  background: ${(props) => props.Nuevos && "#172449"};
                  background: ${(props) => props.Checklist && "#C68F3C"};
                  background: ${(props) => props.Pickeado && "#7761F6"};
                  background: ${(props) => props.EnCaja && "#FFE100"};
                  background: ${(props) => props.Facturado && "#1F9EEB"};
                  background: ${(props) => props.Asignado && "#E4DFFD"};
                  background: ${(props) => props.EnCamino && "#F9A000"};
                  background: ${(props) => props.Entregado && "#EF3340"};
                  background: ${(props) => props.Cancelado && "#ECECEC"};
                  background: ${(props) => props.Espera && "#ECECEC"};
              */}
            {/* allOrdersCount */}

            <Chip
              mr={1}
              mb={1}
              label={this.state.allOrdersCount + " Pedidos en total"}
              totalPedidos
              fullWidth
              onClick={(event) => this.applyFilter(event, "total")}
            />
            {this.state.ordenesStatuses.map(
              (tile) =>
                // (tile.value == "processing" || tile.value == "new" || tile.value == "pending" || tile.value == "READY" ? (
                (["processing","new","pending"].indexOf(tile.value) >0 ? (
                  this.state.st1 ? (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Nuevos"}
                      Nuevos
                      fullWidth
                      onClick={(event) => this.applyFilter(event, "new")}
                    />
                  ) : ""
                ) : (
                  ""
                )) ||
                (tile.value == "checklist" ? (
                  this.state.st2 ? (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Checklist"}
                      Checklist
                      fullWidth
                      onClick={(event) => this.applyFilter(event, "checklist")}
                    />
                  ) : (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Checklist"}
                      Checklist
                      fullWidth
                      onDelete={(event) => this.applyFilter(event, "checklist")}
                    />
                  )
                ) : (
                  ""
                )) ||
                (tile.value == "PICKEADO" ? (
                  this.state.st3 ? (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Pickeado"}
                      Pickeado
                      fullWidth
                      onClick={(event) => this.applyFilter(event, "PICKEADO")}
                    />
                  ) : (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Pickeado"}
                      Pickeado
                      fullWidth
                      onDelete={(event) => this.applyFilter(event, "PICKEADO")}
                    />
                  )
                ) : (
                  ""
                )) ||
                (tile.value == "A FACTURAR" ? (
                  this.state.st4 ? (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " En caja"}
                      EnCaja
                      fullWidth
                      onClick={(event) => this.applyFilter(event, "facturar")}
                    />
                  ) : (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " En caja"}
                      EnCaja
                      fullWidth
                      onDelete={(event) => this.applyFilter(event, "facturar")}
                    />
                  )
                ) : (
                  ""
                )) ||
                // (tile.value == "FACTURADO" || tile.value == "CLOSED" ? (
                  (["FACTURADO","CLOSED"].indexOf(tile.value) >0 ? (
                  this.state.st5 ? (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Facturado"}
                      Facturado
                      fullWidth
                      onClick={(event) => this.applyFilter(event, "facturado")}
                    />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                )) ||
                (tile.value == "driver-assigned" ? (
                  this.state.st6 ? (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Asignado"}
                      Asignado
                      fullWidth
                      onClick={(event) =>
                        this.applyFilter(event, "driver-assigned")
                      }
                    />
                  ) : (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Asignado"}
                      Asignado
                      fullWidth
                      onDelete={(event) =>
                        this.applyFilter(event, "driver-assigned")
                      }
                    />
                  )
                ) : (
                  ""
                )) ||
                (tile.value == "on-the-way" ? (
                  this.state.st7 ? (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " En camino"}
                      EnCamino
                      fullWidth
                      onClick={(event) => this.applyFilter(event, "on-the-way")}
                    />
                  ) : (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " En camino"}
                      EnCamino
                      fullWidth
                      onDelete={(event) =>
                        this.applyFilter(event, "on-the-way")
                      }
                    />
                  )
                ) : (
                  ""
                )) ||
                (["delivered","complete"].indexOf(tile.value) >0 ? (
                // (tile.value == "delivered" || tile.value == "complete" ? (
                  this.state.st8 ? (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Entregado"}
                      Entregado
                      fullWidth
                      onClick={(event) => this.applyFilter(event, "delivered")}
                    />
                  ) : (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Entregado"}
                      Entregado
                      fullWidth
                      onDelete={(event) => this.applyFilter(event, "delivered")}
                    />
                  )
                ) : (
                  ""
                )) ||
                (tile.value == "cancelled" ? (
                  this.state.st9 ? (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Cancelado"}
                      Cancelado
                      fullWidth
                      onClick={(event) => this.applyFilter(event, "cancelled")}
                    />
                  ) : (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " Cancelado"}
                      Cancelado
                      fullWidth
                      onDelete={(event) => this.applyFilter(event, "cancelled")}
                    />
                  )
                ) : (
                  ""
                )) ||
                (tile.value == "holded" || tile.value == "hold" ? (
                  this.state.st10 ? (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " En espera"}
                      EnEspera
                      fullWidth
                      onClick={(event) => this.applyFilter(event, "holded")}
                    />
                  ) : (
                    <Chip
                      mr={1}
                      mb={1}
                      label={tile.count + " En espera"}
                      EnEspera
                      fullWidth
                      onDelete={(event) => this.applyFilter(event, "holded")}
                    />
                  )
                ) : (
                  ""
                ))
            )}
            {this.state.st11 ? (
              <Chip
                mr={1}
                mb={1}
                label={this.state.ordersWithoutOP + " SIN OP"}
                variant="outlined"
                onClick={(event) => this.applyFilter(event, "no-op")}
              />
            ) : (
              <Chip
                mr={1}
                mb={1}
                label={this.state.ordersWithoutOP + " SIN OP"}
                variant="outlined"
                onDelete={(event) => this.applyFilter(event, "no-op")}
              />
            )}

            {/* Este día:    0 Pedidos | 2 Nuevos | 0 Checklist (Invalid) | 0 Pickeando | 0 En Caja(Invalid) | 5 Facturado | 4 Asignado| 6 Entregado | 1 Cancelado | 1 Espera (Invalid) */}
          </Grid>
        </Grid>

        <Divider my={4} />

        <Grid container spacing={6}>
          {/* {this.state.ordenes.length} */}
          <Grid item xs={12}>
            {this.state.ordenes.length > 0 ? (
              <EnhancedTable dataRows={this.state.ordenes} ins={this} />
            ) : (
              "Espere un momento"
            )}
            {/* {this.state.ordenes.length>0?this.state.ordenes.length:"no"} */}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
export default withStyles(style)(OrdersComponent);
// export default OrderList;
