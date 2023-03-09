import React from 'react';

import { BlurCircle } from '@/components';

export const MainPage: React.FC = () => {
  return (
    <div>
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
      ></BlurCircle.Section>
    </div>
  );
};
