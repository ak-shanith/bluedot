import { More, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar } from "@mui/material";

import UserAvatar from "../../assets/images/user-avatar.jpg";

const drawerWidth = 300;

export const TitleBar = () => {
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
      </Toolbar>
    </AppBar>
  );
};
