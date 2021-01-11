import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { COLORS } from '../utils/consts';
import { Logo } from './svgs/Logo';
import { MEDIA } from '../utils/media';
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const [isActive, setIsActive] = React.useState(false);
  React.useEffect(() => {
    const posFn = () => {
      if (window.scrollY > window.innerHeight) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    posFn();

    window.addEventListener('scroll', posFn);
    return () => window.removeEventListener('scroll', posFn);
  }, []);
  return (
    <HeaderS isActive={isActive}>
      <LogoLinkS to='/'>
        <Logo />
      </LogoLinkS>
      <NavS>
        <span>About</span>
        <span>Skills</span>
        <span>Services</span>
        <span>Education</span>
        <span>Experience</span>
        <span>Portfolio</span>
      </NavS>
    </HeaderS>
  );
};

const LogoLinkS = styled(Link)`
  width: 50px;
  height: 50px;
  display: block;
  /* transition: 0.2s; */
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const HeaderS = styled.header<{ isActive?: boolean }>`
  padding: 10px 20px;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 9;

  ${({ isActive }) =>
    isActive
      ? `
      position: fixed;
      background: #2c2d2d;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);


    ${LogoLinkS} {
      width: 30px;
      height: 30px;
    }

  `
      : ''}
`;
const NavS = styled.nav`
  display: flex;

  span {
    margin-left: 20px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    &:hover {
      color: #d46a6a;
    }
  }

  ${MEDIA.maxLg} {
    display: none;
  }
`;
