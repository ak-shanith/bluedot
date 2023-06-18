import { More, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import UserAvatar from "../../assets/images/user-avatar.png";

export const TitleBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { logout } = useAuth0();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logout();
  };

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        pt: "16px",
        pr: "24px",
        color: "text.primary",
        // backdropFilter: "blur(10px)",
        elevation: 0,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 2 new notifications"
            color="inherit"
            sx={{ ":hover": { backgroundColor: "transparent" } }}
          >
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
            onClick={handleClick}
          >
            <Avatar alt="Blue Dot" src={UserAvatar} />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="show more"
            // aria-controls={mobileMenuId}
            aria-haspopup="true"
            // onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <More />
          </IconButton>
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
