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
  background-color: #1F1D2B;
`;
export const SidebarItemsContainer = styled.div`
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
    background-color: #ea7c69;
    transition: 0.3s;
    svg {
      path {
        fill: #fff;
      }
    }
  }
  svg {
    display: block;
    width: ${PxToVw(16)};
    height: ${PxToVw(16)};
  }
`;

export const SideBarItem = styled.div`
  svg {
    display: block;
    width: ${PxToVw(16)};
    height: ${PxToVw(16)};
    path {
      ${({ active }) => active && 'fill: white;'}
      transition: 0.3s;
    }
  }
  border-radius: ${PxToVw(8)};
  a {
    display: block;
    padding: ${PxToVw(12)};
  }
  background-color: rgba(0, 0, 0, 0);
  transition: 0.3s;
  ${({ active }) => active && 'background-color: #EA7C69;'}
`;
