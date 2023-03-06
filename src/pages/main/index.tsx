import React from 'react';

import { Modal } from '../../components';

export const MainPage: React.FC = () => {
  return (
    <div>
      <Modal.Overlay>
        <Modal
          header={{}}
          footer={{
            actions: [{ children: '테스트' }],
            text: '로그인시 서비스 이용약관과 개인정보 처리방침에 동의하게 됩니다',
          }}
        >
          <h4>테스트</h4>
        </Modal>
      </Modal.Overlay>
    </div>
  );
};
