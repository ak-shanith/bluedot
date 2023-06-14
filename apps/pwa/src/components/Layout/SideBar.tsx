import {
  AccountTree,
  Assessment,
  AttachMoney,
  AutoAwesomeMotion,
  Home,
  Settings,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const drawerWidth = 300;

export const SideBar = () => {
  const navigate = useNavigate();

  const list1 = [
    {
      text: "Home",
      icon: <Home />,
      onClick: () => navigate("/"),
    },
    {
      text: "Products",
      icon: <AutoAwesomeMotion />,
      onClick: () => navigate("/products"),
    },
    {
      text: "Funds",
      icon: <AttachMoney />,
      onClick: () => navigate("/funds"),
    },
    {
      text: "Workflows",
      icon: <AccountTree />,
      onClick: () => navigate("/workflows"),
    },
  ];
  const list2 = [
    {
      text: "Reports",
      icon: <Assessment />,
      onClick: () => navigate("/reports"),
    },
    {
      text: "Settings",
      icon: <Settings />,
      onClick: () => navigate("/settings"),
    },
  ];

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "transparent",
        },
      }}
    >
      <Box
        sx={{
          pt: 8,
          color: "text.primary",
        }}
      >
        <List>
          {list1.map((itm, index) => (
            <ListItem key={itm.text} onClick={itm.onClick} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: grey[800],
                  }}
                >
                  {itm.icon}
                </ListItemIcon>
                <ListItemText primary={itm.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {list2.map((itm, index) => (
            <ListItem key={itm.text} onClick={itm.onClick} disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color: grey[800],
                  }}
                >
                  {itm.icon}
                </ListItemIcon>
                <ListItemText primary={itm.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
