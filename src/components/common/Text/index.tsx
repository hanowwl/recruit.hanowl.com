import React from 'react';

import * as S from './styled';

interface TextCommonProps {
  children?: React.ReactNode;
}

export type TextColumnProps = TextCommonProps;

export const TextColumn: React.FC<TextColumnProps> = ({ children }) => {
  return <S.TextColumnContainer>{children}</S.TextColumnContainer>;
};

export type TextRowProps = TextCommonProps;

export const TextRow: React.FC<TextRowProps> = ({ children }) => {
  return <S.TextRowContainer>{children}</S.TextRowContainer>;
};

export interface TextProps extends TextCommonProps {
  fill?: { url: string; position?: string } | boolean;
  strong?: boolean;
}

export const TextComponent: React.FC<TextProps> = ({ children, fill = false, strong = false }) => {
  return (
    <S.TextElement fill={fill} strong={strong}>
      {children}
    </S.TextElement>
  );
};

export const Text = Object.assign(TextComponent, {
  Column: TextColumn,
  Row: TextRow,
});
