import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { COLORS, SIDE_BAR_WIDTH } from '../utils/consts';
import { Header } from './Header';
import { SideBar } from './SideBar';

interface MainWrapperProps {
  children: React.ReactNode;
  hideSideBar?: boolean;
}

export const MainWrapper: React.FC<MainWrapperProps> = ({ children, hideSideBar }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      {hideSideBar ? null : <SideBar />}
    </>
  );
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${COLORS.default};
    background: #fff;
    font-family: -apple-system, Roboto, sans-serif, serif;
    padding: 0;
    /* padding: 0  ${SIDE_BAR_WIDTH}px 0 0; */
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }


  a {
    text-decoration: none;
    &:hover {
      color: ${COLORS.accent};
    }
  }
`;
