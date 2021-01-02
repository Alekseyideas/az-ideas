import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { COLORS, DEF_PADDING, MY_EMAIL } from '../utils/consts';
import { MEDIA } from '../utils/media';
import { Container } from './Container';
import { IconSummary } from './svgs/IconSummary';
import { TitleSection } from './TitleSection';
import { DefaultButtonLink, WrapperLink } from './ui';

interface SummaryProps {}

export const Summary: React.FC<SummaryProps> = ({}) => {
  const thisYear = new Date().getFullYear();
  return (
    <WrapperS>
      <Container>
        <FlexBlockS>
          <TextWrapperS>
            <TitleSection title='About' />
            <p>
              Developer with {thisYear - 2016}+ years of experience in building websites and
              applications for various companies. <br /> 3+ years of experience in web design.
            </p>
            <BtnsWrapperS>
              <WrapperLink styles={{ marginRight: '20px' }}>
                <Link to='/about' title='Learn More'>
                  Learn More
                </Link>
              </WrapperLink>

              <DefaultButtonLink title='Contact with me' href={`mailto:${MY_EMAIL}`} isFilled />
            </BtnsWrapperS>
          </TextWrapperS>
        </FlexBlockS>
      </Container>
    </WrapperS>
  );
};

const WrapperS = styled.section`
  padding: ${DEF_PADDING} 0;
`;

const FlexBlockS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextWrapperS = styled.div`
  line-height: 1.5em;
  text-align: center;
`;

const BtnsWrapperS = styled.div`
  display: flex;
  justify-content: center;
`;
