import { JSX } from 'solid-js';

export type ButtonProps = {
  class: string;
  children: JSX.Element;
};
function Button(props: ButtonProps) {
  return (
    <button>
      <div>{props.children}</div>
    </button>
  );
}

export default Button;
