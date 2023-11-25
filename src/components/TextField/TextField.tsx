import { TextField as STextField, InputAdornment } from '@suid/material';

export type Props = {
  variant: 'standard' | 'outlined' | 'filled';
  label: string;
  placeholder?: string;
  id: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  type?: 'password' | 'number' | 'search';
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  InputAdornmentPosition?: 'start' | 'end';
  InputAdornmentText?: string;
  startAdornmentFlag?: boolean;
  classes?: string;
  size?: 'small' | string;
};

function TextField({
  variant,
  label,
  placeholder,
  id,
  required,
  disabled,
  type,
  helperText,
  error,
  multiline = false,
  rows,
  InputAdornmentPosition,
  startAdornmentFlag = false,
  InputAdornmentText,
  classes,
  size = 'small',
  ...rest
}: Props) {
  return (
    <STextField
      id={id}
      variant={variant}
      label={label}
      required={required}
      disabled={disabled}
      type={type}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      multiline={multiline}
      rows={multiline ? rows : 0}
      class={classes}
      size={size}
      InputProps={{
        startAdornment: startAdornmentFlag ? (
          <InputAdornment position={InputAdornmentPosition}>
            {InputAdornmentText}
          </InputAdornment>
        ) : null,
      }}
      {...rest}
    />
  );
}

export default TextField;
