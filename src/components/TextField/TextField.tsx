import { TextField as STextField } from '@suid/material';

export type Props = {
  variant: 'standard' | 'outlined' | 'filled';
  label: string;
  id: string;
};

function TextField({ variant, label, id }: Props) {
  return <STextField id={id} variant={variant} label={label} />;
}

export default TextField;
