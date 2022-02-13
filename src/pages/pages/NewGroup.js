import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import CardHeader from "@material-ui/core/CardHeader";
import DialogContent from "@material-ui/core/DialogContent";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import Alert from "@material-ui/lab/Alert";
import Helmet from "react-helmet";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import {
  CardContent,
  Grid,
  Link,
  Box,
  Button,
  MenuItem,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  TextField as MuiTextField,
  Typography,
  Select,
  InputLabel,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const Spacer = styled.div(spacing);

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const TextFieldSpacing = styled(MuiTextField)(spacing);

const TextField = styled(TextFieldSpacing)`
  //   width: ;
`;

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
    // marginLeft: "40%",
    marginTop: "0px",
    width: "55px",
    height: "55px",
    background: "#FFFFFF",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
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
    marginLeft: "2px",
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
    //   padding: theme.spacing(0, 3),
  },
  ckpaper: {
    //   padding: theme.spacing(2),
  },
  titleUser: {
    textAlign: "center",
  },
  centeredDiv: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
}));

function UserProfile({ ins, relations }) {
  const [value, setValue] = React.useState(0);

  const handleChangeP = (event) => {
    //isLoadingCard
    ins.setState({ selectedRela: false });
    setValue(parseInt(event.target.value));
    ins.setState({ selectedRel: parseInt(event.target.value) });
  };

  const classes = useStyles();

  return (
    <Grid container fullWidth xs={12} md={12} lg={12} xl={12}>
      {relations.length > 0 ? (
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Spacer m={2} />
          <TextField
            id="outlined-select-currency0"
            select
            label=""
            fullWidth
            value={ins.state.selectedCat}
            onChange={ins.handleChange("selectedCat")}
            // helperText="Please select your currency"
            variant="outlined"
          >
            {relations.map((tile) => (
              // <MenuItem value={10}>{tile.service_name}</MenuItem>
              <MenuItem key={tile.id} value={tile.id}>
                {tile.service_name}
              </MenuItem>
              //  </Grid>
            ))}
          </TextField>
        </Grid>
      ) : (
        ""
      )}

      <Spacer m={2} />

      <Grid container spacing={3}>
        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Button
            backgroundColor="#172449"
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => ins.setState({ open: false })}
          >
            CANCELAR
          </Button>
        </Grid>

        <Spacer mt={5} />
        <Divider />
        <Spacer mt={5} />

        <Grid item xs={12} md={12} lg={6} xl={6}>
          <Button
            // backgroundColor="#172449"
            // style={{backgroundColor: '#172449', color: '#FFFFFF'}}
            fullWidth
            variant="contained"
            color="primary"
            disabled={ins.state.selectedRela}
            //   onClick={() => addCardToServiceAndJoin(ins.state.data.id,ins)}
          >
            CONTINUAR
          </Button>
        </Grid>
        <Grid item xs={6} md={6} lg={6} xl={6}></Grid>
      </Grid>
    </Grid>
  );
}

class OutlinedTextFields extends React.Component {
  componentDidMount() {
    this._isMounted = true;
    var ins = this;
    var tk = localStorage.getItem("token_sec");
    axios
      .get(`https://plandy-api.herokuapp.com/servicetypes`, {
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
  }
  constructor(props) {
    super(props);

    this.currencies = [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
      {
        value: "BTC",
        label: "฿",
      },
      {
        value: "JPY",
        label: "¥",
      },
    ];
  }

  state = {
    name: "",
    age: "",
    multiline: "Controlled",
    currency: "EUR",
    open: false,
    personas: [],
    selectedMaxSlots: "1",
    officialPrice: "$ 0.00",
    legalEntity: "",
    serviceName:"",
    spots:[]
  };

  getRelTypes = (selectedId, ins) => {
    var tk = localStorage.getItem("token_sec");
    axios
      .post(
        "https://plandy-api.herokuapp.com/getConfs",
        {
          id: selectedId,
        },
        {
          headers: {
            Authorization: "Bearer " + tk,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        var dt = [];
        var cntSlots = [];
        response.data.data.forEach(function (entry) {
          //console.log(entry);
          var itemx = {
            id: entry.id,
            max_slots: entry.max_slots,
            official_price: entry.official_price,
            legal_entity: entry.legal_entity,            
          };
          ins.setState({ selectedMaxSlots: entry.max_slots });
          
          ins.setState({ legalEntity: entry.legal_entity });
          ins.setState({ serviceName: entry.service_name });
          if (entry.official_price>0){
            var ipx = entry.official_price/100;
            ipx = ipx.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            //console.log(ipx);
            var op = "$ " +ipx;
            ins.setState({ officialPrice: op });
          }
          else{
            ins.setState({ officialPrice: "$ 0.00" });
          }

          for (let i = 1; i <= entry.max_slots; i++) {
            var xl = {"id":i,"value":i};
            cntSlots.push(xl);  
          }
          ins.setState({ spots: cntSlots });
          //spotsToShare
          ins.setState({ spotsToShare: cntSlots[0] });
          // spots

          //console.log(itemx);
          dt.push(itemx);
          //console.log(cntSlots);
        });
        // console.log(response.data.data);
        ins.setState({ dataRelations: dt });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
    console.log([name]);
    console.log(event.target.value);
    if ([name] == "selectedCat") {
      this.getRelTypes(event.target.value, this);
    }
  };

  render() {
    return (
      <Card mb={6}>
        {/* <Dialog  open={this.state.open}>  
        <DialogTitle>Set backup account</DialogTitle>
          <UserProfile
          ins={this}
          relations={this.state.personas}/>
          </Dialog> */}

        <CardContent>
          {/* <Typography variant="h6" gutterBottom>
            Outlined Text Fields
          </Typography>
          <Typography variant="body2" gutterBottom>
            <code>TextField</code> supports outlined styling.
          </Typography> */}
          <Paper mt={3}>
            <form
            // noValidate autoComplete="off"
            >
              <Typography variant="h6" gutterBottom>
                Datos del servicio
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  {/* <TextField
                        fullWidth
                            id="outlined-name"
                            label="Tipo de servicio"                            
                            inputProps={{ maxLength: 12 }}
                            required
                            value={this.state.selectedCat}
                            onChange={this.handleChange("name")}
                            variant="outlined"
                            
                        /> */}

                  {/* /* inicio */}
                  <TextField
                    id="outlined-select-currency0"
                    select
                    label="Servicio que compartirás"
                    fullWidth
                    value={this.state.selectedCat}
                    onChange={this.handleChange("selectedCat")}
                    // helperText="Please select your currency"
                    variant="outlined"
                  >
                    {this.state.personas.map((tile) => (
                      <MenuItem key={tile.id} value={tile.id}>
                        {tile.service_name}
                      </MenuItem>
                    ))}
                  </TextField>
                  {/* /** fin */}
                </Grid>
              </Grid>
              <Spacer m={2} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <TextField
                    fullWidth
                    id="outlined-name"
                    label="Nombre del grupo"
                    inputProps={{ maxLength: 35 }}
                    required
                    value={this.state.name}
                    onChange={this.handleChange("name")}
                    helperText={"Ej. Oficina de Pablo en zona 11"}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Spacer m={2} />
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                  <TextField
                    fullWidth
                    disabled
                    id="outlined-disabled"
                    label="Costo mensual"
                    defaultValue="$ 0.00"
                    value={this.state.officialPrice}
                    helperText="(Costo oficial por mes)"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                <TextField
                      id="outlined-select-currency0"
                      select
                      label="Espacios a compartir"
                      fullWidth
                      helperText={"Máximo a compartir: "+this.state.selectedMaxSlots+""}
                      value={this.state.spotsToShare}
                      onChange={this.handleChange("spotsToShare")}                      
                      variant="outlined"
                    >
                      {this.state.spots.map((tile) => (
                        <MenuItem key={tile.id} value={tile.id}>
                          {tile.value}
                        </MenuItem>
                      ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <Spacer m={2} />
                </Grid>

                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Typography variant="h6" gutterBottom>
                      Datos de acceso al grupo
                    </Typography>
                  </Grid>
                )}
                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={12} md={6} lg={6} xl={6}>
                    <TextField
                      id="outlined-select-currency0"
                      select
                      label="¿Quién puede unirse al grupo?"
                      fullWidth
                      value={this.state.selectedCat}
                      onChange={this.handleChange("selectedCat")}
                      // helperText="Please select your currency"
                      variant="outlined"
                    >
                      {this.state.personas.map((tile) => (
                        <MenuItem key={tile.id} value={tile.id}>
                          {tile.service_name}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                )}

                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={12} md={6} lg={6} xl={6}>
                    <TextField
                      id="outlined-select-currency0"
                      select
                      label="¿Es un grupo público?"
                      fullWidth
                      value={this.state.selectedCat}
                      onChange={this.handleChange("selectedCat")}
                      // helperText="Please select your currency"
                      variant="outlined"
                    >
                      {this.state.personas.map((tile) => (
                        <MenuItem key={tile.id} value={tile.id}>
                          {tile.service_name}
                        </MenuItem>
                      ))}
                    </TextField>
                    {/* /** fin */}
                  </Grid>
                )}

                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Spacer m={2} />
                  </Grid>
                )}

                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={10} md={11} lg={11} xl={11}>
                    <Typography variant="caption" gutterBottom display="block">
                      Confirmo que entiendo que Plandy no está asociado o
                      afiliado a {this.state.legalEntity} y que he leído, entendido y he aceptado
                      cumplir con los términos y condiciones de uso para
                      compartir {this.state.serviceName}.
                    </Typography>
                  </Grid>
                )}

                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Grid item xs={2} md={1} lg={1} xl={1}>
                    <Box textAlign="right" marginRight={4}>
                      <Checkbox
                        mr={10}
                        inputProps={{ "aria-label": "primary checkbox" }}
                        onChange={(e) => {
                          console.log(e.target.checked);
                          this.setState({ isTrue: e.target.checked });
                        }}
                      />
                    </Box>
                  </Grid>
                )}
                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <Spacer m={2} />
                </Grid>
                )}
                {this.state.legalEntity == "" ? (
                  ""
                ) : (
                  <Button
                    backgroundColor="#172449"
                    fullWidth
                    variant="contained"
                    color="primary"
                    // onClick={() => handleJoinNow(this.state.data,this)}
                  >
                    CREAR GRUPO
                  </Button>
                )}
                {/* <Grid item xs={12} md={6} lg={6} xl={12}>
                  <TextField
                    id="outlined-select-currency0"
                    select
                    label="Credenciales"
                    fullWidth
                    value={this.state.selectedCat}
                    onChange={this.handleChange("selectedCat")}
                    // helperText="Please select your currency"
                    variant="outlined"
                  >
                    {this.state.personas.map((tile) => (
                      <MenuItem key={tile.id} value={tile.id}>
                        {tile.service_name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid> */}
              </Grid>

              {/* <TextField
                id="outlined-email-input"
                label="Email"
                m={2}
                type="email"
                name="email"
                autoComplete="email"
                variant="outlined"
              />

              <TextField
                id="outlined-password-input"
                label="Password"
                m={2}
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />

              <TextField
                id="outlined-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                m={2}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-dense"
                label="Dense"
                margin="dense"
                variant="outlined"
              />

              <TextField
                id="outlined-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={this.state.multiline}
                onChange={this.handleChange("multiline")}
                m={2}
                helperText="hello"
                variant="outlined"
              />

              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                m={2}
                variant="outlined"
              />

              <TextField
                id="outlined-helperText"
                label="Helper text"
                defaultValue="Default Value"
                m={2}
                helperText="Some important text"
                variant="outlined"
              />

              <TextField
                id="outlined-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
                m={2}
                variant="outlined"
              />

              <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                m={2}
                variant="outlined"
              />

              <TextField
                id="outlined-number"
                label="Number"
                value={this.state.age}
                onChange={this.handleChange("age")}
                type="number"
                m={2}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />

              <TextField
                id="outlined-search"
                label="Search field"
                type="search"
                m={2}
                variant="outlined"
              />

              <TextField
                id="outlined-select-currency"
                select
                label="Select"
                m={2}
                value={this.state.currency}
                onChange={this.handleChange("currency")}
                helperText="Please select your currency"
                variant="outlined"
              >
                {this.currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="outlined-select-currency-native"
                select
                label="Native select"
                m={2}
                value={this.state.currency}
                onChange={this.handleChange("currency")}
                SelectProps={{
                  native: true,
                }}
                helperText="Please select your currency"
                variant="outlined"
              >
                {this.currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="outlined-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="outlined-bare"
                m={2}
                defaultValue="Bare"
                variant="outlined"
              /> */}
            </form>
          </Paper>
        </CardContent>
      </Card>
    );
  }
}

function TextFields() {
  return (
    <React.Fragment>
      <Helmet title="Crear grupo" />
      <Typography variant="h3" gutterBottom display="inline">
        Crear grupo para compartir
      </Typography>
      <Divider my={6} />
      {/* <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Forms
        </Link>
        <Typography>Text Fields</Typography>
      </Breadcrumbs> */}

      {/* <Divider my={6} /> */}

      <Grid container spacing={6}>
        <Grid item xs={12} md={8} lg={6} xl={6}>
          {/* <DefaultTextFields /> */}
          <OutlinedTextFields />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TextFields;
