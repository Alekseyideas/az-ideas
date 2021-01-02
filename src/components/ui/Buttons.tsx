import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/consts';
import { MEDIA } from '../../utils/media';

interface DefaultButtonProps {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
  styles?: React.CSSProperties;
  isFilled?: boolean;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  title,
  onClick,
  type = 'button',
  styles,
  isFilled,
}) => {
  return (
    <DefButtonS style={styles} type={type} onClick={onClick} isFilled={isFilled}>
      {title}
    </DefButtonS>
  );
};

export const DefButtonS = styled.button<{ isFilled: boolean }>`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  font-size: 14px;
  border: 1px solid white;
  outline: 0;
  cursor: pointer;
  color: #fff;
  transition: 0.1s;
  ${MEDIA.maxLg} {
    padding: 10px 20px;
    font-size: 16px;
  }
  ${MEDIA.minLg} {
    &:hover {
      border: 1px solid ${COLORS.accent};
      color: ${COLORS.accent};
    }
    &:active {
      border: 1px solid ${COLORS.accentActive};
      color: ${COLORS.accentActive};
    }
  }

  ${({ isFilled }) =>
    isFilled
      ? `
  color:  ${COLORS.default};
  background: white;


  ${MEDIA.minLg} {
    &:hover {
    background: ${COLORS.accent};
    color: white;
    }
    &:active {
      border: 1px solid ${COLORS.accentActive};
      background: ${COLORS.accentActive};
      color: white;
    }
  }
  `
      : `
  background: none;
  `}
`;
