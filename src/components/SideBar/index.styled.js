import styled from 'styled-components';
import { PxToVw } from '../../index.styled';
export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding-top: ${PxToVw(15)};
  padding-bottom: ${PxToVw(15)};
  background-color: #1f1d2b;
  position: relative;
  border-radius: 0 ${PxToVw(15)} ${PxToVw(15)} 0;
  overflow-x: hidden;
`;
export const SideBarCursor = styled.div`
  position: absolute;
  content: '';
  top: ${({ top }) => top};
  left: ${PxToVw(12)};
  width: 100%;
  height: ${PxToVw(59)};
  background-color: #252836;
  z-index: 1;
  border-radius: ${PxToVw(10)} 0 0 ${PxToVw(10)};
  transition: 0.3s;
  margin-top: ${PxToVw(-10)};
  &::before {
    position: absolute;
    content: '';
    background-color: #1f1d2b;
    width: ${PxToVw(27)};
    height: ${PxToVw(27)};
    right: ${PxToVw(12)};
    top: ${PxToVw(-27)};
    z-index: 1;
    border-radius: 50%;
  }
  &::after {
    position: absolute;
    content: '';
    background-color: #1f1d2b;
    width: ${PxToVw(27)};
    height: ${PxToVw(27)};
    right: ${PxToVw(12)};
    top: ${PxToVw(59)};
    z-index: 1;
    border-radius: 50%;
  }
`;
export const SideBarCursorBcg = styled.div`
  position: relative;
  width: ${PxToVw(15)};
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  &::before {
    top: ${PxToVw(-12)};
    right: ${PxToVw(-58)};
    position: absolute;
    content: '';
    width: 100%;
    height: 140%;
    background-color: #252836;
  }
`;
export const SidebarItemsContainer = styled.div`
  z-index: 2;
  > svg {
    width: ${PxToVw(38)};
    height: ${PxToVw(38)};
  }
  display: flex;

  flex-direction: column;
  align-items: center;
  row-gap: ${PxToVw(30)};
`;
export const LogOutButton = styled.button`
  /* background-color: rgba(0,0,0,0); */
  cursor: pointer;
  border-radius: ${PxToVw(8)};
  padding: ${PxToVw(12)};
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    /* background-color: #ea7c69; */
    background-color: #cc553f;
    box-shadow: 0px ${PxToVw(8)} ${PxToVw(20)} rgba(234, 124, 105, 0.32);
    svg {
      path {
        fill: #fff;
      }
    }
  }
  transition: 0.3s;
  svg {
    path {
      transition: 0.3s;
    }
    display: block;
    width: ${PxToVw(16)};
    height: ${PxToVw(16)};
  }
`;
export const SideBarItem = styled.div`
  border-radius: ${PxToVw(8)};
  background-color: rgba(0, 0, 0, 0);
  transition: 0.3s;
  ${({ active }) =>
    active &&
    `
      background-color: #EA7C69;
      box-shadow: 0px ${PxToVw(8)} ${PxToVw(20)} rgba(234, 124, 105, 0.32);
    `}
  &:hover {
    background-color: #ea7c69;
    box-shadow: 0px ${PxToVw(8)} ${PxToVw(20)} rgba(234, 124, 105, 0.32);
    svg {
      path {
        fill: white;
      }
    }
  }
  svg {
    display: block;
    width: ${PxToVw(16)};
    height: ${PxToVw(16)};
    path {
      ${({ active }) => active && 'fill: white;'}
      transition: 0.3s;
    }
  }
  a {
    display: block;
    padding: ${PxToVw(12)};
  }
`;
