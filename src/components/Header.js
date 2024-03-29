import React, { useState } from "react";
import styled, { withTheme } from "styled-components";
import { connect } from "react-redux";
import { darken } from "polished";
import firebase from "firebase";
import SendBird from 'sendbird';
import { useHistory } from 'react-router-dom';
import {
  Badge,
  Grid,
  Hidden,
  InputBase,
  Menu,
  MenuItem,
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar
} from "@material-ui/core";

import { Menu as MenuIcon } from "@material-ui/icons";
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import LocalAtmRoundedIcon from '@material-ui/icons/LocalAtmRounded';
import {
  Bell,
  MessageSquare,
  Search as SearchIcon,
  Power
} from "react-feather";

const AppBar = styled(MuiAppBar)`
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
  box-shadow: ${props => props.theme.shadows[1]};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

const Indicator = styled(Badge)`
  .MuiBadge-badge {
    background: ${props => props.theme.header.indicator.background};
    color: ${props => props.theme.palette.common.white};
  }
`;

const Search = styled.div`
  border-radius: 2px;
  background-color: ${props => props.theme.header.background};
  display: none;
  position: relative;
  width: 100%;

  &:hover {
    background-color: ${props => darken(0.05, props.theme.header.background)};
  }

  ${props => props.theme.breakpoints.up("md")} {
    display: block;
  }
`;

const SearchIconWrapper = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }
`;

const Input = styled(InputBase)`
  color: inherit;
  width: 100%;

  > input {
    color: ${props => props.theme.header.search.color};
    padding-top: ${props => props.theme.spacing(2.5)}px;
    padding-right: ${props => props.theme.spacing(2.5)}px;
    padding-bottom: ${props => props.theme.spacing(2.5)}px;
    padding-left: ${props => props.theme.spacing(12)}px;
    width: 160px;
  }
`;

const Flag = styled.img`
  border-radius: 50%;
  width: 22px;
  height: 22px;
`;

function LanguageMenu() {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const toggleMenu = event => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  

  return (
    <React.Fragment>
      <IconButton
        aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
        aria-haspopup="true"
        onClick={toggleMenu}
        color="inherit"
      >
        <Flag src="/static/img/flags/us.png" alt="English" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>
          English
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          French
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          German
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          Dutch
        </MenuItem>
      </Menu>
    </React.Fragment>
  )
}

function UserMenu() {
  const [anchorMenu, setAnchorMenu] = useState(null);

  const toggleMenu = event => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };
  const history = useHistory();
  const myprofile = () => {
    // history.push("/myprofile");
  }
  
  const mywallet = () => {
    history.push("/mywallet");
  }

  const mynotifications = () => {
    history.push("/myNotifications");
  }

  const logout = () => {
    try {    
      // var sb = new SendBird({appId: "A366089E-7472-461F-9BC8-76A8EA1E31E1"});
      firebase.auth().signOut();
      // sb.disconnect(function() {});
      localStorage.clear();
      window.location.reload();
    } catch (err) {
     console.log('err:', err);
    }
   }

  return (
    <React.Fragment>



      
    


      <IconButton
        aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
        aria-haspopup="true"
        onClick={toggleMenu}
        color="inherit"
      >
        <Power />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        {/* <MenuItem onClick={myprofile}>
          Mi perfil
        </MenuItem> */}
        <MenuItem onClick={logout}>
          Cerrar sesión
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

const Header = ({ onDrawerToggle }) => (
  <React.Fragment>
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center">
          <Hidden mdUp>
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
          {/* <Grid item>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <Input placeholder="Busca grupos" />
            </Search>
          </Grid> */}
          <Grid item xs />
          <Grid item>
            {/* <IconButton color="inherit"> */}
              {/* <Indicator badgeContent={3}> */}
                {/* <MessageSquare /> */}
              {/* </Indicator> */}
            {/* </IconButton> */}

           

  

            {/* <LanguageMenu /> */}
            <UserMenu />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default connect()(withTheme(Header));
