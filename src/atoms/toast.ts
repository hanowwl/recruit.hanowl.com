import { ToastProps } from '../components';

import { atom } from 'jotai';

export const toastsAtom = atom<ToastProps>({ visible: false, template: null });
