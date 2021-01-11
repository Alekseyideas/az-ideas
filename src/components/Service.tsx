import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../utils/consts';
import { IconDesign } from './svgs/services/IconDesign';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

export const Service: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <WrapperS>
      <IconWrapperS>{icon}</IconWrapperS>
      <TitleS>{title}</TitleS>
      <DescS>{description}</DescS>
    </WrapperS>
  );
};

const IconWrapperS = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #eeeeee;
  margin: auto;
  transition: 0.2s;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 60%;
    height: auto;
    position: relative;
    z-index: 1;
    path,
    g {
      fill: ${COLORS.default};
      transition: 0.05s;
    }
  }
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background: ${COLORS.accentActive};
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    transition: 0.2s;
    transform: scale(0);
  }
`;

const WrapperS = styled.article`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  width: 100%;
  padding: 20px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

    ${IconWrapperS} {
      &::before {
        transform: scale(1);
      }
      svg {
        path,
        g {
          fill: #fff;
        }
      }
    }
  }
`;

const TitleS = styled.h3`
  text-align: center;
  font-size: 22px;
`;
const DescS = styled.p`
  text-align: center;
  color: #999999;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5em;
  max-width: 300px;
  margin: auto;
`;
