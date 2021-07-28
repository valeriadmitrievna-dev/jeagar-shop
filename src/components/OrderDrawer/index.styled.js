import styled from "styled-components";
import { PxToVw } from "../../index.styled";

export const DrawerOrderTypes = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${PxToVw(8)};
`;
export const DrawerOrderType = styled.div`
  padding: ${PxToVw(7)} ${PxToVw(12)};
  background: #1f1d2b;
  border: ${PxToVw(1)} solid #393c49;
  border-radius: ${PxToVw(8)};
  font-weight: 600;
  font-size: ${PxToVw(14)};
  line-height: 140%;
  color: #ea7c69;
  text-transform: capitalize;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    background: #ea7c69;
    color: #fff;
    border: ${PxToVw(1)} solid #ea7c69;
  `}
`;
export const DrawerOrderItemsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr ${PxToVw(48)} ${PxToVw(48)};
  gap: ${PxToVw(16)};
  padding: ${PxToVw(24)} 0;
  span {
    font-weight: 600;
    font-size: ${PxToVw(16)};
    line-height: 140%;
    text-transform: capitalize;
  }
`;
export const DrawerOrderList = styled.div`
  border-bottom: ${PxToVw(1)} solid #393c49;
  border-top: ${PxToVw(1)} solid #393c49;
  padding: ${PxToVw(24)} 0;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${PxToVw(24)};
`;
export const OrderedDishItem = styled.div`
  user-select: none;
  display: grid;
  grid-template-columns: 1fr ${PxToVw(48)} ${PxToVw(48)};
  gap: ${PxToVw(10)} ${PxToVw(16)};
  align-items: center;
  > input:last-of-type {
    grid-column: 1 / 3;
  }
`;
export const OrderedDishItemTitle = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${PxToVw(8)};
  img {
    width: ${PxToVw(40)};
    height: ${PxToVw(40)};
  }
  > div {
    p {
      font-weight: 500;
      font-size: ${PxToVw(14)};
      line-height: 130%;
      margin-bottom: ${PxToVw(8)};
      margin: 0;
      max-width: ${PxToVw(140)};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    span {
      font-weight: 500;
      font-size: ${PxToVw(12)};
      line-height: 140%;
      color: #abbbc2;
    }
  }
`;
export const DrawerOrderCostInfo = styled.div`
  margin: ${PxToVw(24)} 0;
  display: flex;
  flex-direction: column;
  gap: ${PxToVw(16)};
  > div {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    span {
      font-size: ${PxToVw(14)};
      line-height: 140%;
      color: #abbbc2;
    }
    b {
      font-weight: 500;
      font-size: ${PxToVw(16)};
      line-height: 140%;
      text-align: right;
      color: #ffffff;
    }
  }
`;
export const OrderItemInput = styled.input`
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
`;
export const OrderItemPrice = styled.div`
  font-weight: 500;
  font-size: ${PxToVw(16)};
  line-height: 140%;
  color: #fff;
  text-align: center;
`;
export const OrderItemDelete = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: ${PxToVw(1)} solid #ea7c69;
  border-radius: ${PxToVw(8)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  svg {
    width: ${PxToVw(20)};
    height: ${PxToVw(20)};
    path {
      transition: 0.3s;
    }
  }
  &:hover {
    border-color: #ff7ca3;
    background-color: #ff7ca30f;
    svg path {
      fill: #ff7ca3;
    }
  }
`;
