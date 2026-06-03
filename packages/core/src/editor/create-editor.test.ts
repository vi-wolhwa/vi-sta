import { describe, expect, it } from 'vitest';

import { createVistaEditor } from './create-editor';

import type { Content } from '@tiptap/core';

const paragraphDoc = (text: string): Content => ({
  type: 'doc',
  content: [{ type: 'paragraph', content: [{ type: 'text', text }] }],
});

describe('createVistaEditor', () => {
  it('creates an editable editor from JSON content', () => {
    const editor = createVistaEditor({ element: null, content: paragraphDoc('hello world') });

    expect(editor.isEditable).toBe(true);
    expect(editor.getText()).toBe('hello world');

    editor.destroy();
  });

  it('respects the editable flag', () => {
    const editor = createVistaEditor({ element: null, editable: false });

    expect(editor.isEditable).toBe(false);

    editor.destroy();
  });

  it('resolves default heading levels of 1, 2 and 3', () => {
    const editor = createVistaEditor({ element: null });
    const heading = editor.extensionManager.extensions.find((extension) => extension.name === 'heading');

    expect(heading?.options.levels).toEqual([1, 2, 3]);

    editor.destroy();
  });

  it('applies custom heading levels from schema options', () => {
    const editor = createVistaEditor({ element: null, schema: { headingLevels: [1, 2] } });
    const heading = editor.extensionManager.extensions.find((extension) => extension.name === 'heading');

    expect(heading?.options.levels).toEqual([1, 2]);

    editor.destroy();
  });
});
