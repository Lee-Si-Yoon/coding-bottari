import { CustomButton } from '@bottari/ui';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}
    >
      <CustomButton>CustomButton</CustomButton>
    </main>
  );
}
