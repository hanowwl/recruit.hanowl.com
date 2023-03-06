import { modalsAtom } from '../atoms';
import { ModalProps } from '../components';

import { useSetAtom } from 'jotai';

export const useModal = () => {
  const setModals = useSetAtom(modalsAtom);

  const open = (props: ModalProps) => {
    setModals((prev) => [props, ...prev]);
  };

  const close = () => {
    setModals((prev) => prev.slice(1));
  };

  const closeAll = () => {
    setModals([]);
  };

  return { open, close, closeAll };
};
