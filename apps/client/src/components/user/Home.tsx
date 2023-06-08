import { Box, Button } from '@mui/material';
import { trpc } from "@trpc";

export const Home = () => {
  const { data } = trpc.user.useQuery();
  return (
    <Box>
      {/* {`Role: ${data?.role}`} */}
      <Button variant="outlined" color="secondary" size="small"> heelo </Button>
    </Box>
  );
};