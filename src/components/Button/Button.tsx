import { JSX } from 'solid-js';

type ButtonProps = {
  class: string;
  children: JSX.Element;
};
function Button(props: ButtonProps) {
  return (
    <button class={props.class}>
      <div>{props.children}</div>
    </button>
  );
}

export default Button;
