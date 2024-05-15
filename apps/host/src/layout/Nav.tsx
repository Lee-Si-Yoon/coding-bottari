import Link from 'next/link';
import { Inter } from 'next/font/google';

import styles from './Nav.module.css';

const inter = Inter({ subsets: ['latin'] });

const Nav = () => {
  return (
    <nav className={`${inter.className}`}>
      <ul className={styles.UnorderedList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
