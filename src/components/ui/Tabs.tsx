import React from 'react';
import styled from 'styled-components';
import { COLORS, DEF_PADDING } from '../../utils/consts';
import { MEDIA } from '../../utils/media';

export interface TabsProps {
  tabs: {
    title: string;
    active?: boolean;
    icon?: React.ReactNode;
    id: number;
  }[];
  activeTab: number;
  onClick: (id: number) => void;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onClick }) => {
  return (
    <WrapperS>
      {tabs.map((tab) => {
        return (
          <BtnS
            key={tab.id}
            type='button'
            active={tab.id === activeTab}
            onClick={() => onClick(tab.id)}
          >
            {tab.icon || ''}
            {tab.title}
          </BtnS>
        );
      })}
    </WrapperS>
  );
};

const WrapperS = styled.section`
  display: flex;
`;

const BtnS = styled.button<{ active?: boolean }>`
  cursor: pointer;

  border: 0;
  outline: 0;
  padding: 8px 20px;
  font-size: 14px;
  margin-left: 1px;

  ${({ active }) =>
    active
      ? `
    background: ${COLORS.accentActive};
  color: #fff;
  `
      : `
  background: #5e5e5e;
  color: #fff;
  ${MEDIA.minLg} {
    transition: 0.2s;
    &:hover {
      background: #e2e2e2;
      color: #5e5e5e;
    }
  }
  `}
`;
