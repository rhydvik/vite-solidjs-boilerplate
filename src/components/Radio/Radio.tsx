import { Radio as SRadio } from '@suid/material';

export type Props = {
  label: string;
  disabled?: boolean;
  checked?: boolean;
  value?: string;
  onClick?: () => void;
  color?: 'default' | 'primary' | 'secondary';
};

function Radio({
  label,
  disabled,
  checked,
  value,
  onClick,
  color,
  ...rest
}: Readonly<Props>) {
  return (
    <>
      <SRadio
        disabled={disabled}
        checked={checked}
        value={value}
        onClick={onClick}
        color={color}
        {...rest}
      />
      <span>{label}</span>
    </>
  );
}

export default Radio;
