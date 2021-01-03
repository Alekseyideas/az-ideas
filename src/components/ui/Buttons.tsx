import React from 'react';
import styled, { css } from 'styled-components';
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
    <FullBtnS style={styles} type={type} onClick={onClick} isFilled={isFilled}>
      {title}
    </FullBtnS>
  );
};

interface DefaultButtonLinkProps {
  title: string;
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  styles?: React.CSSProperties;
  isFilled?: boolean;
}

export const DefaultButtonLink: React.FC<DefaultButtonLinkProps> = ({
  title,
  href,
  target = '_self',
  styles,
  isFilled,
}) => {
  return (
    <FullBtnLinkS style={styles} href={href} target={target} isFilled={isFilled}>
      {title}
    </FullBtnLinkS>
  );
};

export const DefaultButtonWhite: React.FC<DefaultButtonProps> = ({
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

export const btnDefStyles = css<{ isFilled: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
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

export const btnFillStyles = css<{ isFilled: boolean }>`
  ${btnDefStyles};

  ${({ isFilled }) =>
    isFilled
      ? `
   background: ${COLORS.accentActive};
    border: 1px solid ${COLORS.accentActive};
    color: white;

  ${MEDIA.minLg} {
    &:hover {
      background: ${COLORS.mainAccent};
      border: 1px solid ${COLORS.mainAccent};
      color: white;
    }
    &:active {
      background: ${COLORS.mainAccentActive};
      border: 1px solid ${COLORS.mainAccentActive};
      color: white;
    }
  }
  `
      : `
  border: 1px solid ${COLORS.accentActive};
  color: ${COLORS.accentActive};

  ${MEDIA.minLg} {
    &:hover {
      border: 1px solid ${COLORS.mainAccent};
      color: ${COLORS.mainAccent};
    }
    &:active {
      border: 1px solid ${COLORS.accentActive};
      background: ${COLORS.accentActive};
      color: white;
    }
  }
  `}
`;

const DefButtonS = styled.button<{ isFilled: boolean }>`
  ${btnDefStyles}
`;

const FullBtnS = styled(DefButtonS)`
  ${btnFillStyles}
`;

const FullBtnLinkS = styled.a<{ isFilled: boolean }>`
  ${btnFillStyles}
`;
