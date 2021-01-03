import React from 'react';
import styled from 'styled-components';
import { DEF_PADDING, COLORS } from '../utils/consts';
import { Container } from './Container';
import { TitleSection } from './TitleSection';

interface ServicesProps {}

export const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <WrapperS>
      <Container>
        <TitleSection title='Services' />
      </Container>
    </WrapperS>
  );
};

const WrapperS = styled.section`
  padding: ${DEF_PADDING} 0;
  background: #fff;
  min-height: 400px;
  h2 {
    /* color: #fff; */
  }
`;
