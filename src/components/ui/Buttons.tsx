import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

interface DefaultButtonProps {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick: () => void;
  styles?: React.StyleHTMLAttributes<any>;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  title,
  onClick,
  type = 'button',
  styles,
}) => {
  return (
    <DefButtonS style={styles} type={type} onClick={onClick}>
      {title}
    </DefButtonS>
  );
};

export const DefButtonS = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  font-size: 14px;
  border: 1px solid white;
  outline: 0;
  background: none;
  cursor: pointer;
  color: #fff;
`;
