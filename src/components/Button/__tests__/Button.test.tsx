import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';

import '@testing-library/jest-dom';
import { Button } from '../index'; // 👈 this is imported in order to use the jest-dom matchers

describe('Button', () => {
  it('It should show title', () => {
    const { getByText } = render(() => (
      <Button variant="contained" label="show" />
    ));
    expect(getByText('show')).toBeInTheDocument();
  });
});
