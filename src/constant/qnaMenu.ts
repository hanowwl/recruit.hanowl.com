export interface QnAMenuItem {
  text: string;
  href: string;
}

export const QNA_MENU_LIST: QnAMenuItem[] = [
  {
    text: '공통 질문',
    href: '',
  },
  {
    text: '기능부',
    href: 'dev',
  },
  {
    text: '홍보부',
    href: 'marketing',
  },
  {
    text: '행사기획부',
    href: 'event',
  },
  {
    text: '안전부',
    href: 'safety',
  },
  {
    text: '총모부',
    href: 'general',
  },
];
