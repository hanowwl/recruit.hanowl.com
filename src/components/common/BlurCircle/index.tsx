import React from 'react';

import { TargetAndTransition } from 'framer-motion';

import * as S from './styled';

export interface BlurCircleProps {
  width: number;
  height: number;
  blur?: number;

  duration?: number;
  animate: Pick<TargetAndTransition, 'x' | 'y' | 'backgroundColor'>;
}

const BlurCircleComponent: React.FC<BlurCircleProps> = ({
  width,
  height,
  blur = 5,
  duration = 7,
  animate,
}) => {
  return (
    <S.BlurCircleElement
      width={width}
      height={height}
      blur={blur}
      animate={animate}
      transition={{ repeat: Infinity, duration }}
    />
  );
};

export interface BlurCircleSection {
  circles: BlurCircleProps[];
  overlayContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  backgroundContainerProps?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
}

export const BlurCircleSection: React.FC<BlurCircleSection> = ({
  circles,
  children,
  overlayContainerProps,
  backgroundContainerProps,
}) => {
  return (
    <S.BlurCircleSectionContainer>
      <S.BlurCircleOverlayContainer {...overlayContainerProps}>
        {children}
      </S.BlurCircleOverlayContainer>
      <S.BlurCircleBackgroundContainer {...backgroundContainerProps}>
        {circles.map((props, i) => (
          <BlurCircle key={i} {...props} />
        ))}
      </S.BlurCircleBackgroundContainer>
    </S.BlurCircleSectionContainer>
  );
};

export const BlurCircle = Object.assign(BlurCircleComponent, {
  Section: BlurCircleSection,
});
