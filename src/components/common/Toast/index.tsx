import React from 'react';

import { toastsAtom } from '../../../atoms';
import { TOAST_TYPE_PROPS } from '../../../constant/toast';

import * as S from './styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from 'framer-motion';
import { useAtomValue } from 'jotai';

export type ToastType = 'success' | 'error';

export interface ToastProps {
  visible?: boolean;
  template?: React.ReactNode | string;
  type?: ToastType;
}

export const Toast: React.FC<ToastProps> = () => {
  const toast = useAtomValue(toastsAtom);

  const { visible, template, type } = toast;
  return (
    <AnimatePresence>
      {visible && (
        <S.ToastContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <S.ToastWrapper
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            {type && (
              <S.ToastIconWrapper background={TOAST_TYPE_PROPS[type].background}>
                <FontAwesomeIcon
                  icon={TOAST_TYPE_PROPS[type].icon}
                  color="white"
                  style={{ fontSize: '1rem' }}
                />
              </S.ToastIconWrapper>
            )}
            {typeof template === 'string' && <div>{template}</div>}
            {typeof template !== 'string' && template}
          </S.ToastWrapper>
        </S.ToastContainer>
      )}
    </AnimatePresence>
  );
};
