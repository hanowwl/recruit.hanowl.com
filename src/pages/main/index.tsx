import React from 'react';

import { Schedule } from '@/components/main';
import { SCHEDULE_LIST } from '@/constant/schedule';

import { LoginModalContent } from '../../components/modal';
import { useModal, useToast } from '../../hooks';

export const MainPage: React.FC = () => {
  const { open, close } = useModal();
  const { toast } = useToast();

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
      <button onClick={() => toast.error({ template: '클립보드에 복사되었습니다.' })}>
        open Toast
      </button>

      <Schedule />
    </div>
  );
};
