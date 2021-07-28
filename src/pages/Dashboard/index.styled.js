import styled from 'styled-components';
import { PxToVw } from '../../index.styled';

export const DashboardContainer = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
  gap: ${PxToVw(24)};
`;
export const DashboardLeftSection = styled.div`
  width: 63%;
  display: flex;
  flex-direction: column;
`;
export const DashboardLeftScrollContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: ${PxToVw(143)} 1fr;
  gap: ${PxToVw(24)};
  overflow-y: auto;
`;
export const DashboardInfoCard = styled.div`
  background-color: #1f1d2b;
  border-radius: ${PxToVw(8)};
  grid-row: 1;
  padding: ${PxToVw(16)};
  h1 {
    font-size: ${PxToVw(28)};
    font-weight: 600;
    line-height: 200%;
    margin: 0;
  }
  h2 {
    font-size: ${PxToVw(14)};
    font-weight: 500;
    color: #abbbc2;
    margin: 0;
  }
`;
export const InfoCardPercent = styled.div`
  color: ${({ positive }) => (positive ? '#50D1AA' : '#FF7CA3')};
  display: flex;
  align-items: center;
  column-gap: ${PxToVw(12)};
  font-size: ${PxToVw(12)};
  font-weight: 500;
  > img {
    width: ${PxToVw(38)};
    height: ${PxToVw(38)};
  }
  span {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: ${PxToVw(-4)};
    &::before {
      position: absolute;
      content: '';
      left: center;
      right: center;
      width: ${PxToVw(18)};
      height: ${PxToVw(18)};
      z-index: 0;
      background-color: ${({ positive }) =>
        positive ? 'rgba(136, 224, 145, 0.24)' : 'rgba(255, 100, 113, 0.24)'};
      border-radius: 50%;
    }
    svg {
      width: ${PxToVw(12)};
      height: ${PxToVw(12)};
      transform: ${({ positive }) =>
        positive ? 'rotate(0deg)' : 'rotate(180deg)'};
      path {
        fill: ${({ positive }) => (positive ? '#50D1AA' : '#FF7CA3')};
      }
    }
  }
`;
export const DashboardOrderReport = styled.div`
  grid-row: 2;
  grid-column: 1/4;
  border-radius: ${PxToVw(8)};
  background-color: #1f1d2b;
  justify-self: stretch;
  height: fit-content;
  padding: ${PxToVw(24)};
`;
export const OrderReportTitle = styled.div`
  font-size: ${PxToVw(20)};
  font-weight: 600;
  margin-bottom: ${PxToVw(20)};
`;
export const OrderReportContentTitle = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 0.7fr;
  position: relative;
  font-size: ${PxToVw(14)};
  font-weight: 600;
  margin-bottom: ${PxToVw(24)};

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    height: ${PxToVw(1)};
    background-color: #393c49;
    width: 100%;
  }
`;
export const OrderReportitem = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 0.7fr;
  margin-bottom: ${PxToVw(24)};
  &:last-of-type{
    margin: 0;
  }
  p {
    display: flex;
    align-items: center;
    margin: 0;
    color: #e0e6e9;
    font-size: ${PxToVw(14)};
    &:last-of-type {
      display: flex;
      color: #50d1aa;
      align-items: center;
      justify-content: center;
      background-color: rgba(107, 226, 190, 0.24);
      border-radius: ${PxToVw(30)};
      text-transform: capitalize;
      ${({ status }) => {
        if (status === 'pending') {
          return 'background-color: rgba(255, 181, 114, 0.2); color: #FFB572;';
        }
        if (status === 'completed') {
          return 'background-color: rgba(107, 226, 190, 0.24); color:#50D1AA;';
        }
        if (status === 'canceled') {
          return 'background-color: rgba(168, 78, 50, 0.24); color:#db481a';
        }
        if (status === 'preparing') {
          return 'background-color:  rgba(146, 144, 254, 0.2); color: #9290FE;';
        }
      }}
    }
  }
`;
export const OrderReportitemName = styled.div`
  color: #e0e6e9;
  display: flex;
  align-items: center;
  column-gap: ${PxToVw(14)};
  font-size: ${PxToVw(14)};
  img {
    width: ${PxToVw(32)};
    height: ${PxToVw(32)};
  }
`;
export const DashboardRightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: ${PxToVw(372)};
  gap: ${PxToVw(24)};
  height: 100%;
  overflow-y: auto;
`;
export const DashboardMostOrdered = styled.div`
  background-color: #1f1d2b;
  border-radius: ${PxToVw(8)};
  height: fit-content;
  padding: ${PxToVw(24)};
`;
export const MostOrderedTitle = styled.div`
  font-size: ${PxToVw(20)};
  font-weight: 600;
  line-height: 200%;
  border-bottom: ${PxToVw(1)} solid #393c49;
  padding-bottom: ${PxToVw(24)};
  margin-bottom: ${PxToVw(20)};
`;
export const MostOrderedContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${PxToVw(24)};
  margin-bottom: ${PxToVw(32)};
`;
export const MostOrderedItem = styled.div`
  display: flex;
  gap: ${PxToVw(16)};
  img {
    display: block;
    width: ${PxToVw(54)};
    height: ${PxToVw(54)};
  }
`;
export const MostOrderedItemText = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: ${PxToVw(3)};
    font-size: ${PxToVw(14)};
    line-height: 130%;
    color: #e0e6e9;
  }
  p {
    font-size: ${PxToVw(12)};
    line-height: 140%;

    color: #abbbc2;
  }
`;
export const MostOrderedBtn = styled.button`
  background-color: rgba(0, 0, 0, 0);
  text-align: center;
  width: 100%;
  border: ${PxToVw(1)} solid #ea7c69;
  color: #ea7c69;
  font-size: ${PxToVw(14)};
  line-height: 100%;
  padding: ${PxToVw(14)} 0;
  border-radius: ${PxToVw(8)};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #ea7c69;
    color: #fff;
    box-shadow: 0px ${PxToVw(8)} ${PxToVw(24)} rgba(234, 124, 105, 0.32);
  }
`;
export const DashboardMostTypeOrder = styled.div`
  background-color: #1f1d2b;
  border-radius: ${PxToVw(8)};
  padding: ${PxToVw(24)};
`;
export const MostTypeOrderTitle = styled.div`
border-bottom: ${PxToVw(1)} solid #393C49;
font-size: ${PxToVw(20)};
font-weight: 600; 
padding-bottom: ${PxToVw(24)};

`