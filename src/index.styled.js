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
export const DrawerCloseButton = styled.button`
  right: ${PxToVw(24)};
  top: ${PxToVw(30)};
  position: absolute;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDMyOS4yNjkzMyAzMjkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTE5NC44MDA3ODEgMTY0Ljc2OTUzMSAxMjguMjEwOTM4LTEyOC4yMTQ4NDNjOC4zNDM3NS04LjMzOTg0NCA4LjM0Mzc1LTIxLjgyNDIxOSAwLTMwLjE2NDA2My04LjMzOTg0NC04LjMzOTg0NC0yMS44MjQyMTktOC4zMzk4NDQtMzAuMTY0MDYzIDBsLTEyOC4yMTQ4NDQgMTI4LjIxNDg0NC0xMjguMjEwOTM3LTEyOC4yMTQ4NDRjLTguMzQzNzUtOC4zMzk4NDQtMjEuODI0MjE5LTguMzM5ODQ0LTMwLjE2NDA2MyAwLTguMzQzNzUgOC4zMzk4NDQtOC4zNDM3NSAyMS44MjQyMTkgMCAzMC4xNjQwNjNsMTI4LjIxMDkzOCAxMjguMjE0ODQzLTEyOC4yMTA5MzggMTI4LjIxNDg0NGMtOC4zNDM3NSA4LjMzOTg0NC04LjM0Mzc1IDIxLjgyNDIxOSAwIDMwLjE2NDA2MyA0LjE1NjI1IDQuMTYwMTU2IDkuNjIxMDk0IDYuMjUgMTUuMDgyMDMyIDYuMjUgNS40NjA5MzcgMCAxMC45MjE4NzUtMi4wODk4NDQgMTUuMDgyMDMxLTYuMjVsMTI4LjIxMDkzNy0xMjguMjE0ODQ0IDEyOC4yMTQ4NDQgMTI4LjIxNDg0NGM0LjE2MDE1NiA0LjE2MDE1NiA5LjYyMTA5NCA2LjI1IDE1LjA4MjAzMiA2LjI1IDUuNDYwOTM3IDAgMTAuOTIxODc0LTIuMDg5ODQ0IDE1LjA4MjAzMS02LjI1IDguMzQzNzUtOC4zMzk4NDQgOC4zNDM3NS0yMS44MjQyMTkgMC0zMC4xNjQwNjN6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4=");
  width: ${PxToVw(16)};
  height: ${PxToVw(16)};
  background-size: ${PxToVw(16)};
  background-position: center;
  background-color: transparent;
  cursor: pointer;
`;
export const StaticDrawerTitle = styled.h4`
  font-weight: 600;
  font-size: ${PxToVw(20)};
  line-height: 140%;
  margin-bottom: ${PxToVw(24)};
  ${({ bordered }) =>
    bordered &&
    `
		border-bottom: ${PxToVw(1)} solid #393C49;
		padding-bottom: ${PxToVw(24)};
	`}
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
  &:disabled {
    &:hover {
      box-shadow: none;
    }
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const GrayInput = styled.input`
  display: block;
  padding: ${PxToVw(14)};
  background: #2d303e;
  border: ${PxToVw(1)} solid #393c49;
  border-radius: ${PxToVw(8)};
  font-weight: 500;
  font-size: ${PxToVw(16)};
  line-height: 140%;
  color: #fff;
  ${({ centered }) => centered && "text-align: center;"}
  &[type=password] {
    letter-spacing: 0.3em;
    &::placeholder {
      letter-spacing: normal;
    }
  }
`;
export const InputGroup = styled.div`
  label {
    display: block;
    font-weight: 500;
    font-size: ${PxToVw(14)};
    line-height: 130%;
    margin-bottom: ${PxToVw(8)};
  }
  width: 100%;
  input {
    width: 100%;
  }
`;

export const InputGroupRow = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${PxToVw(13)};
  > div {
    flex-grow: 1;
  }
`;
