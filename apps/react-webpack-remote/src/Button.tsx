import React from 'react';

const Button = () => {
  React.useEffect(() => {
    console.log('hooks work');
  }, []);

  return <button>Remote Button</button>;
};

export default Button;
