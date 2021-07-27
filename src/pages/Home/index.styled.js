import styled from "styled-components";
import { PxToVw } from "../../index.styled";

export const HomeSearch = styled.input`
  padding: ${PxToVw(14)};
  padding-left: ${PxToVw(42)};
  background: #2d303e;
  border: ${PxToVw(1)} solid #393c49;
  box-sizing: border-box;
  border-radius: ${PxToVw(8)};
  width: ${PxToVw(220)};
  transition: 0.3s;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTIyNS40NzQsMEMxMDEuMTUxLDAsMCwxMDEuMTUxLDAsMjI1LjQ3NGMwLDEyNC4zMywxMDEuMTUxLDIyNS40NzQsMjI1LjQ3NCwyMjUuNDc0ICAgIGMxMjQuMzMsMCwyMjUuNDc0LTEwMS4xNDQsMjI1LjQ3NC0yMjUuNDc0QzQ1MC45NDgsMTAxLjE1MSwzNDkuODA0LDAsMjI1LjQ3NCwweiBNMjI1LjQ3NCw0MDkuMzIzICAgIGMtMTAxLjM3MywwLTE4My44NDgtODIuNDc1LTE4My44NDgtMTgzLjg0OFMxMjQuMTAxLDQxLjYyNiwyMjUuNDc0LDQxLjYyNnMxODMuODQ4LDgyLjQ3NSwxODMuODQ4LDE4My44NDggICAgUzMyNi44NDcsNDA5LjMyMywyMjUuNDc0LDQwOS4zMjN6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik01MDUuOTAyLDQ3Ni40NzJMMzg2LjU3NCwzNTcuMTQ0Yy04LjEzMS04LjEzMS0yMS4yOTktOC4xMzEtMjkuNDMsMGMtOC4xMzEsOC4xMjQtOC4xMzEsMjEuMzA2LDAsMjkuNDNsMTE5LjMyOCwxMTkuMzI4ICAgIGM0LjA2NSw0LjA2NSw5LjM4Nyw2LjA5OCwxNC43MTUsNi4wOThjNS4zMjEsMCwxMC42NDktMi4wMzMsMTQuNzE1LTYuMDk4QzUxNC4wMzMsNDk3Ljc3OCw1MTQuMDMzLDQ4NC41OTYsNTA1LjkwMiw0NzYuNDcyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=");
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
    content: "";
    background: #ea7c69;
    height: ${PxToVw(3)};
    left: ${({ line }) => line.left || 0}px;
    width: ${({ line }) => (line.width ? line.width + "px" : PxToVw(66))};
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
  ${({ active }) => active && "color: #EA7C69;"}
`;

export const HomeContentHeader = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 140%;
  margin-bottom: ${PxToVw(58)};
`;

export const HomeContentDishes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${PxToVw(188)});
  row-gap: ${PxToVw(58)};
  column-gap: ${PxToVw(28)};
  transition: 0.3s;
`;

export const DishCard = styled.div`
  background: #1f1d2b;
  transition: 0.3s;
  &:hover {
    background: #14131c;
    box-shadow: 0 ${PxToVw(4)} ${PxToVw(10)} 0 #1f1d2b;
  }
  user-select: none;
  cursor: pointer;
  border-radius: ${PxToVw(16)};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${PxToVw(114)} ${PxToVw(24)} ${PxToVw(24)} ${PxToVw(24)};
  position: relative;
  img {
    width: ${PxToVw(132)};
    height: ${PxToVw(132)};
    position: absolute;
    top: ${PxToVw(-34)};
  }
  h5,
  span,
  p {
    text-align: center;
  }
  h5 {
    font-weight: 500;
    font-size: ${PxToVw(14)};
    line-height: 130%;
    margin-bottom: ${PxToVw(8)};
  }
  span,
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
