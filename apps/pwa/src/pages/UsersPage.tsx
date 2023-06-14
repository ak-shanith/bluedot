import { Box, Button, Typography } from '@mui/material';

import { t } from "@trpc";


export const UsersPage= () => {
  const { data } = t.user.useQuery();
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'secondary.main',
    }}>
      <Typography variant="h1">Users</Typography>
      {`UserRole: ${data?.role}`}
      <Button variant="outlined" color="secondary" size="small"> heelo2 </Button>
    </Box>
  );
};