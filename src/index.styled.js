import styled from "styled-components";

export const PxToVw = (px, screen = 1194) => {
  return `${(px * 100) / screen}vw`;
};

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 7% 1fr;
  overflow-x: hidden;
`;

export const MainContainer = styled.div`
  padding: ${PxToVw(24)};
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #1f1d2b;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ea7c69;
    border-radius: 2px;
  }
  > div:first-of-type {
    transition: 0.3s;
    width: 100%;
  }
  ${({ drawer }) =>
    drawer &&
    `
  > div:first-of-type {
    width: calc(100% - ${PxToVw(442)});
  }
  `}
`;

export const StaticDrawer = styled.div`
  background: #1f1d2b;
  height: 100vh;
  position: fixed;
  top: 0;
  transition: 0.4s;
  width: ${PxToVw(440)};
  border-radius: ${PxToVw(8)} 0 0 ${PxToVw(8)};
  padding: ${PxToVw(24)};
  right: ${({ drawer }) => (drawer ? 0 : PxToVw(-440))};
  display: flex;
  flex-direction: column;
`;

export const StaticDrawerTitle = styled.h4`
  font-weight: 600;
  font-size: ${PxToVw(20)};
  line-height: 140%;
  margin-bottom: ${PxToVw(24)};
`;

export const PageHeader = styled.div`
  margin-bottom: ${PxToVw(24)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ bordered }) =>
    bordered &&
    `
		border-bottom: ${PxToVw(1)} solid #393C49;
		padding-bottom: ${PxToVw(24)};
	`}
`;

export const PageTitle = styled.div`
  h2 {
    font-weight: 600;
    font-size: ${PxToVw(28)};
    line-height: 140%;
    margin-bottom: ${PxToVw(4)};
  }
  p {
    font-size: ${PxToVw(16)};
    line-height: 140%;
    color: #e0e6e9;
    margin: 0;
  }
`;

export const OrangeButton = styled.button`
  display: block;
  padding: ${PxToVw(14)};
  background: #ea7c69;
  border-radius: ${PxToVw(8)};
  transition: 0.3s;
  font-weight: 600;
  font-size: ${PxToVw(14)};
  line-height: 140%;
  color: #fafafa;
  width: 100%;
  &:hover {
    box-shadow: 0 ${PxToVw(8)} ${PxToVw(24)} rgba(234, 124, 105, 0.3);
  }
`;
