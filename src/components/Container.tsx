import React from 'react';
import styled from 'styled-components';
import { CONT_WIDTH } from '../utils/consts';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <WrapperS>{children}</WrapperS>;
};

const WrapperS = styled.div`
  max-width: ${CONT_WIDTH};
  width: 100%;
  margin: auto;
  padding: 0 20px;
  z-index: 1;
  position: relative;
`;
