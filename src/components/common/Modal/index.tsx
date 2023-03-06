import React, { useEffect } from 'react';

import * as S from './styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export interface ModalProps {
  children: React.ReactNode;

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
    actions: React.ButtonHTMLAttributes<HTMLButtonElement>[];
  };
}

const ModalElement: React.FC<ModalProps> = ({ children, header, body, footer }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <S.ModalContainer>
      <S.ModalHeaderContainer {...(header && header.props)}>
        {header?.text && <S.ModalHeader>{header.text}</S.ModalHeader>}

        <S.ModalCloseButton>
          <FontAwesomeIcon icon={faXmark} color="#FFFFFF" style={{ fontSize: '2rem' }} />
        </S.ModalCloseButton>
      </S.ModalHeaderContainer>

      <S.ModalBodyContainer {...body?.props}>{children}</S.ModalBodyContainer>

      <S.ModalFooterContainer {...footer.props}>
        <S.ModalFooterButtonsContainer>
          {footer.actions.map((props, i) => {
            return <S.Button key={i} {...props} />;
          })}
        </S.ModalFooterButtonsContainer>

        <S.ModalFooterText>{footer.text}</S.ModalFooterText>
      </S.ModalFooterContainer>
    </S.ModalContainer>
  );
};

export const Modal = Object.assign(ModalElement, {
  Overlay: S.ModalOverlay,
});
