import styled from 'styled-components';
import { PxToVw } from '../../index.styled';

export const HomeSearch = styled.input`
  padding: ${PxToVw(14)};
  padding-left: ${PxToVw(42)};
  background: #2d303e;
  border: ${PxToVw(1)} solid #393c49;
  box-sizing: border-box;
  border-radius: ${PxToVw(8)};
  width: ${PxToVw(220)};
  transition: 0.3s;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTIyNS40NzQsMEMxMDEuMTUxLDAsMCwxMDEuMTUxLDAsMjI1LjQ3NGMwLDEyNC4zMywxMDEuMTUxLDIyNS40NzQsMjI1LjQ3NCwyMjUuNDc0ICAgIGMxMjQuMzMsMCwyMjUuNDc0LTEwMS4xNDQsMjI1LjQ3NC0yMjUuNDc0QzQ1MC45NDgsMTAxLjE1MSwzNDkuODA0LDAsMjI1LjQ3NCwweiBNMjI1LjQ3NCw0MDkuMzIzICAgIGMtMTAxLjM3MywwLTE4My44NDgtODIuNDc1LTE4My44NDgtMTgzLjg0OFMxMjQuMTAxLDQxLjYyNiwyMjUuNDc0LDQxLjYyNnMxODMuODQ4LDgyLjQ3NSwxODMuODQ4LDE4My44NDggICAgUzMyNi44NDcsNDA5LjMyMywyMjUuNDc0LDQwOS4zMjN6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01MDUuOTAyLDQ3Ni40NzJMMzg2LjU3NCwzNTcuMTQ0Yy04LjEzMS04LjEzMS0yMS4yOTktOC4xMzEtMjkuNDMsMGMtOC4xMzEsOC4xMjQtOC4xMzEsMjEuMzA2LDAsMjkuNDNsMTE5LjMyOCwxMTkuMzI4ICAgIGM0LjA2NSw0LjA2NSw5LjM4Nyw2LjA5OCwxNC43MTUsNi4wOThjNS4zMjEsMCwxMC42NDktMi4wMzMsMTQuNzE1LTYuMDk4QzUxNC4wMzMsNDk3Ljc3OCw1MTQuMDMzLDQ4NC41OTYsNTA1LjkwMiw0NzYuNDcyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=');
  background-size: ${PxToVw(20)};
  background-position: ${PxToVw(14)};
  background-repeat: no-repeat;
  font-size: ${PxToVw(14)};
  line-height: 140%;
  &::placeholder {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: 0.3s;
  }
  &:focus {
    &::placeholder {
      opacity: 0;
    }
    width: ${PxToVw(400)};
  }
`;

export const HomeNav = styled.nav`
  display: flex;
  align-items: stretch;
  gap: ${PxToVw(32)};
  padding-bottom: ${PxToVw(13)};
  border-bottom: ${PxToVw(1)} solid #393c49;
  position: relative;
  margin-bottom: ${PxToVw(24)};
  &::after {
    transition: 0.5s;
    position: absolute;
    content: '';
    background: #ea7c69;
    height: ${PxToVw(3)};
    left: ${({ line }) => line.left || 0}px;
    width: ${({ line }) => (line.width ? line.width + 'px' : PxToVw(66))};
    bottom: ${PxToVw(-2)};
    border-radius: ${PxToVw(3)};
  }
`;

export const HomeNavItem = styled.div`
  font-weight: 600;
  font-size: ${PxToVw(14)};
  line-height: 140%;
  cursor: pointer;
  transition: 0.3s;
  user-select: none;
  text-transform: capitalize;
  ${({ active }) => active && 'color: #EA7C69;'}
`;

export const HomeContentHeader = styled.div`
  font-weight: 600;
  font-size: ${PxToVw(20)};
  line-height: 140%;
  margin-bottom: ${PxToVw(58)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HomeContentDishes = styled.div`
  display: grid;
  grid-template-columns: ${({ drawer }) =>
    drawer ? '1fr 1fr 1fr' : '1fr 1fr 1fr 1fr 1fr'};
  row-gap: ${PxToVw(58)};
  column-gap: ${PxToVw(28)};
  transition: 0.3s;
`;

export const DishCard = styled.div`
  background: #1f1d2b;
  transition: 0.3s;
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
    box-shadow: ${PxToVw(8)} ${PxToVw(8)} ${PxToVw(8)} 0 #1f1d2b;
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
  display: grid;
`;
export const DrawerOrderCostInfo = styled.div`
  margin-top: ${PxToVw(24)};
  margin-bottom: ${PxToVw(42)};
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
