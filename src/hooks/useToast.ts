import { useAtom } from 'jotai';

import { toastsAtom } from '@/atoms';
import { ToastProps } from '@/components';

const sleep = (ms: number) => {
  return new Promise((r) => setTimeout(r, ms));
};

export const useToast = () => {
  const [toastAtom, setToastAtom] = useAtom(toastsAtom);

  const show = async ({ template, type }: ToastProps) => {
    if (toastAtom.visible) return;
    setToastAtom({ visible: true, template, type });
    await sleep(1200);
    setToastAtom({ visible: false, template: undefined, type: undefined });
  };

  const toast = Object.assign(show, {
    success: ({ template }: ToastProps) => show({ template, type: 'success' }),
    error: ({ template }: ToastProps) => show({ template, type: 'error' }),
  });

  return { toast };
};
