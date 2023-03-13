import React from 'react';

import { BlurCircle, Text } from '@/components';
import { Banner1PNG, Banner2PNG, Banner3PNG } from '@/assets';
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

export const MainSection: React.FC = () => {
  const animation = useScrollFadeIn<HTMLHeadingElement>('right', 0.7);

  return (
    <BlurCircle.Section
      circles={[
        {
          width: 110,
          height: 50,
          animate: {
            x: [230, -30, 230],
            y: [0, -100, -80, 0],
            backgroundColor: [
              'rgba(87, 60, 255, 0.07)',
              'rgba(87, 60, 255, 0.1)',
              'rgba(87, 60, 255, 0.07)',
            ],
          },
        },
        {
          width: 80,
          height: 40,
          animate: {
            x: [-300, 0, -300],
            y: [300, 200, 300],
            backgroundColor: [
              'rgba(177, 41, 241, 0.07)',
              'rgba(177, 41, 241, 0.1)',
              'rgba(177, 41, 241, 0.07)',
            ],
          },
        },
      ]}
    >
      <Text.Column {...animation}>
        <Text.Row>
          <Text>HANOWL</Text>
          <Text strong>STUDENT</Text>
          <Text>COUNCIL</Text>
          <Text fill></Text>
        </Text.Row>
        <Text.Row>
          <Text>2023 🐣 RECRUITING</Text>
          <Text fill={{ url: Banner2PNG, position: 'center 60%' }}></Text>
        </Text.Row>
        <Text.Row>
          <Text>OPEN 03.13</Text>
          <Text fill strong>
            -03.17
          </Text>
          <Text>💀치지않아요</Text>
        </Text.Row>
        <Text.Row>
          <Text fill={{ url: Banner1PNG, position: 'center 40%' }}></Text>
          <Text>일단 💌 해봐 다들 잘해줄게</Text>
        </Text.Row>
        <Text.Row>
          <Text fill></Text>
          <Text>날이면 날마다 오는 기회가 아니에요</Text>
        </Text.Row>
        <Text.Row>
          <Text>진짜라니까? </Text>
          <Text fill={{ url: Banner3PNG, position: '50% 60%' }}></Text>
          <Text>일단 지원해봐</Text>
        </Text.Row>
      </Text.Column>
    </BlurCircle.Section>
  );
};
