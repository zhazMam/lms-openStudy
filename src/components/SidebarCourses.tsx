import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BookIcon from "@mui/icons-material/Book";
import BarChartIcon from "@mui/icons-material/BarChart";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface NavItem {
  id: string;
  text: string;
  icon: React.ReactNode;
}
const navItems: NavItem[] = [
  { id: "lectures", text: "Lectures", icon: <MenuBookIcon /> },
  { id: "books", text: "Books", icon: <BookIcon /> },
  { id: "grades", text: "Grades", icon: <BarChartIcon /> },
  { id: "attendance", text: "Attendance", icon: <DomainVerificationIcon /> },
];

export default function SidebarCourses() {
  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Drawer anchor="left" variant="permanent">
      <Typography textAlign={"center"} variant="h5"><Link to="/main">Open Study</Link></Typography>
      {drawerContent}
    </Drawer>
  );
}
