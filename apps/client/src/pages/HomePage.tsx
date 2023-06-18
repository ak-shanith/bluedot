import {
  Box,
  Button,
  Typography
} from "@mui/material";


import { t } from "@trpc";

export const HomePage = () => {
  const { data } = t.user.useQuery();
  return (
    <Box
      sx={{
        m: "8px",
        ml: "0px",
        pt: "42px",
        display: "flex",
        borderRadius: "8px",
        flexDirection: "column",
        alignItems: "center",
        height: "calc(100vh - 16px)",
        width: "100vw",
        backgroundColor: "background.paper",
        overflow: "hidden",
        overflowY: "scroll",
        // background: 'linear-gradient(to bottom, #282C34, transparent)'
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
