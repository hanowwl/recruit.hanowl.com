import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAtomValue } from 'jotai';

import { modalsAtom } from '../../../atoms';
import { Button, ButtonProps } from '../Button';

import * as S from './styled';

export interface ModalProps {
  children: React.ReactNode;
  onClickClose?: React.MouseEventHandler;

  header?: {
    props?: React.HTMLAttributes<HTMLDivElement>;
    text?: string;
  };

  body?: {
    props?: React.HTMLAttributes<HTMLDivElement>;
  };

  footer: {
    props?: React.HTMLAttributes<HTMLDivElement>;
    text?: React.ReactNode;
    actions: ButtonProps[];
  };
}

const ModalElement: React.FC<ModalProps> = ({ children, header, body, footer, onClickClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <S.ModalContainer>
      <S.ModalHeaderContainer {...(header && header.props)}>
        {header?.text && <S.ModalHeader>{header.text}</S.ModalHeader>}

        <S.ModalCloseButton onClick={onClickClose}>
          <FontAwesomeIcon icon={faXmark} color="#FFFFFF" style={{ fontSize: '2rem' }} />
        </S.ModalCloseButton>
      </S.ModalHeaderContainer>

      <S.ModalBodyContainer {...body?.props}>{children}</S.ModalBodyContainer>

      <S.ModalFooterContainer {...footer.props}>
        <S.ModalFooterButtonsContainer>
          {footer.actions.map((props, i) => {
            return <Button key={i} {...props} />;
          })}
        </S.ModalFooterButtonsContainer>

        <S.ModalFooterText>{footer.text}</S.ModalFooterText>
      </S.ModalFooterContainer>
    </S.ModalContainer>
  );
};

const ModalContainer: React.FC = () => {
  const modals = useAtomValue(modalsAtom);
  if (modals.length <= 0) return null;

  return (
    <Modal.Overlay>
      <Modal {...modals[0]} />
    </Modal.Overlay>
  );
};

export const Modal = Object.assign(ModalElement, {
  Overlay: S.ModalOverlay,
  Container: ModalContainer,
});
