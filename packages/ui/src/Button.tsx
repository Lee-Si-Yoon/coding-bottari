export function CustomButton(props: any) {
  return <button onClick={() => props.onClick()}>{props.label}</button>;
}

export default CustomButton;
