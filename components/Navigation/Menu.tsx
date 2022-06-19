import React, { useEffect, useState } from 'react';
import {
  AccountBalance,
  AccountBalanceWallet,
  InsertChart,
  Settings,
} from '@mui/icons-material';
import { Box, Tab, Tabs } from '@mui/material';
import { useRouter } from 'next/router';

interface ILinkTab {
  href: string;
  label: string;
  value: number;
  icon: JSX.Element;
}

const LinkTab = (props: ILinkTab) => <Tab {...props} />;

const Menu = () => {
  const { route } = useRouter();

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const tabs = {
      '/transactions': 0,
      '/stats': 1,
      '/accounts': 2,
      '/settings': 3,
    };

    setActiveTab(tabs[route]);
  }, [route]);

  const getLinkTabItems = () => {
    const date = new Date();
    const transactionsLabel = `${date.getMonth().toString()}/${date
      .getDate()
      .toString()}`;

    return [
      {
        href: '/transactions',
        icon: <AccountBalanceWallet fontSize="large" />,
        label: transactionsLabel,
      },
      {
        href: '/stats',
        icon: <InsertChart fontSize="large" />,
        label: 'Stats',
      },
      {
        href: '/accounts',
        icon: <AccountBalance fontSize="large" />,
        label: 'Account',
      },
      {
        href: '/settings',
        icon: <Settings fontSize="large" />,
        label: 'More',
      },
    ];
  };

  const linkTabItems = getLinkTabItems();

  return (
    <Box sx={{ borderTop: 1, borderColor: 'divider' }}>
      <Tabs value={activeTab} variant="fullWidth">
        {linkTabItems.map((linkTabItem, index) => (
          <LinkTab key={index} value={index} {...linkTabItem} />
        ))}
      </Tabs>
    </Box>
  );
};

export default Menu;
