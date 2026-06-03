import { describe, expect, it } from 'vitest';

import { version } from './index';

describe('@vi-sta/core scaffold', () => {
  it('exposes a version string', () => {
    expect(version).toBe('0.0.0');
  });
});
