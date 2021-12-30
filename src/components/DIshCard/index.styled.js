import styled from 'styled-components';
import { PxToVw } from '../../index.styled';

export const DishCard = styled.div`
  background: #1f1d2b;
  transition: 0.1s;
  position: relative;
  min-height: ${PxToVw(220)};
  h3,
  h4 {
    transition: 0.35s;
    position: absolute;
    font-weight: 500;
    font-size: ${PxToVw(12)};
    padding-right: ${PxToVw(12)};
    &::first-letter {
      text-transform: uppercase;
    }
    transform: translateX(${PxToVw(200)});
  }
  h3 {
    top: 0;
    /* background-color: green; */
    height: ${PxToVw(70)};
    overflow-y: auto;
    line-height: 150%;
  }
  h4 {
    top: 82%;
    left: 50%;
    color: #abbbc2;
  }
  &:hover {
    background: #14131c;
    transform: translate(${PxToVw(-5)}, ${PxToVw(-5)});
    img {
      transition-delay: 0.15s;
      transform: scale(1.1) translateY(${PxToVw(-8)});
    }
    h5 {
      transform: translateX(${PxToVw(-200)});
      transition-delay: 0.4s;
    }
    h2 {
      transform: translateX(${PxToVw(-200)});
      transition-delay: 0.5s;
    }
    p {
      transform: translateX(${PxToVw(-200)});
      transition-delay: 0.6s;
    }
    h3 {
      transform: translateX(${PxToVw(0)});
      transition-delay: 0.5s;
    }
    h4 {
      transform: translateX(${PxToVw(0)});
      transition-delay: 0.6s;
    }

    /* h3, h4 {
      transform: translateX(${PxToVw(-200)});
    } */
  }
  user-select: none;
  cursor: pointer;
  border-radius: ${PxToVw(16)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${PxToVw(114)} 0 ${PxToVw(24)} 0;
  img {
    transition: 0.3s;
    width: ${PxToVw(132)};
    height: ${PxToVw(132)};
    position: absolute;
    top: ${PxToVw(-34)};
  }
  h5,
  h2,
  p {
    text-align: center;
    transition: 0.35s;
  }
  h5 {
    font-weight: 500;
    font-size: ${PxToVw(14)};
    line-height: 130%;
    margin-bottom: ${PxToVw(8)};
  }
  h2,
  p {
    line-height: 140%;
    font-size: ${PxToVw(14)};
  }
  span {
    margin-bottom: ${PxToVw(4)};
  }
  p {
    color: #abbbc2;
    margin: 0;
  }
`;
export const DishCardContainer = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden;
  padding: 0 ${PxToVw(24)} 0 ${PxToVw(24)};
`;
