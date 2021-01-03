import React from 'react';
import styled from 'styled-components';
import { SKILLS } from '../data/skills';

interface SkillsListProps {
  isFavorite?: boolean;
}

export const SkillsList: React.FC<SkillsListProps> = ({ isFavorite }) => {
  const rows = 5;

  const renderRows = () => {
    let els: JSX.Element[] = [];
    let skills: typeof SKILLS = [];

    if (isFavorite) {
      skills = SKILLS.filter((sk) => sk.favorite);
    } else {
      skills = SKILLS;
    }

    const elInCol = Math.round(skills.length / rows);
    for (let index = 0; index <= rows; index++) {
      const el = (
        <ul key={index}>
          {skills.slice(index * elInCol, index * elInCol + elInCol).map((sk, i) => (
            <li key={sk.title}>
              - {sk.title}
              {/* {i + 1 + index * elInCol}. {sk.title} */}
            </li>
          ))}
        </ul>
      );
      els.push(el);
    }

    return els;
  };
  return <WrapperS>{renderRows()}</WrapperS>;
};

const WrapperS = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  ul {
    list-style: none;
    padding: 0;
    li {
      margin: 15px 0;
      padding-right: 10px;
    }
  }
`;
