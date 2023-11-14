import { describe, expect, test } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import { Typography } from '../index'; // Import your Typography component

describe('Typography Component', () => {
  test('renders children correctly', () => {
    const textContent = 'Hello, SolidJS!';
    render(() => (
      <Typography variant="body1" component="div">
        {textContent}
      </Typography>
    ));

    const element = screen.getByText(textContent);
    expect(element).not.toBeNull();
  });

  test('applies custom sxProps correctly', () => {
    const customStyles = { color: 'rgb(255, 0, 0)', fontSize: '20px' };
    render(() => (
      <Typography variant="body1" sxProps={customStyles} component="div">
        Custom Styled Text
      </Typography>
    ));

    const element = screen.getByText('Custom Styled Text');
    // expect(element).toHaveStyle(customStyles);
    const elementStyles = window.getComputedStyle(element);
    // Extract only the styles you want to check
    const relevantStyles = {
      color: elementStyles.color,
      fontSize: elementStyles.fontSize,
      // Add more styles if needed
    };
    expect(relevantStyles).toMatchObject(customStyles);
  });
});
