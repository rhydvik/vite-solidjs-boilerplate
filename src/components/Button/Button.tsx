import { Button as SButton } from '@suid/material';

export type Props = {
  class?: string;
  variant: 'contained' | 'outlined' | 'text';
  label: string;
  sx?: unknown;
};

function Button({ variant, label, sx }: Props) {
  return (
    <SButton variant={variant} sx={sx}>
      <div>{label}</div>
    </SButton>
  );
}

export default Button;
