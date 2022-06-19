import { Box, Typography } from '@mui/material';

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

export default TabPanel;
