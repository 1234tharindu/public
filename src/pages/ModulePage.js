// // src/pages/ModulePage.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Box, List, ListItemButton, ListItemText, Collapse } from '@mui/material';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import menuItems from '../data/menuItems.json';

// function ModulePage() {
//   const { moduleId } = useParams();
//   const [openGroupId, setOpenGroupId] = React.useState(null);

//   const module = menuItems.modules.find((mod) => mod.ModuleId === parseInt(moduleId));

//   const handleToggleGroup = (groupId) => {
//     setOpenGroupId((prevOpenGroupId) => (prevOpenGroupId === groupId ? null : groupId));
//   };

//   if (!module) {
//     return <div>Module not found</div>;
//   }

//   return (
//     <Box>
//       <List>
//         {module.groups.map((group) => (
//           <React.Fragment key={group.GroupId}>
//             <ListItemButton onClick={() => handleToggleGroup(group.GroupId)}>
//               <ListItemText primary={group.GroupName} />
//               {openGroupId === group.GroupId ? <ExpandLess /> : <ExpandMore />}
//             </ListItemButton>
//             <Collapse in={openGroupId === group.GroupId} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {group.tasks.map((task) => (
//                   <ListItemButton key={task.TaskId} component="a" href={task.url}>
//                     <ListItemText primary={task.Description} />
//                   </ListItemButton>
//                 ))}
//               </List>
//             </Collapse>
//           </React.Fragment>
//         ))}
//       </List>
//     </Box>
//   );
// }

// export default ModulePage;
