import React from 'react';
import Slider, { Settings } from 'react-slick';
import Img from 'gatsby-image';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as Svgs from './svgs/skills/';
import IconGulp from '../images/gulp.svg';
import IconPug from '../images/pug.svg';
import { graphql, useStaticQuery } from 'gatsby';

interface SkillsSliderProps {}

export const SkillsSlider: React.FC<SkillsSliderProps> = ({}) => {
  const data = useStaticQuery(querySkills);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };
  const imgEl = (name: string, title?: string, width?: number) => (
    <Img
      className='imageSliderSkills'
      fluid={data[name].childImageSharp.fluid}
      alt={title || name}
      style={width ? { width } : {}}
    />
  );
  return (
    <SliderS className='sliderSkills' {...settings}>
      <SliderItmS>{imgEl('jsHtmlCss', 'js html css')}</SliderItmS>
      <SliderItmS>
        <img src={IconPug} alt='pug' style={{ width: '100px', height: 'auto' }} />
      </SliderItmS>

      <SliderItmS>{imgEl('react')}</SliderItmS>
      <SliderItmS>{imgEl('redux')}</SliderItmS>
      <SliderItmS>{imgEl('rsaga', 'redux safa')}</SliderItmS>
      <SliderItmS>{imgEl('stlc', 'styled components', 80)}</SliderItmS>
      <SliderItmS>{imgEl('sass', 'sass', 80)}</SliderItmS>

      <SliderItmS>
        <Svgs.IconNode />
      </SliderItmS>
      <SliderItmS>{imgEl('typescript', 'Typescript', 80)}</SliderItmS>
      <SliderItmS>{imgEl('php', 'php', 80)}</SliderItmS>
      <SliderItmS>{imgEl('wp', 'wordpress')}</SliderItmS>
      <SliderItmS>{imgEl('psql', 'postgreSQL', 80)}</SliderItmS>
      <SliderItmS>{imgEl('MySQL', '', 80)}</SliderItmS>
      <SliderItmS>{imgEl('sqlizer')}</SliderItmS>
      <SliderItmS>{imgEl('tporm')}</SliderItmS>
      <SliderItmS>{imgEl('webpack')}</SliderItmS>
      <SliderItmS>
        <img src={IconGulp} alt='gulp' style={{ width: '60px', height: 'auto' }} />
      </SliderItmS>

      <SliderItmS>
        <Svgs.IconAdobe />
      </SliderItmS>
      <SliderItmS>
        <Img
          className='imageSliderSkills'
          style={{ width: '80px' }}
          fluid={data.illustrator.childImageSharp.fluid}
          alt='ddd'
        />
      </SliderItmS>
    </SliderS>
  );
};

const SliderS = styled(Slider)`
  display: flex;
  align-items: center;
  margin-top: 40px;

  svg {
    width: 100%;
    height: auto;
    max-height: 80px;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }
`;

const SliderItmS = styled.div`
  padding: 20px 40px;

  & > * {
    margin: auto;
  }
  &:focus {
    outline: 0;
  }
`;

const querySkills = graphql`
  query {
    jsHtmlCss: file(relativePath: { eq: "js_html_css.png" }) {
      childImageSharp {
        fluid(maxWidth: 1109, maxHeight: 432) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    illustrator: file(relativePath: { eq: "illustrator.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024, maxHeight: 998) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    typescript: file(relativePath: { eq: "typescript.png" }) {
      childImageSharp {
        fluid(maxWidth: 1024, maxHeight: 1024) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    redux: file(relativePath: { eq: "redux.png" }) {
      childImageSharp {
        fluid(maxWidth: 3610, maxHeight: 1490) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    react: file(relativePath: { eq: "react.png" }) {
      childImageSharp {
        fluid(maxWidth: 700, maxHeight: 235) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rsaga: file(relativePath: { eq: "r-saga.png" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 167) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    stlc: file(relativePath: { eq: "stlc.png" }) {
      childImageSharp {
        fluid(maxWidth: 318, maxHeight: 318) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sass: file(relativePath: { eq: "sass.png" }) {
      childImageSharp {
        fluid(maxWidth: 647, maxHeight: 647) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    webpack: file(relativePath: { eq: "webpackLogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 3916, maxHeight: 1524) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    php: file(relativePath: { eq: "php.png" }) {
      childImageSharp {
        fluid(maxWidth: 512, maxHeight: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wp: file(relativePath: { eq: "wp.png" }) {
      childImageSharp {
        fluid(maxWidth: 900, maxHeight: 264) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    MySQL: file(relativePath: { eq: "MySQL.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    psql: file(relativePath: { eq: "psql.png" }) {
      childImageSharp {
        fluid(maxWidth: 512, maxHeight: 512) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sqlizer: file(relativePath: { eq: "sqlizer.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 146) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tporm: file(relativePath: { eq: "tporm.png" }) {
      childImageSharp {
        fluid(maxWidth: 739, maxHeight: 342) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
