import { Button as SButton } from '@suid/material';

export type ButtonProps = {
  class: string;
  variant: 'contained' | 'outlined' | 'text';
  label: string;
};

function Button({ variant, label }: ButtonProps) {
  return (
    <SButton variant={variant}>
      <div>{label}</div>
    </SButton>
  );
}

export default Button;
