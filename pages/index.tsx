import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>NextJS - Expenses</title>
      <meta name="NextJS Project" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Link href="/transactions">
        <a>Transactions</a>
      </Link>
    </main>
  </div>
);

export default Home;
