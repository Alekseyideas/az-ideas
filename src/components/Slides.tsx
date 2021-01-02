import React from 'react';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';
import SkySrc from '../images/sky-2.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { About } from './About';
interface SlidesProps {}

export const Slides: React.FC<SlidesProps> = ({}) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <Slider {...settings}>
      <SlideS src={SkySrc}>
        <About />
      </SlideS>
    </Slider>
  );
};

const SlideS = styled.div<{ src: string }>`
  min-height: calc(100vh - 90px);
  display: flex !important;
  align-items: center;
  justify-content: center;
  outline: 0;
  background: white;
  opacity: 1;
  padding: 20px;

  & > * {
    max-width: 700px;
  }
`;
