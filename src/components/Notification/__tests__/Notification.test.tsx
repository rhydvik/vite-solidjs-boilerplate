import { render } from '@solidjs/testing-library';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

import Notification from '../Notification';

describe('Notification Component', () => {
  it('Renders Warning Notification', () => {
    const { container } = render(() => (
      <Notification type="warning">Warning Message</Notification>
    ));

    expect(container).toContainHTML('Warning Message');
  });

  it('Renders Info Notification', () => {
    const { container } = render(() => (
      <Notification type="info">Info Message</Notification>
    ));

    expect(container).toContainHTML('Info Message');
  });

  it('Renders Error Notification', () => {
    const { container } = render(() => (
      <Notification type="error">Error Message</Notification>
    ));

    expect(container).toContainHTML('Error Message');
  });
});
