import { useState } from 'react';

import { useScroll, useMotionValue, useMotionValueEvent } from 'framer-motion';

import { useAuth, UserProfile } from '@/providers';

import * as S from './styled';

export interface NavbarMenuItem {
  text: string;
  href: string;
  permission?: (profile: UserProfile | null) => boolean;
  onClick?: React.MouseEventHandler;
}

export interface NavbarProps {
  menu: NavbarMenuItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ menu }) => {
  const [hidden, setHidden] = useState<boolean>(false);
  const { profile } = useAuth();

  const { scrollY } = useScroll();
  const prevScrollY = useMotionValue(0);

  const handleNavbarVisibility = () => {
    const currentScrollY = scrollY.get();
    const isScrollingUp = currentScrollY < prevScrollY.get();

    // 스크롤의 Y 값이 증가 중이고, 현재 스크롤의 Y 값이 50보다 큰 경우
    setHidden(currentScrollY > 50 && currentScrollY > prevScrollY.get() && !isScrollingUp);
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
        <S.NavbarTitle>
          <S.NavbarLink to="/">HANOWL</S.NavbarLink>
        </S.NavbarTitle>
        <div>
          <S.NavbarMenuContainer>
            {menu.map(({ href, text, onClick, permission = () => true }) => {
              if (permission(profile))
                return (
                  <S.NavbarMenuItem key={href} onClick={onClick}>
                    <S.NavbarLink to={href}>{text}</S.NavbarLink>
                  </S.NavbarMenuItem>
                );
            })}
          </S.NavbarMenuContainer>
        </div>
      </S.NavbarContainer>
    </S.NavbarWrapper>
  );
};
