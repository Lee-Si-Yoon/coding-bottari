export function CustomButton(props: {
  children?: React.ReactNode;
  onClick?: VoidFunction;
}): JSX.Element {
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
