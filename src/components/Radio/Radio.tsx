import {
  RadioGroup as SRadioGroup,
  Radio as SRadio,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '@suid/material';

export type RadioOption = {
  label: string;
  value: unknown;
  checked?: boolean;
};

export type Props = {
  id: string;
  label?: string;
  labelPlacement?: 'start' | 'top' | 'bottom' | 'end';
  disabled?: boolean;
  options: RadioOption[];
  color?: 'default' | 'primary' | 'secondary';
  classes?: string;
  onClick?: (value: unknown) => void;
  flowDirection?: 'row' | 'column';
  name?: string;
};

function Radio({
  id,
  label,
  name,
  labelPlacement = 'end',
  disabled,
  options,
  color,
  classes,
  onClick,
  flowDirection = 'row',
}: Readonly<Props>) {
  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <SRadioGroup
        name={name}
        aria-labelledby={id}
        sx={{ flexDirection: flowDirection }}
      >
        {options.map((option) => (
          <FormControlLabel
            value={option.value}
            control={
              <SRadio
                disabled={disabled}
                checked={option.checked === true || false}
                onClick={() => onClick && onClick(option.value)}
                color={color}
                class={classes}
              />
            }
            label={option.label}
            labelPlacement={labelPlacement}
          />
        ))}
      </SRadioGroup>
    </FormControl>
  );
}

export default Radio;
