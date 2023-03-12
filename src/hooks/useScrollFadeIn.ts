import { useRef, useCallback, useEffect } from 'react';

export const DIRECTION_VALUES = ['up', 'down', 'left', 'right'] as const;
export type DirectionType = (typeof DIRECTION_VALUES)[number];

export const useScrollFadeIn = <T extends HTMLElement>(
  direction: DirectionType = 'up',
  duration = 1,
  delay = 0
) => {
  const ref = useRef<T>(null);

  const handleDirection = (name: string) => {
    switch (name) {
      case 'up':
        return 'translate3d(0, 20%, 0)';
      case 'down':
        return 'translate3d(0, -50%, 0)';
      case 'left':
        return 'translate3d(50%, 0, 0)';
      case 'right':
        return 'translate3d(-50%, 0, 0)';
      default:
        return;
    }
  };

  const handleScroll: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      if (!ref.current) return;

      if (entry.isIntersecting) {
        ref.current.style.transitionProperty = 'opacity transform';
        ref.current.style.transitionDuration = `${duration}s`;
        ref.current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        ref.current.style.transitionDelay = `${delay}s`;
        ref.current.style.opacity = '1';
        ref.current.style.transform = 'translate3d(0, 0, 0)';
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.4 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [handleScroll]);

  return {
    ref,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};
