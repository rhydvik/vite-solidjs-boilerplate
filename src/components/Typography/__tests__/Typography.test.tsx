import { describe, expect, test } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import { Typography, TypographyVariant } from '../index'; // Import your Typography component

describe('Typography Component', () => {
  test('renders children correctly', () => {
    const textContent = 'Hello, SolidJS!';
    render(() => (
      <Typography variant="body1" component="div">
        {textContent}
      </Typography>
    ));

    const element = screen.getByText(textContent);
    expect(element).toBeInTheDocument();
  });

  test('applies variant prop correctly', () => {
    const variant: TypographyVariant = 'h2';
    render(() => (
      <Typography variant={variant} component="h2">
        Heading
      </Typography>
    ));

    const element = screen.getByRole('heading', { level: 2 });
    expect(element).toBeInTheDocument();
  });

  test('applies custom sxProps correctly', () => {
    const customStyles = { color: 'red', fontSize: '20px' };
    render(() => (
      <Typography variant="body1" sxProps={customStyles} component="div">
        Custom Styled Text
      </Typography>
    ));

    const element = screen.getByText('Custom Styled Text');
    expect(element).toHaveStyle(customStyles);
  });
});
