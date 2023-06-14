import { Box, Button, Typography } from "@mui/material";

import { t } from "@trpc";

export const HomePage = () => {
  const { data } = t.user.useQuery();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "primary.main",
      }}
    >
      <Typography variant="h1">Home</Typography>
      <Button variant="outlined" color="secondary" size="small">
        OK
      </Button>
    </Box>
  );
};
