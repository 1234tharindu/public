// src/components/ResponsiveDrawer.js
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
//import menuItems from "../data/menuItems1.json";
import apiClient from "../api/baseService";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const {
    window,
    children,
    moduleId,
    // handleDrawerToggle,
    mobileOpen,
    handleDrawerClose,
    handleDrawerTransitionEnd,
    // isClosing,
  } = props;
  //const [openGroupId, setOpenGroupId] = React.useState(null);
  // const navigate = useNavigate();
  //new
  const [openGroupId, setOpenGroupId] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await apiClient.get('/GetAllTask');
        setMenuData(response.data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };
    
    fetchMenuData();
  }, []);

  const handleToggleMenu = (groupId) => {
    setOpenGroupId((prevOpenGroupId) =>
      prevOpenGroupId === groupId ? null : groupId
    );
  };

  const handleTask = (pageUrl) => {
    navigate(pageUrl);
  };

  // const moduleData = menuItems.modules.find(
  //   (module) => module.moduleId === moduleId
  // );\
  const moduleData = menuData.find((module) => module.moduleId === moduleId);


  console.log("Module Data:", moduleData);
  const filteredGroups = moduleData ? moduleData.groups : [];

  const renderMenuItems = (groups) => {
    return groups.map((group, key) => (
      <React.Fragment key={key}>
        <ListItemButton
          key={group.groupId}
          onClick={() => handleToggleMenu(group.groupId)}
          sx={{
            bgcolor: "#004085",
            color: "white",
            "&.active": {
              bgcolor: "grey.500",
              color: "white",
            },
          }}
        >
          <ListItemText primary={group.groupName} />
          {openGroupId === group.groupId ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={openGroupId === group.groupId}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            {group.tasks.map((task, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleTask(task.pageUrl)}
                  sx={{
                    pl: 4,
                    bgcolor: "inherit",
                    color: "inherit",
                    "&.active": {
                      bgcolor: "grey.500",
                      color: "white",
                    },
                  }}
                  activeClassName="active"
                >
                  <ListItemText primary={task.taskName} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    ));
  };

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          {moduleData ? moduleData.ModuleName : "Module Name"}
        </Typography>
        {console.log(
          "Module Name:",
          moduleData ? moduleData.ModuleName : "Module Name"
        )}
      </Toolbar>
      <Divider />
      <List>{renderMenuItems(filteredGroups)}</List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node,
  moduleId: PropTypes.number.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  handleDrawerTransitionEnd: PropTypes.func.isRequired,
  isClosing: PropTypes.bool.isRequired,
};

export default ResponsiveDrawer;
