import { ArrowBackIos } from '@mui/icons-material';
import { TabContext, TabList } from '@mui/lab';
import { Box, Link, Tab, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const inputs = [
  {
    label: 'Date',
  },
  {
    label: 'Account',
  },
  {
    label: 'Category',
  },
  {
    label: 'Amount',
  },
  {
    label: 'Note',
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

const New = () => {
  const [value, setValue] = useState<string>('0');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) =>
    setValue(newValue);

  return (
    <div>
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
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          {tabs.map((tab, index) => (
            <Tab key={index} {...tab} />
          ))}
        </TabList>
        <Box autoComplete="off" component="form">
          {inputs.map(({ label }, index) => (
            <Box key={index} sx={{ m: 3 }}>
              <TextField
                fullWidth
                label={label}
                required
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
          ))}
        </Box>
      </TabContext>
    </div>
  );
};

export default New;
