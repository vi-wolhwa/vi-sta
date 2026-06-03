import { Editor } from '@tiptap/core';

import { createVistaExtensions } from '../schema/extensions';

import type { VistaEditorOptions } from './types';

/**
 * Creates a Tiptap editor instance preconfigured with the vi-sta schema.
 *
 * This is the framework-agnostic entry point. React applications should prefer
 * the `useVistaEditor` hook from `@vi-sta/react`, which manages the editor's
 * lifecycle for them.
 */
export const createVistaEditor = (options: VistaEditorOptions = {}): Editor => {
  const { schema, ...editorOptions } = options;

  return new Editor({
    ...editorOptions,
    extensions: createVistaExtensions(schema),
  });
};
