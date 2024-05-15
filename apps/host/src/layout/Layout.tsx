import type React from 'react';
import { Inter } from 'next/font/google';

import styles from './Layout.module.css';
import Header from './Header';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <Header />
      <main className={`${inter.className} ${styles.Main}`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
