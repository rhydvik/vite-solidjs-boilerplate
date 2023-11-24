import {
  RadioGroup as SRadioGroup,
  Radio as SRadio,
  FormControl,
  FormControlLabel,
} from '@suid/material';

export type RadioOption = {
  label: string;
  value: string;
  checked?: boolean;
};

export type Props = {
  label: string;
  labelPlacement?: 'start' | 'top' | 'bottom' | 'end';
  disabled?: boolean;
  options: RadioOption[];
  color?: 'default' | 'primary' | 'secondary';
  classes?: string;
  onClick?: (value: unknown) => void;
  flowDirection?: 'row' | 'column';
};

function Radio({
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
      <SRadioGroup sx={{ flexDirection: flowDirection }}>
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
