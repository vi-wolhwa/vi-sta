import type { Editor } from '@vi-sta/core';

interface ToolbarProps {
  editor: Editor | null;
}

interface ToolbarButtonProps {
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

const ToolbarButton = ({ label, isActive = false, isDisabled = false, onClick }: ToolbarButtonProps) => (
  <button
    type="button"
    className={isActive ? 'toolbar__button toolbar__button--active' : 'toolbar__button'}
    disabled={isDisabled}
    onClick={onClick}
  >
    {label}
  </button>
);

export const Toolbar = ({ editor }: ToolbarProps) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="toolbar">
      <ToolbarButton
        label="Bold"
        isActive={editor.isActive('bold')}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
      <ToolbarButton
        label="Italic"
        isActive={editor.isActive('italic')}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <span className="toolbar__divider" />
      <ToolbarButton
        label="H1"
        isActive={editor.isActive('heading', { level: 1 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      />
      <ToolbarButton
        label="H2"
        isActive={editor.isActive('heading', { level: 2 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      />
      <ToolbarButton
        label="H3"
        isActive={editor.isActive('heading', { level: 3 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      />
      <ToolbarButton
        label="Paragraph"
        isActive={editor.isActive('paragraph')}
        onClick={() => editor.chain().focus().setParagraph().run()}
      />
      <span className="toolbar__divider" />
      <ToolbarButton
        label="Undo"
        isDisabled={!editor.can().undo()}
        onClick={() => editor.chain().focus().undo().run()}
      />
      <ToolbarButton
        label="Redo"
        isDisabled={!editor.can().redo()}
        onClick={() => editor.chain().focus().redo().run()}
      />
    </div>
  );
};
