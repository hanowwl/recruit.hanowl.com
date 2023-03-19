import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const TableWrapper = styled.div`
  overflow: auto;
`;

export const Table = styled.table<{ fillWidth?: boolean }>`
  font-size: 1.4rem;
  table-layout: fixed;

  td,
  th {
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
  }

  ${(props) =>
    props.fillWidth &&
    css`
      min-width: 100%;
    `}
`;

export const Thead = styled.thead`
  color: #cecadb;
  background-color: #222124;
  cursor: pointer;
`;

export const Tbody = styled.tbody`
  color: #cecadb;
  cursor: pointer;
`;

export const TrForTbody = styled.tr`
  border-bottom: 2px solid #222124;
  transition: background-color 200ms;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: white;
    background-color: #6767e7;
  }
`;

export const TrForNotFound = styled.tr`
  border-bottom: 2px solid #222124;
  text-align: center;
  line-height: 2rem;

  td {
    padding: 2.5rem 1.2rem;
  }
`;

export const Th = styled.th`
  padding: 1.2rem 1.2rem;
  border-bottom: 2px solid #222124;

  tr:first-of-type > &:first-of-type {
    border-radius: 0.4rem 0 0 0;
  }

  tr:first-of-type > &:last-child {
    border-radius: 0 0.4rem 0 0;
  }
`;

export const Td = styled.td`
  padding: 1.6rem 1.2rem;
`;

export const TableResultNotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
