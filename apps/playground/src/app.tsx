import React from 'react';
import { CustomButton } from '@bottari/ui';
import './app.css';

function App(): React.ReactNode {
  return (
    <CustomButton
      onClick={() => {
        window.alert('clicked');
      }}
    >
      button
    </CustomButton>
  );
}

export { App };
