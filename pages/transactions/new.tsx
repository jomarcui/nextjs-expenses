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
import { useForm } from 'react-hook-form';

type FormData = {
  date: string;
  account: string;
  category: string;
  amount: number;
  note?: string;
};

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const [value, setValue] = useState<string>('0');

  const inputs = [
    {
      label: 'Date',
      registerAs: register('date'),
      required: true,
    },
    {
      label: 'Account',
      registerAs: register('account'),
      required: true,
    },
    {
      label: 'Category',
      registerAs: register('category'),
      required: true,
    },
    {
      label: 'Amount',
      registerAs: register('amount'),
      required: true,
    },
    {
      label: 'Note',
      registerAs: register('note'),
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

  const handleFormSubmit = handleSubmit((data) => console.log('data', data));

  return (
    <div>
      <BackButton />
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          {tabs.map((tab, index) => (
            <Tab key={index} {...tab} />
          ))}
        </TabList>
        <Box autoComplete="off" component="form" onSubmit={handleFormSubmit}>
          {inputs.map(({ label, registerAs, required }, index) => (
            <Box key={index} sx={{ m: 3 }}>
              <TextField
                fullWidth
                label={label}
                required={required}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                {...registerAs}
              />
            </Box>
          ))}
          <Box sx={{ m: 3 }}>
            <Stack direction="row" spacing={2}>
              <Button
                color="primary"
                variant="contained"
                sx={{ width: '100%' }}
                type="submit"
              >
                Save
              </Button>
              <Button color="secondary" variant="contained">
                Continue
              </Button>
            </Stack>
          </Box>
        </Box>
      </TabContext>
    </div>
  );
};

export default New;
