import React from 'react';
import styled from 'styled-components';

interface TitleSectionProps {
  title: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ title }) => {
  return <TitleS>{title}</TitleS>;
};

const TitleS = styled.h2`
  font-size: 30px;
  margin: 0;
`;
