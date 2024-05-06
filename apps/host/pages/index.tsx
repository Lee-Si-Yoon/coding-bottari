import { CustomButton } from '@bottari/ui';
import { Inter } from 'next/font/google';
import React from 'react';
import ReactWebpackRemoteButton from '@bottari/reactWebpack/button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center ${inter.className}`}
    >
      <h1>Next JS and React</h1>
      <h2>Host - Button</h2>
      <CustomButton>CustomButton</CustomButton>
      <h2>React remote - Button</h2>
      <ReactWebpackRemoteButton />
    </main>
  );
}
