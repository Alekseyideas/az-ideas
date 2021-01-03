import React from 'react';
import { FirstScreen } from '../components/FirstScreen';
import { MainWrapper } from '../components/MainWrapper';
import { Services } from '../components/Services';
import { Skills } from '../components/Skills';
import { Slides } from '../components/Slides';
import { Summary } from '../components/Summary';

const IndexPage = () => {
  return (
    <>
      <MainWrapper>
        <title>Home Page</title>
        <FirstScreen />
        <Summary />
        <Skills />
        <Services />
      </MainWrapper>
    </>
  );
};

export default IndexPage;
