import { useState, useEffect, useRef } from 'react';

export const useCounter = (max: number, interval: number) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) {
        return;
      }

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isVisible && count < max) {
      timer = setInterval(() => {
        const nextCount = Math.min(count + 1, max);
        setCount(nextCount);
      }, interval);
    }

    return () => {
      clearInterval(timer);
    };
  }, [count, interval, isVisible, max]);

  return { count, ref };
};
