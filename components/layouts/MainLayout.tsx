import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';
import { ReactNode } from 'react';

type Children = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Children) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Edgar Lazaro</title>
        <meta name='description' content='Home Page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
