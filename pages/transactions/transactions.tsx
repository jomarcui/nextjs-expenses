import { SetStateAction, useState } from 'react';
import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import Layout from '../../components/Layout';

enum TabLabel {
  INCOME,
  EXPENSES,
  TOTAL,
}

interface TabPanelProps {
  index: number;
  children?: React.ReactNode;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} id={`tabpanel-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const Transactions = () => {
  const [value, setValue] = useState<TabLabel>(TabLabel.INCOME);

  const handleChange = (
    _event: React.SyntheticEvent,
    newValue: SetStateAction<TabLabel>
  ) => setValue(newValue);

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        <Tabs value={value} variant="fullWidth" onChange={handleChange}>
          <Tab label="Income" value={TabLabel.INCOME} />
          <Tab label="Expenses" value={TabLabel.EXPENSES} />
          <Tab label="Total" value={TabLabel.TOTAL} />
        </Tabs>
        <TabPanel index={0} value={value}>
          Income
        </TabPanel>
        <TabPanel index={1} value={value}>
          Expenses
        </TabPanel>
        <TabPanel index={2} value={value}>
          Total
        </TabPanel>
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
