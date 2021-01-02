import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { COLORS } from '../utils/consts';
import { Logo } from './svgs/Logo';
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <HeaderS>
      <LogoLinkS to='/'>
        <Logo />
      </LogoLinkS>
      <NavS>
        <span>About</span>
        <span>Skills</span>
        <span>Education</span>
        <span>Experience</span>
        <span>Portfolio</span>
      </NavS>
    </HeaderS>
  );
};

const HeaderS = styled.header`
  padding: 20px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 9;
`;
const NavS = styled.nav`
  display: flex;

  span {
    margin-left: 20px;
    color: #fff;
    cursor: pointer;
    &:hover {
      color: #f5b9a7;
    }
  }
`;

const LogoLinkS = styled(Link)`
  width: 50px;
  height: 50px;
  display: block;
  & > svg {
    width: 100%;
    height: 100%;
  }
`;
