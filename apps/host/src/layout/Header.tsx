import { Inter } from 'next/font/google';

import styles from './Header.module.css';
import Nav from './Nav';

const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  return (
    <header className={`${inter.className} ${styles.Header}`}>
      header
      <Nav />
    </header>
  );
};

export default Header;
