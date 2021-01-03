import React from 'react';
import styled from 'styled-components';
import { COLORS, DEF_PADDING } from '../utils/consts';
import { Container } from './Container';
import { TitleSection } from './TitleSection';
import { Tabs, TabsProps } from './ui/Tabs';
import { SkillsSlider } from './SkillsSlider';
import { SkillsList } from './SkillsList';

interface SkillsProps {}

export const Skills: React.FC<SkillsProps> = () => {
  const [tabs] = React.useState<TabsProps['tabs']>([
    {
      title: 'All',
      id: 0,
    },
    {
      title: 'List',
      id: 1,
    },
    {
      title: 'Favorites',
      id: 2,
    },
  ]);

  const [activeTab, setActiveTab] = React.useState(0);

  const renderSkills = () => {
    if (activeTab === 0) {
      return <SkillsSlider />;
    }
    return <SkillsList isFavorite={activeTab === 2} />;
  };

  return (
    <WrapperS>
      <Container>
        <WrapperTitleS>
          <TitleSection title='Skills & Technologies' />
          <Tabs tabs={tabs} activeTab={activeTab} onClick={(id) => setActiveTab(id)} />
        </WrapperTitleS>
        {renderSkills()}
      </Container>
    </WrapperS>
  );
};

const WrapperS = styled.section`
  padding: ${DEF_PADDING} 0;
  background: #2c2d2d;
  min-height: 400px;
  h2 {
    color: #fff;
  }
`;

const WrapperTitleS = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
