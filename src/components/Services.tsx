import React from 'react';
import styled from 'styled-components';
import { DEF_PADDING, COLORS } from '../utils/consts';
import { Container } from './Container';
import { Service } from './Service';
import { IconDesign, IconMobileDev, IconWebDev } from './svgs/services/';
import { TitleSection } from './TitleSection';

interface ServicesProps {}

export const Services: React.FC<ServicesProps> = ({}) => {
  return (
    <WrapperS>
      <Container>
        <TitleSection title='Services' />
        <WrapperServicesS>
          <Service
            icon={<IconDesign />}
            title='Design'
            description='Design with the latest UI-UX practices'
          />
          <Service
            icon={<IconWebDev />}
            title='Web Development'
            description='Create responsive web applications and mobile frieandly websites with React, Node.js or Wordpress'
          />
          <Service
            icon={<IconMobileDev />}
            title='IOS & Android Development'
            description='Developing modern and easy to use apps for both platforms iOS and Android with React Native'
          />
        </WrapperServicesS>
      </Container>
    </WrapperS>
  );
};

const WrapperS = styled.section`
  padding: ${DEF_PADDING} 0;
  background: #eeeeee;
  min-height: 400px;
  h2 {
    /* color: #fff; */
  }
`;

const WrapperServicesS = styled.div`
  display: flex;
  justify-content: space-between;
  & > * {
    width: 31%;
  }
`;
