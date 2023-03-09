import React from 'react';

import { Schedule } from '@/components/section';
import { SCHEDULE_LIST } from '@/constant/schedule';

import { LoginModalContent } from '../../components/modal';
import { useModal } from '../../hooks';

export const MainPage: React.FC = () => {
  const { open, close, closeAll } = useModal();

  return (
    <div>
      <button
        onClick={() =>
          open({
            header: {},
            children: <LoginModalContent />,
            footer: {
              actions: [
                {
                  children: 'Google 계정으로 로그인',
                },
              ],
            },
            onClickClose: () => close(),
          })
        }
      >
        open modal
      </button>
      <Schedule />
    </div>
  );
};
