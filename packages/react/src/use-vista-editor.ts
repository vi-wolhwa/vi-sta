import { useEditor } from '@tiptap/react';
import { createVistaExtensions, type Content, type FocusPosition, type VistaSchemaOptions } from '@vi-sta/core';

/** Options accepted by {@link useVistaEditor}. */
export interface UseVistaEditorOptions {
  /** Initial document content as HTML, JSON, or `null`. */
  content?: Content;
  /** Whether the editor is editable. Defaults to `true`. */
  editable?: boolean;
  /** Where to place the cursor on initialization. */
  autofocus?: FocusPosition;
  /** Schema tuning options. */
  schema?: VistaSchemaOptions;
  /**
   * Re-render the React tree on every editor transaction. Enable this when UI
   * outside the editor (such as a toolbar) must reflect editor state. Disabled
   * by default, matching Tiptap's performance-oriented behavior.
   */
  shouldRerenderOnTransaction?: boolean;
}

/**
 * Creates and manages a vi-sta editor for the lifetime of the component.
 * Returns `null` until the editor is ready (e.g. during server-side rendering).
 */
export const useVistaEditor = (options: UseVistaEditorOptions = {}) => {
  const { schema, content, editable, autofocus, shouldRerenderOnTransaction } = options;

  return useEditor({
    extensions: createVistaExtensions(schema),
    content,
    editable,
    autofocus,
    shouldRerenderOnTransaction,
  });
};
