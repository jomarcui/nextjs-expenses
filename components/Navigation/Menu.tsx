import styled from '@emotion/styled';
import {
  AccountBalance,
  AccountBalanceWallet,
  InsertChart,
  Settings,
} from '@mui/icons-material';
import { Box, Link as MUILink } from '@mui/material';
import Link from 'next/link';

const BoxStyled = styled(Box)`
  align-items: center;
  background-color: #765d69;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

const MUILinkStyled = styled(MUILink)`
  color: #fff;
  text-decoration: none;
`;

const Menu = () => (
  <BoxStyled>
    <Link href="/transactions" passHref>
      <MUILinkStyled>
        <AccountBalanceWallet fontSize="large" />
      </MUILinkStyled>
    </Link>
    <Link href="/stats" passHref>
      <MUILinkStyled>
        <InsertChart fontSize="large" />
      </MUILinkStyled>
    </Link>
    <Link href="/accounts" passHref>
      <MUILinkStyled>
        <AccountBalance fontSize="large" />
      </MUILinkStyled>
    </Link>
    <Link href="/settings" passHref>
      <MUILinkStyled>
        <Settings fontSize="large" />
      </MUILinkStyled>
    </Link>
  </BoxStyled>
);

export default Menu;
