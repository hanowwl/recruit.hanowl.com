import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { BlurCircleProps } from '.';

export const BlurCircleElement = styled(motion.div)<
  Omit<Required<BlurCircleProps>, 'duration' | 'animate'>
>`
  position: absolute;
  width: ${(props) => `${props.width}rem`};
  height: ${(props) => `${props.height}rem`};
  filter: ${(props) => `blur(${props.blur}rem)`};
  border-radius: 50%;
`;

export const BlurCircleSectionContainer = styled.section`
  width: 100%;
  position: relative;
`;

export const BlurCircleBackgroundContainer = styled.div`
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const BlurCircleOverlayContainer = styled.div``;
