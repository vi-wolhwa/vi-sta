import { EditorContent } from '@tiptap/react';

import type { Editor } from '@vi-sta/core';

/** Props for {@link StyledView}. */
export interface StyledViewProps {
  /** The editor instance returned by `useVistaEditor`. */
  editor: Editor | null;
  /** Optional class applied to the editor's container element. */
  className?: string;
}

/**
 * Renders the editable, styled (WYSIWYG) view of a vi-sta editor.
 *
 * The component is headless: it ships no styles of its own. Style the editor by
 * targeting the `.ProseMirror` element within your `className` container.
 */
export const StyledView = ({ editor, className }: StyledViewProps) => {
  return <EditorContent editor={editor} className={className} />;
};
