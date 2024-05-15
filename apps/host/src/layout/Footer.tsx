import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Footer = () => {
  return <footer className={`${inter.className}`}>footer</footer>;
};

export default Footer;
