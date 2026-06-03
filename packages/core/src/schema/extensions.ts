import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import Italic from '@tiptap/extension-italic';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { UndoRedo } from '@tiptap/extensions';

import type { Extensions } from '@tiptap/core';

/** Heading levels supported by the vi-sta schema. */
export type VistaHeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/** Options for tuning the baseline vi-sta schema. */
export interface VistaSchemaOptions {
  /** Heading levels to allow. Defaults to `[1, 2, 3]`. */
  headingLevels?: VistaHeadingLevel[];
  /** Whether to track undo/redo history. Defaults to `true`. */
  history?: boolean;
}

const DEFAULT_HEADING_LEVELS: VistaHeadingLevel[] = [1, 2, 3];

/**
 * Builds the baseline set of Tiptap extensions that define the vi-sta document
 * schema: the document, paragraph, text, heading and hard-break nodes, the bold
 * and italic marks, and (optionally) undo/redo history.
 */
export const createVistaExtensions = (options: VistaSchemaOptions = {}): Extensions => {
  const { headingLevels = DEFAULT_HEADING_LEVELS, history = true } = options;

  const extensions: Extensions = [
    Document,
    Paragraph,
    Text,
    Heading.configure({ levels: headingLevels }),
    HardBreak,
    Bold,
    Italic,
  ];

  if (history) {
    extensions.push(UndoRedo);
  }

  return extensions;
};
