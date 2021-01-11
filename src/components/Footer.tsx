import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../utils/consts';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <WrapperS>
      <p>© {new Date().getFullYear()} AZ-ideas</p>
    </WrapperS>
  );
};

const WrapperS = styled.footer`
  background: ${COLORS.default};
  color: white;
  text-align: center;
  padding: 5px 10px;
  p {
    font-size: 12px;
    font-weight: 300;
  }
`;
