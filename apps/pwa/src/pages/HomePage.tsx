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
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "primary.main",
        pt: 8,
      }}
    >
      <Typography variant="h1">Home</Typography>
      <Button variant="outlined" color="secondary" size="small">
        OK
      </Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
      <Button color="secondary">OK</Button>
    </Box>
  );
};
