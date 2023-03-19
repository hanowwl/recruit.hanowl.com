import { NavbarMenuItem } from '@/components';

export const MENU_LIST: NavbarMenuItem[] = [
  {
    text: '모집공고',
    href: '/teams',
  },
  {
    text: '자주 묻는 질문',
    href: '/qna',
  },
  {
    text: '로그인',
    href: '/auth/signin',
    permission: (profile) => profile === null,
  },
  {
    text: '🦉 지원서 확인',
    href: '/admin/resumes',
    permission: (profile) => profile !== null && profile.role === 'ADMIN',
  },
];
