'use client';

import { CustomButton } from '@bottari/ui';

export default function Home() {
  return (
    <main>
      <CustomButton
        onClick={() => {
          window.alert('clicked');
        }}
      >
        button
      </CustomButton>
    </main>
  );
}
