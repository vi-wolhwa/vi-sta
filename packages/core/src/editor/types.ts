import type { VistaSchemaOptions } from '../schema/extensions';
import type { Content, FocusPosition } from '@tiptap/core';

/** Options accepted by {@link createVistaEditor}. */
export interface VistaEditorOptions {
  /**
   * Element the editor mounts into. Pass `null` to create a headless editor
   * (e.g. for server-side rendering or tests) that holds state without a view.
   */
  element?: Element | null;
  /** Initial document content as HTML, JSON, or `null`. */
  content?: Content;
  /** Whether the editor is editable. Defaults to `true`. */
  editable?: boolean;
  /** Where to place the cursor on initialization. */
  autofocus?: FocusPosition;
  /** Schema tuning options. */
  schema?: VistaSchemaOptions;
}
