import { Box, Button, Stack, Typography } from '@mui/material';
import Layout from '../../components/Layout';

const Transactions = () => {
  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Stack direction="row" spacing={2}>
          <Typography>Income</Typography>
          <Typography>Expenses</Typography>
          <Typography>Total</Typography>
        </Stack>
      </Box>
      <Box sx={{ textAlign: 'right' }}>
        <Button href="/transactions/new" sx={{ m: 1 }} variant="contained">
          <Typography>+</Typography>
        </Button>
      </Box>
    </Layout>
  );
};

export default Transactions;
