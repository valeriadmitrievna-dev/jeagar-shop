import styled from "styled-components";

export const PxToVw = (px, screen = 1194) => {
  return `${(px * 100) / screen}vw`;
};

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 9% 1fr;
`;

export const MainContainer = styled.div`
  padding: ${PxToVw(24)};
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
    color: #ffffff;
    margin-bottom: ${PxToVw(4)};
  }
  p {
    font-size: ${PxToVw(16)};
    line-height: 140%;
    color: #e0e6e9;
  }
`;
