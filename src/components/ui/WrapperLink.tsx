import React from 'react';
import styled from 'styled-components';
import { btnFillStyles } from './Buttons';

interface WrapperLinkProps {
  children: React.ReactNode;
  isFilled?: boolean;
  styles?: React.CSSProperties;
}

export const WrapperLink: React.FC<WrapperLinkProps> = ({ children, isFilled, styles }) => {
  return (
    <WrapperBtnLinkS style={styles} isFilled={isFilled}>
      {children}
    </WrapperBtnLinkS>
  );
};

const WrapperBtnLinkS = styled.div`
  a {
    ${btnFillStyles}
  }
`;
