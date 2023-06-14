import { AppBar, Toolbar, Typography } from "@mui/material";

const drawerWidth = 300;

export const TitleBar = () => {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        color: "text.primary",
        backdropFilter: "blur(10px)",
        elevation: 0,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography variant="h6" noWrap component="div">
          bluedot
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
