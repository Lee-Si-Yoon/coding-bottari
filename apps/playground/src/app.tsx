import React from 'react';
import { CustomButton } from '@bottari/ui';
import './app.css';

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
