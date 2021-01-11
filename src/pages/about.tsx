import React from 'react';
import { MainWrapper } from '../components/MainWrapper';

interface aboutProps {}

export const AboutPage: React.FC<aboutProps> = ({}) => {
  return (
    <>
      <MainWrapper>
        <title>About Page</title>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum possimus, nulla quibusdam
          corrupti dolorum nihil blanditiis eaque recusandae repellat veritatis, at accusantium modi
          libero, quod excepturi distinctio soluta. Fugit, ex.
        </p>
      </MainWrapper>
    </>
  );
};

export default AboutPage;
