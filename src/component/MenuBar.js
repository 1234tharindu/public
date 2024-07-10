// src/components/MenuBar.js
import * as React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import HomeIcon from "@mui/icons-material/Home";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import NwsdbLogo from "../images/nwsdb_ogo.png";
import NwsdbLogo1 from "../images/image.png";

function MenuBar(props) {
  const {
    handleDrawerToggle,
    profileMenuAnchor,
    handleProfileMenuOpen,
    handleProfileMenuClose,
  } = props;

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#004085" }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Avatar
          src={NwsdbLogo1}
          sx={{ mr: 1, width: 70, height: 70, pt: 1 }}
          alt="Logo"
        />
        {/* <Avatar src="/broken-image.jpg" /> */}
        <IconButton
          color="inherit"
          component={NavLink}
          to="/homecard"
          sx={{ color: "inherit" }}
        >
          <HomeIcon fontSize="large" />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          ERP SYSTEM NWSDB
        </Typography>

        <Avatar
          src="/broken-image.jpg"
          alt="Profile"
          onClick={handleProfileMenuOpen}
        />
        <Menu
          anchorEl={profileMenuAnchor}
          open={Boolean(profileMenuAnchor)}
          onClose={handleProfileMenuClose}
        >
          <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleProfileMenuClose}>Sign Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

MenuBar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  profileMenuAnchor: PropTypes.object,
  handleProfileMenuOpen: PropTypes.func.isRequired,
  handleProfileMenuClose: PropTypes.func.isRequired,
};

export default MenuBar;
