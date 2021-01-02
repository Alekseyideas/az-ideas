import React from 'react';
import styled from 'styled-components';

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <WrapperS>
      <p>
        Developer with 5+ years of experience in building websites and applications for various
        companies. 2+ years of experience in web design.
        <br />
        <br />
        Responsible for working on a range of projects. I’m a team player and hard-working person,
        always focused on the result and quality of my work.
      </p>
    </WrapperS>
  );
};

const WrapperS = styled.div`
  p {
    font-size: 20px;
    line-height: 2em;
  }
`;
