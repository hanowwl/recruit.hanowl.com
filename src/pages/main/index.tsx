import React from 'react';

import { Modal } from '../../components';
import { useModal } from '../../hooks';

export const MainPage: React.FC = () => {
  const { open, close, closeAll } = useModal();

  return (
    <div>
      <button
        onClick={() =>
          open({
            header: {},
            children: <>테스트</>,
            footer: {
              actions: [],
            },
            onClickClose: () => close(),
          })
        }
      >
        open modal
      </button>
    </div>
  );
};
