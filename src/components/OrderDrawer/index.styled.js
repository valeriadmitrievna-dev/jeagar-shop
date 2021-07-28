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
  margin: ${PxToVw(8)} 0 ${PxToVw(24)} 0;
  display: flex;
  flex-direction: column;
  gap: ${PxToVw(4)};
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

export const PaymentMethods = styled.div`
  display: flex;
  align-items: stretch;
  gap: ${PxToVw(8)};
  > div {
    label {
      user-select: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: ${PxToVw(101)};
      padding: ${PxToVw(10)} 0;
      background: #1f1d2b;
      border: ${PxToVw(1)} solid #393c49;
      border-radius: ${PxToVw(8)};
      cursor: pointer;
      transition: 0.3s;
      position: relative;
      span {
        font-weight: 500;
        font-size: ${PxToVw(14)};
        line-height: 130%;
        color: #abbbc2;
        text-transform: capitalize;
        margin-top: ${PxToVw(2)};
      }
      svg {
        width: ${PxToVw(24)};
        height: ${PxToVw(24)};
        path {
          fill: #abbbc2;
        }
      }
      &:hover {
        border-color: #abbbc2;
      }
      &::after {
        position: absolute;
        content: "";
        background: #ea7c69;
        right: ${PxToVw(6)};
        top: ${PxToVw(6)};
        width: ${PxToVw(16)};
        height: ${PxToVw(16)};
        border-radius: 50%;
        opacity: 0;
        transition: 300ms;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUwNC41MDIsNzUuNDk2Yy05Ljk5Ny05Ljk5OC0yNi4yMDUtOS45OTgtMzYuMjA0LDBMMTYxLjU5NCwzODIuMjAzTDQzLjcwMiwyNjQuMzExYy05Ljk5Ny05Ljk5OC0yNi4yMDUtOS45OTctMzYuMjA0LDAgICAgYy05Ljk5OCw5Ljk5Ny05Ljk5OCwyNi4yMDUsMCwzNi4yMDNsMTM1Ljk5NCwxMzUuOTkyYzkuOTk0LDkuOTk3LDI2LjIxNCw5Ljk5LDM2LjIwNCwwTDUwNC41MDIsMTExLjcgICAgQzUxNC41LDEwMS43MDMsNTE0LjQ5OSw4NS40OTQsNTA0LjUwMiw3NS40OTZ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==");
        background-position: center;
        background-size: ${PxToVw(9)};
        background-repeat: no-repeat;
      }
    }
    &:nth-of-type(2) {
      svg path {
        fill: none;
        stroke: #abbbc2;
      }
      input:checked ~ label svg path {
        fill: none;
        stroke: #fff;
      }
    }
  }
  input {
    display: none;
  }
  input:checked ~ label {
    background: #252836;
    border-color: #abbbc2;
    &::after {
      opacity: 1;
    }
    span {
      color: #fff;
    }
    svg path {
      fill: #fff;
    }
  }
`;
export const PaymentInfo = styled.div`
  padding-bottom: ${PxToVw(16)};
  margin-top: ${PxToVw(16)};
  display: flex;
  flex-direction: column;
  gap: ${PxToVw(24)};
  flex-grow: 1;
  align-items: stretch;
  overflow-y: auto;
  margin-bottom: ${PxToVw(16)};
`;

export const PaymentText = styled.div`
  font-size: ${PxToVw(16)};
  line-height: 140%;
	font-weight: 500;
`;
