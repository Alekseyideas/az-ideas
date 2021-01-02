import React from 'react';
import styled from 'styled-components';
import { COLORS, SIDE_BAR_WIDTH } from '../utils/consts';
import { Linkedin } from './svgs/Linkedin';
import CitySrc from '../images/city.svg';

export const SideBar: React.FC = () => {
  return null;
  return (
    <AsideWrapperS>
      <ImageCityS src={CitySrc} title='city' />
      <div>
        <NameS>Aleksey Zelenskiy</NameS>
      </div>
      <ContactLinksWrapperS>
        <LinkS href='/' target='_blank'>
          <Linkedin />
        </LinkS>
      </ContactLinksWrapperS>
    </AsideWrapperS>
  );
};

const AsideWrapperS = styled.aside`
  position: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  right: 0;
  top: 0;
  background: #242427;
  width: ${SIDE_BAR_WIDTH}px;
  height: 100%;
  padding: 20px 20px 20px;
`;
const NameS = styled.h1`
  color: #fff;
  margin-top: 10px;
`;
const ContactLinksWrapperS = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const LinkS = styled.a`
  svg {
    width: 30px;
    height: 30px;
    path {
      transition: 0.1s;
      fill: #fff;
    }
  }

  &:hover {
    svg {
      path {
        fill: ${COLORS.accent};
      }
    }
  }
`;

const ImageCityS = styled.img`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 220%;
  opacity: 0.06;
`;
