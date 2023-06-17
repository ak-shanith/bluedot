import { Box, Button, Typography } from "@mui/material";

import { t } from "@trpc";

export const UsersPage = () => {
  const { data } = t.user.useQuery();
  return (
    <Box
      sx={{
        m: "8px",
        ml: "0px",
        display: "flex",
        borderRadius: "8px",
        flexDirection: "column",
        alignItems: "center",
        height: "calc(100vh - 16px)",
        width: "100vw",
        backgroundColor: "background.paper",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Typography variant="h1">Users</Typography>
      {`UserRole: ${data?.role}`}
      <Button variant="outlined" color="secondary" size="small">
        {" "}
        heelo2{" "}
      </Button>
    </Box>
  );
};
