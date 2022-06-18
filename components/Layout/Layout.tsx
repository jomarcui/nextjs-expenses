import styled from '@emotion/styled';
import { Box, Container } from '@mui/material';
import Head from 'next/head';
import Menu from '../Navigation/Menu';

const BoxStyled = styled(Box)`
  padding: 25px;
`;

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>NextJS - Expenses</title>
      <meta name="NextJS Project" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container maxWidth="md">
      <BoxStyled>{children}</BoxStyled>
      <Menu />
    </Container>
  </div>
);

export default Layout;
