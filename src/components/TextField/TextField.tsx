import { TextField as STextField } from '@suid/material';
import InputAdornment from '@suid/material/InputAdornment';

export type Props = {
  variant: 'standard' | 'outlined' | 'filled';
  label: string;
  id: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  type?: 'password' | 'number' | 'search';
  helperText?: string;
  multiline?: boolean;
  rows?: number;
  InputAdornmentPostion?: 'start' | 'end';
  InputAdornmentText?: string;
  startAdornmentFlag?: boolean;
};

function TextField({
  variant,
  label,
  id,
  required,
  disabled,
  type,
  helperText,
  error,
  multiline = false,
  rows,
  InputAdornmentPostion,
  startAdornmentFlag = false,
  InputAdornmentText,
}: Props) {
  return (
    <STextField
      id={id}
      variant={variant}
      label={label}
      required={required}
      disabled={disabled}
      type={type}
      error={error}
      helperText={helperText}
      multiline={multiline}
      rows={multiline ? rows : 0}
      InputLabelProps={{
        shrink: type === 'number',
      }}
      InputProps={{
        startAdornment: startAdornmentFlag ? (
          <InputAdornment position={InputAdornmentPostion}>
            {InputAdornmentText}
          </InputAdornment>
        ) : null,
      }}
    />
  );
}

export default TextField;
