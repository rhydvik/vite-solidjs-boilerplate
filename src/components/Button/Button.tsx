import { Button as SButton } from '@suid/material';

export type Props = {
  class?: string;
  variant: 'contained' | 'outlined' | 'text';
  label: string;
  sx?: unknown;
  onClick?: () => void;
};

function Button({ variant, label, sx, onClick }: Props) {
  return (
    <SButton variant={variant} sx={sx} onClick={() => onClick && onClick()}>
      <div>{label}</div>
    </SButton>
  );
}

export default Button;
