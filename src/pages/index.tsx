import React from 'react';
import { FirstScreen } from '../components/FirstScreen';
import { MainWrapper } from '../components/MainWrapper';
import { Slides } from '../components/Slides';

const IndexPage = () => {
  return (
    <>
      <MainWrapper>
        <title>Home Page</title>
        <FirstScreen />
        {/* <Slides /> */}
      </MainWrapper>
    </>
  );
};

export default IndexPage;
