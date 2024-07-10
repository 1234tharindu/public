// MainLayout.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResponsiveDrawer from "./ResponsiveDrawer";
import MenuBar from "./MenuBar";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import Footer from "../component/Footer";

const drawerWidth = 240;

export default function MainLayout() {
  const location = useLocation();
  const [moduleId, setModuleId] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [profileMenuAnchor, setProfileMenuAnchor] = useState(null);

  useEffect(() => {
    console.log("MODULE", location.state?.key);
    setModuleId(location.state?.key);
  }, []);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <CssBaseline />
        <MenuBar
          handleDrawerToggle={handleDrawerToggle}
          profileMenuAnchor={profileMenuAnchor}
          handleProfileMenuOpen={handleProfileMenuOpen}
          handleProfileMenuClose={handleProfileMenuClose}
        />
        <Box
          sx={{
            display: "flex",
            flex: 1,
            paddingTop: "20px",
            paddingLeft: "20px",
            overflow: "hidden",
          }}
        >
          <ResponsiveDrawer
            moduleId={moduleId}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
            handleDrawerClose={handleDrawerClose}
            handleDrawerTransitionEnd={handleDrawerTransitionEnd}
            isClosing={isClosing}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              backgroundColor: "#f0f0f0",
              borderRadius: "8px",
              boxShadow: 3,
              mt: 10,
              ml: -10,
              mr: 5,
              mb: 10,
              width: "100%",
              flex: 1,
              overflow: "hidden",
            }}
          >
            <Outlet />
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
