import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useVistaEditor } from './use-vista-editor';

describe('useVistaEditor', () => {
  it('creates an editor configured with the vi-sta schema', async () => {
    const { result, unmount } = renderHook(() =>
      useVistaEditor({
        content: { type: 'doc', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'hi' }] }] },
      }),
    );

    await waitFor(() => expect(result.current).not.toBeNull());

    const names = result.current?.extensionManager.extensions.map((extension) => extension.name) ?? [];
    expect(names).toContain('doc');
    expect(names).toContain('bold');
    expect(names).toContain('undoRedo');
    expect(result.current?.getText()).toBe('hi');

    unmount();
  });
});
