// @TODO: TEMPORARY (M1): Re-pulls each schema extension's declaration-merging
// augmentations into @vi-sta/core's public types, so the playground's raw
// `editor.chain().toggleBold()` calls type-check.
//
// REMOVE THIS BLOCK once vi-sta exposes its own command API (M3–M4). At that
// point consumers stop calling Tiptap chain commands directly and these
// augmentations no longer need to leak through the public surface.
//
// Until then: keep this list 1:1 with createVistaExtensions (./schema/extensions).
import '@tiptap/extension-bold';
import '@tiptap/extension-document';
import '@tiptap/extension-hard-break';
import '@tiptap/extension-heading';
import '@tiptap/extension-italic';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-text';
import '@tiptap/extensions';

export { createVistaExtensions } from './schema/extensions';
export type { VistaSchemaOptions, VistaHeadingLevel } from './schema/extensions';

export { createVistaEditor } from './editor/create-editor';
export type { VistaEditorOptions } from './editor/types';

// Re-export the Tiptap types consumers need, so they can type against vi-sta
// without taking a direct dependency on @tiptap/core.
export type { Editor, Content, FocusPosition, JSONContent } from '@tiptap/core';
