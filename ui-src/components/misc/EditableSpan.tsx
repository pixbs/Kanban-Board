import React, { useState, useEffect, useRef } from 'react';

interface EditableSpanProps {
  text: string;
  onEdit: (newText: string) => void;
}

const EditableSpan: React.FC<EditableSpanProps> = ({ text, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableText, setEditableText] = useState(text);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isEditing && spanRef.current) {
      // Set the selection range to the end of the text
      const textNode = spanRef.current.firstChild;
      if (textNode instanceof Text) {
        const textLength = textNode.textContent?.length || 0;
        const selection = window.getSelection();
        if (selection) {
          selection.selectAllChildren(textNode);
          selection.collapseToEnd();
        }
      }
    }
  }, [isEditing]);

  const handleSpanClick = () => {
    setIsEditing(true);
  };

  const handleSpanBlur = () => {
    setIsEditing(false);

    // Only update the text if it has changed
    if (editableText !== text) {
      onEdit(editableText);
    }
  };

  const handleTextChange = (e: React.FormEvent<HTMLSpanElement>) => {
    setEditableText(e.currentTarget.textContent || '');
  };

  return (
    <span
      ref={spanRef}
      onClick={handleSpanClick}
      onBlur={handleSpanBlur}
      contentEditable={true}
      onInput={handleTextChange}
    >
      {editableText}
    </span>
  );
};

export default EditableSpan;
