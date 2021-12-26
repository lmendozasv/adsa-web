import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import createHistory from 'history/createBrowserHistory'
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Link from "@material-ui/core/Link";
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import GetAppIcon from '@material-ui/icons/GetApp';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import {
    Button,
    Grid,
    CardMedia as MuiCardMedia,
    Card as MuiCard,
    TextField,
  Typography
} from "@material-ui/core";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { spacing } from "@material-ui/system";
import {Add as AddIcon} from "@material-ui/icons";




function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const Spacer = styled.div(spacing);

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
function SimpleModal({ dataList,ins }) {
  const classes = useStyles(); 
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddNIC=()=>{
    // alert("Agregar NIC");
    var token = localStorage.getItem("token");


    axios.post('https://app.movilaeswebdes.com/user_profile/addNICNew', {
        alias: ins.state.alias_nic,
        nic: ins.state.nic_nuevo,
        validation_document: ins.state.documento_nic
      },
      {
        headers: {
            'Authorization': 'Bearer '+token,
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        }
    }
      )
      .then(function (response) {
        console.log(response);     
        // ins.setState({isSending: false});
        alert("El NIC se agregó a tu cuenta correctamente");
        //window.location.reload(false);
        const history = createHistory();
        history.go(0)
        // handleQueryCreated(response.id);
      })
      .catch(function (error) {
        alert("No fue posible validar el NIC ingresado, por favor valida los datos e intenta nuevamente");
      });

    }
  
  const body = (
    <div>
          <Typography variant="subtitle2" gutterBottom align='center'>
            Por favor, completa todos los datos.
          </Typography>
          <Spacer mb={4} />   
          <Grid container spacing={3}>
                  <Grid item
                      xs={12} md={12} lg={12} xl={12}
                      >    
          <TextField
                      fullWidth
                          id="txt_names"                                    
                          label="Nombres"
                          size="small"
                          m={1}
                          value={ins.state.nombres}
                          onChange={ins.handleChange("nombres")}                        
                          variant="outlined"                                                                      
                          length={50}                    
                          maxLength={50}                    
                      />                                    
            <Spacer mb={1} />   
            </Grid>
            </Grid>
            <Spacer mb={4} />   


            <Grid container spacing={3}>
                  <Grid item
                      xs={12} md={12} lg={12} xl={12}
                      >    
            <TextField
                      fullWidth
                          id="txt_apellidos"                                    
                          label="Apellidos"                          
                          m={1}       
                          size="small"      
                          value={ins.state.apellidos}
                          onChange={ins.handleChange("apellidos")}                                     
                          variant="outlined"                          
                      >                        
            </TextField>          
            </Grid>
            </Grid>
            <Spacer mb={4} />   


            <Grid container spacing={3}>
                  <Grid item
                      xs={12} md={12} lg={12} xl={12}
                      >    
            <TextField
                      fullWidth
                          id="txt_correoelectronico"      
                          size="small"                              
                          label="Correo electrónico"                          
                          m={1}             
                          value={ins.state.correoelectronico}
                          onChange={ins.handleChange("correoelectronico")}                                     
                          variant="outlined"                          
                      >                        
            </TextField>          
            </Grid>
            </Grid>
            <Spacer mb={4} />   




            <Grid container spacing={3}>
                  <Grid item
                      xs={12} md={12} lg={12} xl={12}
                      >    
            <TextField
                      fullWidth
                          id="txt_notelefono"                                    
                          label="Número de teléfono"   
                          size="small"                       
                          m={1}             
                          value={ins.state.notelefono}
                          onChange={ins.handleChange("notelefono")}                                     
                          variant="outlined"                          
                      >                        
            </TextField>          
            </Grid>
            </Grid>


           
    </div>
  );

  return (
    <div>  
      
       <Link
       href="#"
                onClick={() => handleOpen()}
                variant="body2" color="primary">
              
              ¿No tienes una cuenta? Regístrate ahora
            </Link>
                
                
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <DialogTitle id="simple-dialog-title" >
        ¡Bienvenido!
        </DialogTitle>
        <DialogContent dividers>        

        {body}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="error">
            Cancelar
          </Button>
          <Button
          variant="contained"
          color="primary"
           
          onClick={() => handleAddNIC("Login",this)}
          >
            Acceder
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


class AddNIC extends React.Component {
    constructor(props) {
      super(props);    
      this.handleChange = this.handleChange.bind(this);
    }

    state = {                
        nombres: "",
        apellidos: "",
        pais_residencia: "",
        notelefono: "",
        correoelectronico: "",
        isLogged: false,     
      };
      componentDidMount() {        
        this.setState({ isLoadingData: false });
      }

      handleChange = name => event => {
        this.setState({
          [name]: event.target.value                  
        });        
        console.log(event.target.value);
        console.log(name);    
        if(name ==="nombres"){
            this.setState({nombres: event.target.value});
        }      
        if(name==="apellidos"){
          this.setState({apellidos: event.target.value});
        }
        if(name==="pais_residencia"){
          this.setState({pais_residencia: event.target.value});
        }
        if(name==="notelefono"){
            this.setState({notelefono: event.target.value});
          }
          if(name==="correoelectronico"){
            this.setState({correoelectronico: event.target.value});
          }
      };

      

      render(){
        return(
          
            <div>
                <SimpleModal ins={this}/>
            </div>
        )        
      }
    }
    export default AddNIC;