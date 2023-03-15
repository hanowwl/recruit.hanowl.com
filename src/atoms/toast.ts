import { atom } from 'jotai';

import { ToastProps } from '@/components';

export const toastsAtom = atom<ToastProps>({ visible: false, template: null });
