import styled from '@emotion/styled';
import { Box, Link as MUILink } from '@mui/material';
import Link from 'next/link';

const BoxStyled = styled(Box)`
  align-items: center;
  background-color: #765d69;
  border-radius: 0 0 25px 25px;
  display: flex;
  justify-content: space-between;
  padding: 25px;
`;

const MUILinkStyled = styled(MUILink)`
  color: #fff;
  font: normal 1rem 'Rubik';
  text-decoration: none;
`;

const Menu = () => (
  <BoxStyled>
    <Link href="/records" passHref>
      <MUILinkStyled>Records</MUILinkStyled>
    </Link>
    <Link href="/stats" passHref>
      <MUILinkStyled>Stats</MUILinkStyled>
    </Link>
    <Link href="/accounts" passHref>
      <MUILinkStyled>Accounts</MUILinkStyled>
    </Link>
    <Link href="/more" passHref>
      <MUILinkStyled>...</MUILinkStyled>
    </Link>
  </BoxStyled>
);

export default Menu;
