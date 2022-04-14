import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import axios from "axios";

import Helmet from 'react-helmet';

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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography
} from "@material-ui/core";

import { green, orange, red } from "@material-ui/core/colors";

import {
  Add as AddIcon,
  Archive as ArchiveIcon,
  FilterList as FilterListIcon,
  RemoveRedEye as RemoveRedEyeIcon
} from "@material-ui/icons";

import { spacing } from "@material-ui/system";
import { withStyles } from "@material-ui/core/styles";

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const Divider = styled(MuiDivider)(spacing);

const style = (theme) => ({
  root: {
    height: "100vh",
  },
  image_register:{
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
    display:"compact" 
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

  background: ${props => props.shipped && "#48D597"};
  background: ${props => props.processing && orange[700]};
  background: ${props => props.cancelled && red[500]};
  color: ${props => props.theme.palette.common.white};
`

const Spacer = styled.div`
  flex: 1 1 100%;
`;

const ToolbarTitle = styled.div`
  min-width: 150px;
`;

function createData(idLS,dt_pedido,dt_envio,nombre_cliente,status,monto,cupon,idMagento,dir,tel,ltlng,ubicacion,empaque,nota, trx,monto_capturado) {
  // console.log(idLS);
  return { idLS,dt_pedido,dt_envio,nombre_cliente,status,monto,cupon,idMagento,dir,tel,ltlng,ubicacion,empaque,nota, trx,monto_capturado };
}

// const dataRows = [
  // createData('', '', '', '', '', '','','','','',''),
//   createData('000254', 'José Escobar', '2020-01-04', '$130,00', 0, 'PayPal'),
//   createData('000255', 'Pocket Speaker', '2020-01-04', '$80,00', 2, 'Mastercard'),
//   createData('000256', 'Glass Teapot', '2020-01-08', '$45,00', 0, 'Visa'),
//   createData('000257', 'Unbreakable Water Bottle', '2020-01-09', '$40,00', 0, 'PayPal'),
//   createData('000258', 'Spoon Saver', '2020-01-14', '$15,00', 0, 'Mastercard'),
//   createData('000259', 'Hip Flash', '2020-01-16', '$25,00', 1, 'Visa'),
//   createData('000260', 'Woven Slippers', '2020-01-22', '$20,00', 0, 'PayPal'),
//   createData('000261', 'Womens Watch', '2020-01-22', '$65,00', 2, 'Visa'),
//   createData('000262', 'Over-Ear Headphones', '2020-01-23', '$210,00', 0, 'Mastercard'),
// ];

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
  return order === 'desc'
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
  { id: 'idLS', alignment: 'left', label: 'OP en LS' },
  { id: 'dt_pedido', alignment: 'left', label: 'Fecha pedido' },
  { id: 'dt_envio', alignment: 'left', label: 'Fecha envío' },
  { id: 'nombre_cliente', alignment: 'left', label: 'Cliente' },
  { id: 'status', alignment: 'left', label: 'Estado' },
  { id: 'amount', alignment: 'right', label: 'Monto' },
  { id: 'coupon_code', alignment: 'right', label: 'Cupón' },
  { id: 'actions', alignment: 'right', label: 'Acciones' },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
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
            inputProps={{ 'aria-label': 'select all' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.alignment}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
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

let EnhancedTableToolbar = props => {
  const { numSelected } = props;

  return (
    <Toolbar>
      <ToolbarTitle>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} seleccionados
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
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
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

function EnhancedTable ({dataRows}){ 
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('customer');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  console.log("======"+dataRows.length);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
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
        selected.slice(selectedIndex + 1),
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

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, dataRows.length - page * rowsPerPage);
  // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div>
      <Paper>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={'medium'}
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
                          inputProps={{ 'aria-labelledby': labelId }}
                          onClick={(event) => handleClick(event, row.id)}
                        />
                      </TableCell>

                      <TableCell align="left">#{row.idLS}</TableCell>
                      <TableCell align="left">{row.dt_pedido}</TableCell>
                      <TableCell align="left">{row.dt_envio}</TableCell>
                      <TableCell align="left">{row.nombre_cliente}</TableCell>
                      <TableCell>
                        {row.status === "processing" && <Chip size="small" mr={1} mb={1} label="Nuevo" shipped />}
                        {row.status === 1 && <Chip size="small" mr={1} mb={1} label="Processing" processing />}
                        {row.status === 2 && <Chip size="small" mr={1} mb={1} label="Cancelled" cancelled />}
                      </TableCell>
                      <TableCell align="right">$ {row.monto}</TableCell>
                      <TableCell align="right">{row.cupon}</TableCell>
                      
                      
                      <TableCell padding="none" align="right">
                        <Box mr={2}>
                          <IconButton aria-label="delete">
                            <ArchiveIcon />
                          </IconButton>  
                          <IconButton aria-label="details">
                            <RemoveRedEyeIcon />
                          </IconButton>  
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (53) * emptyRows }}>
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







class OrdersComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);    
    // this.handleQueryCreated = this.handleQueryCreated.bind(this);
  }
  state = {
    tix : "Órdenes",
    ordenes: []
  }
  componentDidMount() {
    var tk = localStorage.getItem("token_sec");
    var ir = this;
    // alert("DIDMOUNT");
    axios.post('https://kip-logistic-api.azurewebsites.net/orders', {
      p: "",
      v: ""
    },
    {
      headers: {
          'Authorization': 'Bearer '+tk,
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
      }
  }
    )
    .then(function (res) {
      // console.log(res);     
      // const dx = res.data.data;        
        var dt = [];        
        res.data.data.forEach(function (entry) {          
          var dt_1 = entry.os_dt_created;
          var dm_1="00000000";
          var dm_2="11111111";
          var dm_3="22222222";
          
          dt_1 = dt_1.replace("2022-","");
          dt_1 = dt_1.replace("-","/");
          dm_1 = dt_1.substring(0,2);
          dm_2 = dt_1.substring(3,5);
          dm_3 = dt_1.substring(6);
          
          dt_1 = dm_2 + "/" + dm_1 + " " + dm_3;

          createData(entry.os_op,dt_1,entry.os_delivery,entry.os_customer_name,entry.os_state,entry.os_total,entry.os_coupon_code,entry.os_magento,entry.location,entry.telephone,entry.os_geo_lat,entry.location,entry.details[0].package_type,entry.details[0].customers_comments,entry.details[0].trx_id,entry.details[0].captured_amount);          
          dt.push(createData(entry.os_op,dt_1,entry.os_delivery,entry.os_customer_name,entry.os_state,entry.os_total,entry.os_coupon_code,entry.os_magento,entry.location,entry.telephone,entry.os_geo_lat,entry.location,entry.details[0].package_type,entry.details[0].customers_comments,entry.details[0].trx_id,entry.details[0].captured_amount));
        }
        );
        
        
        ir.setState({
          ordenes: dt
      }, () => {
        console.log(ir.state.ordenes);  
      });
        console.log("Fin");
    })
    .catch(function (error) {
      alert(error);
    });     
  }
  handleChange = (name) => (event) => {
  }
  render() {
    // const { classes } = this.props;
    return (
    
    <React.Fragment>
      <Helmet title="Órdenes" />
      <Grid
        justify="space-between"
        container 
        spacing={24}
      >
        <Grid item>
          <Typography variant="h3" gutterBottom display="inline">
          {this.state.tix}
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} exact to="/">
              Dashboard
            </Link>            
            <Typography>Órdenes</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid item>
          <div>
            <Button variant="contained" color="primary">
              <AddIcon />
              Nueva órden
            </Button>
          </div>
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        {/* {this.state.ordenes.length} */}
        <Grid item xs={12}>
          {this.state.ordenes.length>0?<EnhancedTable dataRows={this.state.ordenes} />:"Espere un momento"}
          {/* {this.state.ordenes.length>0?this.state.ordenes.length:"no"} */}
          
        </Grid>
      </Grid>
    </React.Fragment>
    
    )
  }

}
export default withStyles(style)(OrdersComponent);
// export default OrderList;
