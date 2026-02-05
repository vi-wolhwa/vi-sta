export { createVistaExtensions } from './schema/extensions';
export type { VistaSchemaOptions, VistaHeadingLevel } from './schema/extensions';

export { createVistaEditor } from './editor/create-editor';
export type { VistaEditorOptions } from './editor/types';

// Re-export the Tiptap types consumers need, so they can type against vi-sta
// without taking a direct dependency on @tiptap/core.
export type { Editor, Content, FocusPosition, JSONContent } from '@tiptap/core';
