import { createColumnHelper } from '@tanstack/react-table';
import dayjs from 'dayjs';

import { TeamId, TEAM_ID_TO_TEXT } from '@/constant';

import { UserWithResume } from './types';

const columnHelper = createColumnHelper<UserWithResume>();
export const columns = [
  columnHelper.accessor('id', {
    header: () => 'ID',
    cell: (info) => info.getValue().split('-')[0],
  }),
  columnHelper.accessor('phone', {
    header: () => '전화번호',
  }),
  columnHelper.accessor('name', {
    header: () => '이름',
  }),
  columnHelper.accessor('student_depart', {
    header: () => '학과',
  }),
  columnHelper.accessor('student_grade', {
    header: () => '학년',
    cell: (info) => `${info.getValue()}학년`,
  }),
  columnHelper.accessor('student_class', {
    header: () => '반',
    cell: (info) => `${info.getValue()}반`,
  }),
  columnHelper.accessor('student_number', {
    header: () => '번호',
    cell: (info) => `${info.getValue()}번`,
  }),
  columnHelper.accessor('created_at', {
    header: () => '가입일자',
    cell: (info) => dayjs(info.getValue()).format('YYYY-MM-DD HH:mm:ss'),
  }),
  columnHelper.accessor('resume', {
    header: () => '지원분야',
    cell: (info) =>
      info
        .getValue()
        ?.filter((v) => v.submitted_at)
        .map((v) => TEAM_ID_TO_TEXT[v.case_name as TeamId])
        .join(',') || '지원 전',
  }),
];
