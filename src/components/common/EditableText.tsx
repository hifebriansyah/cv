import React from 'react';

export interface EditableTextProps {
  value: string;
  onChange?: (newValue: string) => void;
  editable?: boolean;
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  className?: string;
}

export const EditableText: React.FC<EditableTextProps> = ({
  value,
  onChange,
  editable = false,
  as: Component = 'span',
  className = '',
}) => {
  if (!editable) {
    return <Component className={className}>{value}</Component>;
  }

  return (
    <Component
      contentEditable
      suppressContentEditableWarning
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        const nextText = e.currentTarget.innerText;
        if (onChange && nextText !== value) {
          onChange(nextText);
        }
      }}
      className={`${className} outline-none rounded px-0.5 -mx-0.5 ring-1 ring-transparent hover:ring-amber-400/80 focus:ring-2 focus:ring-amber-500 focus:bg-amber-50/40 transition-all cursor-text`}
    >
      {value}
    </Component>
  );
};
