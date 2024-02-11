import React from 'react';

export function CustomButton(props: {
  children?: React.ReactNode;
  onClick?: VoidFunction;
}): React.ReactNode {
  return (
    <button
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
      type="button"
    >
      {props.children}
    </button>
  );
}
