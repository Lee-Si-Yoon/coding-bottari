import { CustomButton } from '@bottari/ui';
import './App.css';

function App(): JSX.Element {
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
