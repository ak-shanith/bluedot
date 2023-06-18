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
      onClick: () => navigate("/users"),
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
        m: "8px",
        borderRadius: "8px",
        width: "calc(100vw * 0.2)",
        height: "calc(100vh - 16px)",
        minWidth: "300px",
        maxWidth: "420px",
        flexShrink: 0,
        border: "none",
        [`& .MuiDrawer-paper`]: {
          m: "8px",
          borderRadius: "8px",
          width: "calc(100vw * 0.2)",
          height: "calc(100vh - 16px)",
          minWidth: "300px",
          maxWidth: "420px",
          boxSizing: "border-box",
          backgroundColor: "background.paper",
          border: "none",
        },
      }}
    >
      <Box
        sx={{
          color: "text.primary",
          m: "8px",
        }}
      >
        <List>
          {list1.map((itm, index) => (
            <ListItem key={itm.text} onClick={itm.onClick} disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    borderRadius: "8px",
                  },
                }}
              >
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
        <Divider sx={{ m: "12px" }} />
        <List>
          {list2.map((itm, index) => (
            <ListItem key={itm.text} onClick={itm.onClick} disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    borderRadius: "8px",
                  },
                }}
              >
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
