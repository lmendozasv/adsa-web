import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import DialogTitle from '@material-ui/core/DialogTitle';
import CardHeader from '@material-ui/core/CardHeader';
import Dialog from '@material-ui/core/Dialog';
import Helmet from 'react-helmet';

import {
  CardContent,
  Grid,
  Link,
  MenuItem,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  TextField as MuiTextField,
  Typography
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const TextFieldSpacing = styled(MuiTextField)(spacing);

const TextField = styled(TextFieldSpacing)`
  width: 200px;
`;

class DefaultTextFields extends React.Component {
    componentDidMount() {
    //   alert("iniciado");

      }

      function UserProfile({ data, ins, relations }) {
        const [value, setValue] = React.useState(0);
      
        const handleChangeP = (event) => {
          //isLoadingCard
          ins.setState({ selectedRela: false });    
          setValue(parseInt(event.target.value));
          ins.setState({ selectedRel: parseInt(event.target.value) });    
        };
      
        const classes = useStyles();
        var xra = localStorage.getItem("ratx");
        return (
          <div className={classes.ckroot}>
            <Paper id="OP" className={classes.ckpaper} elevation={3}>
              <Box
                fontSize="h2.fontSize"
                textAlign="left"
                fontWeight="fontWeightBold"
                m={1}
              >
                Detalles de pago
              </Box>
              <Divider />
              <Spacer mt={5} />
              <Box
                textAlign="left"
                fontSize="button.fontSize"
                fontWeight="fontWeightRegular"
                color="#F42441"
              >
                Agrega o selecciona un método de pago para enviar el monto
                automáticamente
              </Box>
              <Box
                textAlign="left"
                fontSize="button.fontSize"
                fontWeight="fontWeightBold"
                color="#172449"
                gutterBottom
              >
                (No te cobraremos nada hasta que tu solicitud sea aceptada).
              </Box>
      
              <Spacer mb={10} />
              {
                relations.length > 0 ? (
                  <FormControl fullWidth component="fieldset">
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChangeP}
                    >
                      {relations.map((tile) => (
                        <Grid container spacing={3}>
                          <Grid item xs={6} md={6} lg={6} xl={6}>
                            <Typography variant="body2" gutterBottom display="block">
                              {tile.rel_name}
                            </Typography>
                          </Grid>
                          <Grid item xs={6} md={6} lg={6} xl={6}>
                            <Box textAlign="right">
                              <FormControlLabel
                                value={tile.id}
                                control={<Radio />}
                                label={tile.service_name}
                              />
                            </Box>
                          </Grid>
                        </Grid>
                      ))}
                    </RadioGroup>
      
                    <Spacer mt={5} />
              {/* <Divider /> */}
              {/* <Spacer mt={5} /> */}
      
                    {/* <Box
                textAlign="left"
                fontSize="button.fontSize"
                fontWeight="fontWeightBold"
                color="#172449"
                gutterBottom
              >
                También puedes agregar una nueva tarjeta
              </Box>
              <Spacer mb={5} />
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      <Elements stripe={stripePromise}>
                        <CheckoutForm />
                      </Elements>
                    </Grid>
      
                  
                  </Grid> */}
      
                  </FormControl>
                ) : (
                  ""
              //     <Grid container spacing={3}>
              //         <Box
              //   textAlign="left"
              //   fontSize="button.fontSize"
              //   fontWeight="fontWeightBold"
              //   color="#F42441"
              //   gutterBottom
              // >
              //   Agrega una nueva forma de pago
              // </Box>
              // <Spacer mb={10} />
              //       <Grid item xs={12} md={12} lg={12} xl={12}>
              //         <Elements stripe={stripePromise}>
              //           <CheckoutForm />
              //         </Elements>
              //       </Grid>
      
                  
              //     </Grid>
                )          
              }
              <Spacer mt={5} />
      
              <Spacer mt={5} />
      
      
              <Grid container spacing={3}>
                
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                  <Button
                      backgroundColor="#172449"
                      fullWidth
                      variant="contained"
                      color="primary"
                      disabled={!ins.state.selectedRela}
                      onClick={
                        
                        () => ins.setState({ addingCard: true })
                      }
                    >
                      AGREGAR MÉTODO DE PAGO
                    </Button>
                  </Grid>
                </Grid>
      
                <Spacer mt={5} />
              <Divider />
              <Spacer mt={5} />
      
      
              <Grid container spacing={3}>
                {/* <Grid item xs={6} md={6} lg={6} xl={10}>
                  <Typography variant="caption" gutterBottom display="block">
                    Selecciona o agrega un método de pago para enviar la cuota automáticamente cuando el administrador del grupo confirme tu solicitud. 
                    
                  </Typography>
                </Grid> */}
      
                <Grid container spacing={3}>
                  <Grid item xs={12} md={12} lg={12} xl={12}>
                    <Button
                      // backgroundColor="#172449"
                      // style={{backgroundColor: '#172449', color: '#FFFFFF'}}
                      fullWidth
                      variant="contained"
                      color="primary"
                      disabled={ins.state.selectedRela}
                      onClick={() => addCardToServiceAndJoin(ins.state.data.id,ins)}
                    >
                      ENVIAR SOLICITUD DE ACCESO
                    </Button>
                  </Grid>
                  <Grid item xs={6} md={6} lg={6} xl={6}></Grid>
                </Grid>
      
                <Grid item xs={12} md={12} lg={12} xl={12}>
                  <Alert fullWidth severity="success" variant="outlined">
                    Los datos de tu método de pago y transacciones estan protegidos
                    por Stripe
                  </Alert>
                  {/* <Typography variant="caption" gutterBottom display="block">              
                    <b>Los datos de tu método de pago y transacciones estan protegidos por Stripe.</b>            
                  </Typography> */}
                </Grid>
      
                <Spacer mt={10} />
      
                {/* <Grid item xs={6} md={6} lg={6} xl={2}>
                  <Box textAlign="right" marginRight={4} >
                    <Checkbox
                      mr={10}                                
                      inputProps={{ "aria-label": "primary checkbox" }}
                      onChange={e => {
                        console.log(e.target.checked);
                        ins.setState({ isTrue: e.target.checked });
                      }}
                    />
                  </Box>
                </Grid> */}
              </Grid>
            </Paper>
          </div>
        );
      }


  constructor(props) {
    super(props);
    this.status={
        open:false
    }
    this.currencies = [
      {
        value: "USD",
        label: "$"
      },
      {
        value: "EUR",
        label: "€"
      },
      {
        value: "BTC",
        label: "฿"
      },
      {
        value: "JPY",
        label: "¥"
      }
    ];
  }

  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <Card mb={6}>
          <Dialog open={true}>
      <DialogTitle>Compartir nuevo servicio</DialogTitle>
      <Card mb={6}>
          {/* <CardHeader>
          
          </CardHeader> */}
        <CardContent m={10}>
        <Typography variant="button" gutterBottom>
            Por favor, elige el tipo de suscripción digital que compartirás
          </Typography>
          <Divider my={1} />
          <Grid container spacing={6}>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
        </CardContent>
        </Card>
    </Dialog>



        <CardContent>
          <Typography variant="h6" gutterBottom>
            Text Fields
          </Typography>
          <Typography variant="body2" gutterBottom>
            The <code>TextField</code> wrapper component is a complete form
            control including a label, input and help text.
          </Typography>
          <Paper mt={3}>
            <form noValidate autoComplete="off">
              <TextField
                id="standard-name"
                label="Name"
                value={this.state.name}
                onChange={this.handleChange("name")}
                m={2}
              />

              <TextField
                id="standard-uncontrolled"
                label="Uncontrolled"
                defaultValue="foo"
                m={2}
              />

              <TextField
                required
                id="standard-required"
                label="Required"
                defaultValue="Hello World"
                m={2}
              />

              <TextField
                error
                id="standard-error"
                label="Error"
                defaultValue="Hello World"
                m={2}
              />

              <TextField
                disabled
                id="standard-disabled"
                label="Disabled"
                defaultValue="Hello World"
                m={2}
              />

              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                m={2}
              />

              <TextField
                id="standard-read-only-input"
                label="Read Only"
                defaultValue="Hello World"
                InputProps={{
                  readOnly: true
                }}
                m={2}
              />

              <TextField
                id="standard-dense"
                label="Dense"
                margin="dense"
                m={2}
              />

              <TextField
                id="standard-multiline-flexible"
                label="Multiline"
                multiline
                rowsMax="4"
                value={this.state.multiline}
                onChange={this.handleChange("multiline")}
                m={2}
              />

              <TextField
                id="standard-multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                m={2}
              />

              <TextField
                id="standard-helperText"
                label="Helper text"
                defaultValue="Default Value"
                helperText="Some important text"
                m={2}
              />

              <TextField
                id="standard-with-placeholder"
                label="With placeholder"
                placeholder="Placeholder"
              />

              <TextField
                id="standard-textarea"
                label="With placeholder multiline"
                placeholder="Placeholder"
                multiline
                m={2}
              />

              <TextField
                id="standard-number"
                label="Number"
                value={this.state.age}
                onChange={this.handleChange("age")}
                type="number"
                InputLabelProps={{
                  shrink: true
                }}
                m={2}
              />

              <TextField
                id="standard-search"
                label="Search field"
                type="search"
                m={2}
              />

              <TextField
                id="standard-select-currency"
                select
                label="Select"
                value={this.state.currency}
                onChange={this.handleChange("currency")}
                helperText="Please select your currency"
                m={2}
              >
                {this.currencies.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="standard-select-currency-native"
                select
                label="Native select"
                value={this.state.currency}
                onChange={this.handleChange("currency")}
                SelectProps={{
                  native: true
                }}
                helperText="Please select your currency"
                m={2}
              >
                {this.currencies.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <TextField
                id="standard-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidth
                InputLabelProps={{
                  shrink: true
                }}
                m={2}
              />

              <TextField id="standard-bare" defaultValue="Bare" m={2} />
            </form>
          </Paper>
        </CardContent>
      </Card>
    );
  }
}

class OutlinedTextFields extends React.Component {
  constructor(props) {
    super(props);

    this.currencies = [
      {
        value: "USD",
        label: "$"
      },
      {
        value: "EUR",
        label: "€"
      },
      {
        value: "BTC",
        label: "฿"
      },
      {
        value: "JPY",
        label: "¥"
      }
    ];
  }

  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <Card mb={6}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Outlined Text Fields
          </Typography>
          <Typography variant="body2" gutterBottom>
            <code>TextField</code> supports outlined styling.
          </Typography>
          <Paper mt={3}>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-name"
                label="Name"
                m={2}
                value={this.state.name}
                onChange={this.handleChange("name")}
                variant="outlined"
              />

              <TextField
                id="outlined-uncontrolled"
                label="Uncontrolled"
                defaultValue="foo"
                m={2}
                variant="outlined"
              />

              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
                m={2}
                variant="outlined"
              />

              <TextField
                error
                id="outlined-error"
                label="Error"
                defaultValue="Hello World"
                m={2}
                variant="outlined"
              />

              <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
                m={2}
                variant="outlined"
              />

              <TextField
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
                  readOnly: true
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
                  shrink: true
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
                {this.currencies.map(option => (
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
                  native: true
                }}
                helperText="Please select your currency"
                variant="outlined"
              >
                {this.currencies.map(option => (
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
                  shrink: true
                }}
              />

              <TextField
                id="outlined-bare"
                m={2}
                defaultValue="Bare"
                variant="outlined"
              />
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
        <Grid item xs={12}>
          <DefaultTextFields />
          <OutlinedTextFields />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default TextFields;
