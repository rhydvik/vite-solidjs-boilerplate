import { Checkbox as SCheckbox, FormControlLabel } from '@suid/material';

export type Props = {
  label: string;
  disabled?: boolean;
  checked?: boolean;
  value?: string;
  onClick?: () => void;
  color?: 'default' | 'primary' | 'secondary';
};

function Checkbox({
  label,
  disabled,
  checked,
  value,
  onClick,
  color,
  ...rest
}: Readonly<Props>) {
  return (
    <FormControlLabel
      label={label}
      control={
        <SCheckbox
          disabled={disabled}
          checked={checked}
          value={value}
          onClick={onClick}
          color={color}
          {...rest}
        />
      }
    />
  );
}

export default Checkbox;
