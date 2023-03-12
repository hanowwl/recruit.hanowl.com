import { atom } from 'jotai';

export const accessTokenAtom = atom<{ accessToken: string }>({ accessToken: '' });
