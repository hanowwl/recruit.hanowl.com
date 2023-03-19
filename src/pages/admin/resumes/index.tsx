import React, { useMemo, useState } from 'react';

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  flexRender,
} from '@tanstack/react-table';

import { useGetAllUsersWithResumeQuery } from '@/graphql/generated/hooks';
import { Input, Table } from '@/components';
import { useModal } from '@/hooks';
import { TeamId, TEAM_ID_TO_TEXT } from '@/constant';

import { UserWithResume } from './types';
import { columns } from './table.helper';

export const AdminResumesPage: React.FC = () => {
  const { data } = useGetAllUsersWithResumeQuery();
  const users = useMemo<UserWithResume[]>(() => {
    if (!data?.usersCollection) return [];

    return data.usersCollection.edges.map(
      ({
        node: {
          id,
          name,
          phone,
          role,
          student_depart,
          student_class,
          student_grade,
          student_number,
          created_at,
          resumeCollection,
        },
      }) => {
        return {
          id,
          name,
          phone,
          role,
          student_depart,
          student_class,
          student_grade,
          student_number,
          created_at,

          resume:
            resumeCollection?.edges.map(
              ({
                node: {
                  id,
                  case_id,
                  created_at,
                  updated_at,
                  submitted_at,
                  resume_case,
                  resume_answerCollection,
                },
              }) => {
                return {
                  id,
                  case_id,
                  case_name: resume_case?.name as string,
                  created_at,
                  updated_at,
                  submitted_at,

                  fields:
                    resume_answerCollection?.edges
                      .filter(({ node: { resume } }) => resume && resume.case_id == case_id)
                      .map(({ node: { id: answerId, value: answerValue, resume_input } }) => {
                        return {
                          question: {
                            id: resume_input?.id as number,
                            value: resume_input?.name as string,
                          },
                          answer: { id: answerId, value: answerValue },
                        };
                      }) || [],
                };
              }
            ) || [],
        };
      }
    );
  }, [data]);

  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data: users,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { open, close } = useModal();

  const handleOnClickRow = (userId?: string) => {
    const currentUser = users.find((v) => v.id === userId);
    if (!userId || !currentUser) return;

    console.log(currentUser);

    open({
      header: {
        text: `${currentUser.name}님의 지원서`,
      },
      footer: {
        actions: [],
      },
      onClickClose: close,

      children: (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {currentUser.resume
            ?.filter(({ submitted_at }) => submitted_at !== null)
            .map(({ id, case_name, fields }) => {
              return (
                <div key={id}>
                  <h2>{TEAM_ID_TO_TEXT[case_name as TeamId]} 지원서</h2>
                  {fields.map(({ question, answer }, i) => {
                    return (
                      <Input
                        key={i}
                        type="textarea"
                        label={question.value}
                        value={answer.value}
                        readOnly
                      />
                    );
                  })}
                </div>
              );
            })}
        </>
      ),
    });
  };

  return (
    <div>
      <Table fillWidth>
        <Table.Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div
                      onClick={header.column.getToggleSortingHandler()}
                      onKeyUp={header.column.getToggleSortingHandler()}
                      role="button"
                      tabIndex={0}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: <> ↑</>,
                        desc: <> ↓</>,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </Table.Th>
              ))}
            </tr>
          ))}
        </Table.Thead>

        <Table.Tbody>
          {users.length <= 0 ? (
            <Table.TrForNotFound>
              <Table.Td colSpan={table.getHeaderGroups()[0].headers.length} rowSpan={4}>
                <Table.TableResultNotFoundDiv>
                  <p>
                    가입된 유저가 없어요...
                    <br />
                    얼른 홍보를 진행해주세요
                  </p>
                </Table.TableResultNotFoundDiv>
              </Table.Td>
            </Table.TrForNotFound>
          ) : (
            table.getRowModel().rows.map((row) => {
              const userId = row
                .getVisibleCells()
                .find((v) => v.id === `${row.id}_id`)
                ?.getValue();

              return (
                <Table.TrForTbody key={row.id} onClick={() => handleOnClickRow(userId as string)}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <Table.Td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </Table.Td>
                    );
                  })}
                </Table.TrForTbody>
              );
            })
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
};
