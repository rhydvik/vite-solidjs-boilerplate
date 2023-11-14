import { JSX } from 'solid-js';
import { Typography as Stypography } from '@suid/material';

export type TypographyVariant =
  | 'inherit'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'overline';

export interface TypographyProps {
  variant: TypographyVariant;
  component: keyof JSX.IntrinsicElements;
  sxProps?: Record<string, string>;
  children: JSX.Element;
}

export const Typography = ({
  children,
  variant,
  component,
  sxProps,
  ...restProps
}: TypographyProps) => {
  return (
    <Stypography
      variant={variant}
      component={component}
      sx={sxProps}
      {...restProps}
    >
      {children}
    </Stypography>
  );
};
