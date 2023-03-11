import { ToastType } from '../components';

import { faCheck, faXmark, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export const TOAST_TYPE_PROPS: Record<ToastType, { icon: IconDefinition; background: string }> = {
  success: { icon: faCheck, background: '#6AD76A' },
  error: { icon: faXmark, background: '#F3655C' },
};
