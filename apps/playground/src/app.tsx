// apps/playground/src/app.tsx
import { StyledView, useVistaEditor } from '@vi-sta/react';

import { Toolbar } from './toolbar';

import type { Content } from '@vi-sta/core';

const INITIAL_CONTENT: Content = {
  type: 'doc',
  content: [
    { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'vi-sta playground' }] },
    {
      type: 'paragraph',
      content: [
        { type: 'text', text: 'Try ' },
        { type: 'text', marks: [{ type: 'bold' }], text: 'bold' },
        { type: 'text', text: ' and ' },
        { type: 'text', marks: [{ type: 'italic' }], text: 'italic' },
        { type: 'text', text: ' text, switch headings, and undo/redo your edits.' },
      ],
    },
  ],
};

export const App = () => {
  const editor = useVistaEditor({
    content: INITIAL_CONTENT,
    autofocus: 'end',
    // Enable so the toolbar's active/disabled states track the selection.
    shouldRerenderOnTransaction: true,
  });

  return (
    <main className="playground">
      <p className="playground__eyebrow">vi-sta — Styled View (M1)</p>
      <Toolbar editor={editor} />
      <StyledView editor={editor} className="playground__editor" />
    </main>
  );
};
