import React from 'react';

import { BlurCircle, Text } from '@/components';
import { Banner1PNG, Banner2PNG, Banner3PNG } from '@/assets';
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

export const MainSection: React.FC = () => {
  const animation = useScrollFadeIn<HTMLHeadingElement>('right', 0.7);

  return (
    <BlurCircle.Section
      circles={
        [
          // {
          //   width: 110,
          //   height: 50,
          //   animate: {
          //     x: [230, -30, 230],
          //     y: [0, -100, -80, 0],
          //     backgroundColor: [
          //       'rgba(87, 60, 255, 0.07)',
          //       'rgba(87, 60, 255, 0.1)',
          //       'rgba(87, 60, 255, 0.07)',
          //     ],
          //   },
          // },
          // {
          //   width: 80,
          //   height: 40,
          //   animate: {
          //     x: [-300, 0, -300],
          //     y: [300, 200, 300],
          //     backgroundColor: [
          //       'rgba(177, 41, 241, 0.07)',
          //       'rgba(177, 41, 241, 0.1)',
          //       'rgba(177, 41, 241, 0.07)',
          //     ],
          //   },
          // },
        ]
      }
    >
      <Text.Column {...animation}>
        <Text.Row>
          <Text>HANOWL</Text>
          <Text strong>STUDENT</Text>
          <Text>COUNCIL</Text>
          <Text fill></Text>
        </Text.Row>
        <Text.Row>
          <Text>2023 π£ RECRUITING</Text>
          <Text fill={{ url: Banner2PNG, position: 'center 60%' }}></Text>
        </Text.Row>
        <Text.Row>
          <Text>OPEN 03.13</Text>
          <Text fill strong>
            -03.17
          </Text>
          <Text>πμΉμ§μμμ</Text>
        </Text.Row>
        <Text.Row>
          <Text fill={{ url: Banner1PNG, position: 'center 40%' }}></Text>
          <Text>μΌλ¨ π ν΄λ΄ λ€λ€ μν΄μ€κ²</Text>
        </Text.Row>
        <Text.Row>
          <Text fill></Text>
          <Text>λ μ΄λ©΄ λ λ§λ€ μ€λ κΈ°νκ° μλμμ</Text>
        </Text.Row>
        <Text.Row>
          <Text>μ§μ§λΌλκΉ? </Text>
          <Text fill={{ url: Banner3PNG, position: '50% 60%' }}></Text>
          <Text>μΌλ¨ μ§μν΄λ΄</Text>
        </Text.Row>
      </Text.Column>
    </BlurCircle.Section>
  );
};
