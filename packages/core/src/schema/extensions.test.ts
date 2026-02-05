import { describe, expect, it } from 'vitest';

import { createVistaExtensions } from './extensions';

describe('createVistaExtensions', () => {
  it('includes the baseline nodes, marks and history by default', () => {
    const names = createVistaExtensions().map((extension) => extension.name);

    expect(names).toContain('doc');
    expect(names).toContain('paragraph');
    expect(names).toContain('text');
    expect(names).toContain('heading');
    expect(names).toContain('hardBreak');
    expect(names).toContain('bold');
    expect(names).toContain('italic');
    expect(names).toContain('undoRedo');
  });

  it('omits history when disabled', () => {
    const names = createVistaExtensions({ history: false }).map((extension) => extension.name);

    expect(names).not.toContain('undoRedo');
  });
});
