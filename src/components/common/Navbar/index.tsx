import { useEffect, useState } from 'react';

import { MENU_LIST } from '../../../constant';

import * as S from './styled';

import { useScroll, useMotionValue, useMotionValueEvent } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();
  const prevScrollY = useMotionValue(0);

  const handleNavbarVisibility = () => {
    const currentScrollY = scrollY.get();
    const isScrollingUp = currentScrollY < prevScrollY.get();

    setHidden(currentScrollY > 100 && currentScrollY > prevScrollY.get() && !isScrollingUp);
    prevScrollY.set(currentScrollY);
  };

  useMotionValueEvent(scrollY, 'change', () => handleNavbarVisibility());

  return (
    <S.NavbarWrapper
      variants={{ visible: { top: '0vh' }, hidden: { top: '-20vh' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <S.NavbarContainer>
        <S.NavbarTitle>HANOWL</S.NavbarTitle>
        <div>
          <S.NavbarMenuContainer>
            {MENU_LIST.map((menu, i) => (
              <li key={i}>{menu.text}</li>
            ))}
          </S.NavbarMenuContainer>
        </div>
      </S.NavbarContainer>
    </S.NavbarWrapper>
  );
};
