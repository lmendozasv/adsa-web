import React from "react";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";
import axios from "axios";
import Helmet from 'react-helmet';

import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Chip as MuiChip,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography
} from "@material-ui/core";

import { AvatarGroup as MuiAvatarGroup } from '@material-ui/lab';

import { red, green, orange } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";

const NavLink = React.forwardRef((props, ref) => (
  <RouterNavLink innerRef={ref} {...props} />
));

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  border-bottom: 1px solid ${props => props.theme.palette.grey[300]};
`;

const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  background-color: ${props => props.rgbcolor};
  color: ${props => props.theme.palette.common.white};
  margin-bottom: ${props => props.theme.spacing(4)}px;
`;

const AvatarGroup = styled(MuiAvatarGroup)`
  margin-left: ${props => props.theme.spacing(2)}px;
`
const handleJoinNow = (t,ns) => {    
  var relaion = ns.state.selectedRel;
  var isTrues = ns.state.isTrue;
  if(relaion>0&&isTrues){
    ns.props.history.push({ 
      pathname: "/pay",
      state: {groupData: t}
    });  
  }
  else{
    alert("Para continuar es necesario seleccionar las opciones, intenta nuevamente");
  }
}
const getRelTypes = (id, ins) => {
  var tk = localStorage.getItem("token_sec");
  axios
    .post(
      "https://plandy-api.herokuapp.com/getRelType",
      {
        group_id: id,
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
      response.data.data.forEach(function (entry) {
        //console.log(entry);
        var itemx = {
          id: entry.id,
          rel_name: entry.rel_name,
        };
        console.log(itemx);
        dt.push(itemx);
      });
      // console.log(response.data.data);
      ins.setState({ dataRelations: dt });
    })
    .catch(function (error) {
      console.log(error);
    });
};

class JoinToGroup extends React.Component {
  componentDidMount() {
    // console.log(this.props.location.state.groupData);
    this.setState({ data: this.props.location.state.groupData });
    var xspots =
      this.props.location.state.groupData.total_spots -
      this.props.location.state.groupData.free_spots;

    //console.log(xspots);
    this.setState({ tspots: xspots });
    localStorage.setItem("xspots", xspots);
    localStorage.setItem("ratx", this.props.location.state.groupData.rating);
    getRelTypes(this.props.location.state.groupData.id, this);
  }

  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: [],
      tspots: 0,
      dataRelations: [],
      selectedRel: 0,
      isTrue:false
    };
  }

  handleChange = (event) => {
    //console.log(this.state);
    //console.log("1state: " + this.state.selectedRel);
    this.state.selectedRel = parseInt(event.target.value);
    //console.log("2state: " + this.state.selectedRel);
    // setValue(event.target.value);
    //selectedRel
    //this.setState({ selectedRel: event.target.value });
    // console.log(""+event.target.value);
  };
  render() {
    return (
      <div>
        <Helmet title="Ingresa al grupo" />

        <Grid container spacing={1}>
          <Grid alignItems="center" item xl={6} lg={6} md={6} sm={6} xs={12}>
            <Project
              data={this.state.data}
              relations={this.state.dataRelations}
              ins={this}
            />
          </Grid>

          <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
            {/* <GroupDataDetails data={this.state.data} ins={this.state} /> */}
          </Grid>
        </Grid>
        {/* <Spacer mb={2} /> */}
        <Grid container spacing={3}>
          <Grid item xs={6} md={6} lg={6} xl={6}>
          <Button
              backgroundColor="#172449"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleJoinNow(this.state.data,this)}
            >
              SOLICITAR ACCESO AL GRUPO
            </Button>
          </Grid>
          <Grid item xs={6} md={6} lg={6} xl={6}>
            
          </Grid>
        </Grid>
        {/* <Alert color="success" fullWidth severity="info">
          El servicio de <b>{this.state.data.service_name} </b>tiene una alta
          demanda en Plandy. ¡Apresúrate a unirte al grupo!
        </Alert> */}
      </div>
    );
  }
}



function Project({ image, title, description, chip }) {
  return (
    <Card mb={6}>
      {image ? <CardMedia image={image} title="Contemplative Reptile" /> : null}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>

        {chip}
        

        <Typography mb={4} component="p">
          {description}
        </Typography>

        <AvatarGroup max={3}>
          <Avatar alt="Avatar" src="/static/img/avatars/avatar-1.jpg" />
          <Avatar alt="Avatar" src="/static/img/avatars/avatar-2.jpg" />
          <Avatar alt="Avatar" src="/static/img/avatars/avatar-3.jpg" />
        </AvatarGroup>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

function Projects() {
  return (
    <React.Fragment>
      <Helmet title="Mis Grupos" />
      
      <Typography variant="h3" gutterBottom display="inline">
        Mis grupos
      </Typography>

      {/* <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/">
          Pages
        </Link>
        <Typography>Projects</Typography>
      </Breadcrumbs> */}

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Spotify Premium Family PRO"
            description="Familia Equizabal"
            chip={<Chip label="Administrador" 
            rgbcolor={green[500]}
             />
            }
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Company posters"
            description="Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa."
            chip={<Chip label="Miembro" rgbcolor={orange[500]} />}
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Product page design"
            description="Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum."
            chip={<Chip label="Finished" rgbcolor={green[500]} />}
          />
        </Grid>
        <Grid item xs={12} lg={6} xl={3}>
          <Project
            title="Upgrade CRM software"
            description="Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris."
            chip={<Chip label="In progress" rgbcolor={orange[500]} />}
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}

export default JoinToGroup;
// export default Projects;
