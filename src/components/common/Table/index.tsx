import React from 'react';

import * as S from './styled';

export interface TableProps {
  children: React.ReactNode;
  fillWidth?: boolean;
}

const TableComponent: React.FC<TableProps> = ({ children, fillWidth }) => (
  <S.TableWrapper>
    <S.Table fillWidth={fillWidth}>{children}</S.Table>
  </S.TableWrapper>
);

export const Table = Object.assign(TableComponent, {
  Thead: S.Thead,
  Tbody: S.Tbody,
  Th: S.Th,
  TrForTbody: S.TrForTbody,
  TrForNotFound: S.TrForNotFound,
  Td: S.Td,
  TableResultNotFoundDiv: S.TableResultNotFoundDiv,
});
