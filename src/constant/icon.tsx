import { FaInstagram, FaBehance } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { RiFacebookFill } from 'react-icons/ri';
import { SiTistory } from 'react-icons/si';

export interface IconType {
  icon: React.ReactNode;
  href: string;
}

export const ICON_LIST: IconType[] = [
  {
    icon: <MdMailOutline size="2rem" />,
    href: '/',
  },
  {
    icon: <SiTistory size="1.5rem" />,
    href: '/',
  },
  {
    icon: <FaBehance size="2rem" />,
    href: '/',
  },
  {
    icon: <RiFacebookFill size="2rem" />,
    href: '/',
  },
  {
    icon: <FaInstagram size="2rem" />,
    href: '/',
  },
];
