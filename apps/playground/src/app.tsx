import { CustomButton } from '@bottari/ui';
import './App.css';
import React from 'react';

function App(): React.ReactNode {
  return (
    <CustomButton
      onClick={() => {
        // eslint-disable-next-line no-alert -- for test
        window.alert('clicked');
      }}
    >
      button
    </CustomButton>
  );
}

export { App };
