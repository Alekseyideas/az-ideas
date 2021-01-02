import React from 'react';
import styled from 'styled-components';
import CitySrc from '../images/beautiful.jpg';
import { MEDIA } from '../utils/media';
import { DefaultButton } from './ui';

export const FirstScreen: React.FC = ({}) => {
  return (
    <WrapperS>
      <div style={{ zIndex: 1, position: 'relative' }}>
        <WrapperTitleS>
          <div>
            <h1>
              JavaScript <span>Engineer</span>
            </h1>
          </div>

          <WrapperDevS>
            <div>
              <DeveloperNameS>Aleksey Zelenskiy</DeveloperNameS>
              <i>
                If you do not think about the future, you cannot have one <br />{' '}
                <span>(John Galsworthy)</span>
              </i>
              <ButtonWrapperS>
                <DefaultButton
                  styles={{ marginRight: '18px' }}
                  title='About'
                  onClick={() => console.log(1)}
                />
                <DefaultButton title='Download CV' onClick={() => console.log(1)} isFilled />
              </ButtonWrapperS>
            </div>
          </WrapperDevS>
        </WrapperTitleS>
      </div>
    </WrapperS>
  );
};

const WrapperS = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, #000, #000, #3d3d3d, #000);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  color: #fff;
  text-align: left;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    background: url(${CitySrc}) no-repeat bottom / cover;
  }
  h1 {
    color: #fff;
    font-size: 70px;
    display: block;
    width: 100%;
    span {
      display: block;
      padding-left: 45%;
    }

    ${MEDIA.maxLg} {
      margin: 0;
    }
    ${MEDIA.maxMd} {
      font-size: 50px;
      span {
        padding-left: 25%;
      }
    }
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const WrapperDevS = styled.div`
  display: flex;
  margin: 80px 0 0 40px;
  &::before {
    content: '';
    display: block;
    width: 80px;
    height: 1px;
    margin-top: 12px;
    background: white;
    margin-right: 20px;
  }

  i {
    font-size: 12px;
    font-weight: 300;
  }

  ${MEDIA.maxLg} {
    margin: 20px 0 0 0px;
    &::before {
      display: none;
    }
  }
`;

const DeveloperNameS = styled.h2`
  font-weight: 300;
  margin: 0;
`;

const WrapperTitleS = styled.div`
  display: flex;
  ${MEDIA.maxLg} {
    flex-direction: column;
  }
`;

const ButtonWrapperS = styled.div`
  display: flex;
  margin-top: 20px;
`;
