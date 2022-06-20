import { ArrowBackIos } from '@mui/icons-material';
import { TabContext, TabList } from '@mui/lab';
import {
  Box,
  Button,
  Link,
  Stack,
  Tab,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const BackButton = () => (
  <Link href="/transactions" title="Back">
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        p: 2,
      }}
    >
      <ArrowBackIos />
      <Typography>Transactions</Typography>
    </Box>
  </Link>
);

const New = () => {
  const [value, setValue] = useState<string>('0');

  const inputs = [
    {
      label: 'Date',
      required: true,
    },
    {
      label: 'Account',
      required: true,
    },
    {
      label: 'Category',
      required: true,
    },
    {
      label: 'Amount',
      required: true,
    },
    {
      label: 'Note',
      required: false,
    },
  ];

  const tabs = [
    {
      label: 'Income',
      value: '0',
    },
    {
      label: 'Expense',
      value: '1',
    },
    {
      label: 'transfer',
      value: '2',
    },
  ];

  const handleChange = (_event: React.SyntheticEvent, newValue: string) =>
    setValue(newValue);

  return (
    <div>
      <BackButton />
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          {tabs.map((tab, index) => (
            <Tab key={index} {...tab} />
          ))}
        </TabList>
        <Box autoComplete="off" component="form">
          {inputs.map(({ label, required }, index) => (
            <Box key={index} sx={{ m: 3 }}>
              <TextField
                fullWidth
                label={label}
                required={required}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          ))}
        </Box>
        <Box sx={{ p: 3 }}>
          <Stack direction="row" spacing={2}>
            <Button color="primary" variant="contained" sx={{ width: '100%' }}>
              Save
            </Button>
            <Button color="secondary" variant="contained">
              Continue
            </Button>
          </Stack>
        </Box>
      </TabContext>
    </div>
  );
};

export default New;
