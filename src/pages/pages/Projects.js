import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import axios from "axios";
import SearchBar from "material-ui-search-bar";
import Helmet from "react-helmet";

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
  Search as searchIcon,
} from "@material-ui/icons";

import { spacing } from "@material-ui/system";
import { withStyles } from "@material-ui/core/styles";

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

  background: ${(props) => props.info && "#48D597"};
  background: ${(props) => props.shipped && "#48D597"};
  background: ${(props) => props.processing && orange[700]};
  background: ${(props) => props.cancelled && red[500]};
  color: ${(props) => props.theme.palette.common.white};
`;

const InfoChip = styled(MuiChip)`
  ${spacing};

  background: ${(props) => props.info && "#fff"};
  background: ${(props) => props.shipped && "#48D597"};
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
  order_id
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

function EnhancedTable({ dataRows, ins }) {
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
        <EnhancedTableToolbar numSelected={selected.length} />
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
                            <Chip
                              size="small"
                              mr={1}
                              mb={1}
                              label={row.status}
                              shipped
                            />
                        
                        {/* {row.status === "complete" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Entregado"
                            processing
                          />
                        )}
                        {row.status === "checklist" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Checklist"
                            cancelled
                          />
                        )}
                        {row.status === "picking" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Pickeando"
                            cancelled
                          />
                        )}
                        {row.status === "on-pos" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="En caja"
                            cancelled
                          />
                        )}
                        {row.status === "invoiced" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Facturado"
                            cancelled
                          />
                        )}
                        {row.status === "driver-assigned" && (
                          <Chip
                            size="small"
                            mr={1}
                            mb={1}
                            label="Asignado a driver"
                            cancelled
                          />
                        )} */}
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

                          <IconButton
                            onClick={ins.handleChange("dialots-" + row.idLS)}
                            aria-label="delete"
                          >
                            <ArrowForwardIosIcon />
                          </IconButton>
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
              // onClick={(event) => ins.handleChange("assignToDriver")}
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
            <Typography variant="button" gutterBottom display="inline">
              {ins.state.detailViewing.ltlng}
            </Typography>
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
    // this.handleQueryCreated = this.handleQueryCreated.bind(this);
  }
  state = {
    tix: "Órdenes",
    ordenes: [],
    openDetail: false,
    openDetailToSend: false,
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
    order_id: "",
  };

  saveDetailsAndShip(ins) {
    //paymentMethod,paymentMethodRef,driverId,otifID
    var paymentMethod = ins.state.paymentMethodSelected;
    var paymentMethodRef = ins.state.paymentMethodRef;
    var orderSelectedDriver = ins.state.orderSelectedDriver;
    var otifStatus = ins.state.otifStatus;
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
  componentDidMount() {
    var tk = localStorage.getItem("token_sec");
    var ir = this;
    // alert("DIDMOUNT");

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
          () => {}
        );
      })
      .catch(function (error) {
        console.log(error);
      });
    //drivers

    axios
      .post(
        "https://kip-logistic-api.azurewebsites.net/orders",
        {
          p: "",
          v: "",
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
        // console.log(res);
        // const dx = res.data.data;
        var dt = [];
        res.data.data.forEach(function (entry) {
          var dt_1 = entry.os_dt_created;

          // var dm_1 = "00000000";
          // var dm_2 = "11111111";
          // var dm_3 = "22222222";

          // dt_1 = dt_1.replace("2022-", "");
          // dt_1 = dt_1.replace("-", "/");
          // dm_1 = dt_1.substring(0, 2);
          // dm_2 = dt_1.substring(3, 5);
          // dm_3 = dt_1.substring(6);

          // dt_1 = dm_2 + "/" + dm_1 + " " + dm_3;

          /**---- */

          // var dt_1a = "";
          // dt_1a = entry.details[0].delivery_date.replace("2022-","").substring(3, 5)+"/"+entry.details[0].delivery_date.replace("2022-","").substring(0, 2)+" "+entry.details[0].delivery_hours.replace(":00","");

          var mmntx = "";
          mmntx = parseFloat(
            entry.details[0].captured_amount.replace("$", "")
          ).toFixed(2);

          var mmntx_a = "";
          mmntx_a = parseFloat(entry.os_total.replace("$", "")).toFixed(2);
          console.log(entry.fullfilment_details[0].driver_id);
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
              entry.details[0].package_type,
              entry.details[0].customers_comments,
              entry.details[0].trx_id,
              mmntx,
              entry.glocation,
              entry.fullfilment_details[0].driver_id,
              entry.fullfilment_details[0].otif_status,
              entry.fullfilment_details[0].payment_method,
              entry.fullfilment_details[0].payment_ref,
              entry.os_id
            )
          );
        });
        console.log(dt);
        ir.setState(
          {
            ordenes: dt,
          },
          () => {
            console.log(ir.state.ordenes);
          }
        );
        console.log("Fin");
      })
      .catch(function (error) {
        console.log(error);
        // alert(error);
      });
  }
  // askdriverload = (osid,driver_id) => {
  //   // alert("askking");
  //   console.log(osid);
  //   console.log(driver_id);
  // }
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
    // console.log(event.target.value);
    // console.log(name);
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
    if (name.includes("closets")) {
      this.setState({ openDetailToSend: false });
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
        <Grid justify="space-between" container spacing={24}>
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

        <Grid container spacing={2}>
          <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
            <TextField
              id="outlined-select-currency0g"
              size="small"
              label="Buscar pedidos"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1}>
            <Button size="small" variant="contained" color="primary">
              Buscar
            </Button>
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7} xl={7}></Grid>
        </Grid>
        <Spacer my={3} />
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            Este día:    10 Pedidos | 2 Nuevos | 5 Checklist | 3 Pickeando | 4 En Caja | 5 Facturado | 4 Enviado | 6 Entregado | 1 Cancelado | 1 Espera
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
