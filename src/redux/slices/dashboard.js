import { createSlice } from '@reduxjs/toolkit';
import Meal1 from '../../assets/dashboard/Meal1.png';
import Meal2 from '../../assets/dashboard/Meal2.png';
import Meal3 from '../../assets/dashboard/Meal3.png';
import Card1 from '../../assets/dashboard/Card1.svg';
import Card2 from '../../assets/dashboard/Card2.svg';
import Card3 from '../../assets/dashboard/Card3.svg';
import Avatar1 from "../../assets/dashboard/Avatar1.svg";
import Avatar2 from "../../assets/dashboard/Avatar2.svg";
import Avatar3 from "../../assets/dashboard/Avatar3.svg";
import Avatar4 from "../../assets/dashboard/Avatar4.svg";
import Avatar5 from "../../assets/dashboard/Avatar5.svg";


const dashboardSlice = createSlice({
  // меняется короткое название редьюсера
  name: 'dashboard',
  initialState: {
    // меняется начальное состояние редьюсера
    mostOrdered: [
      {
        cover: Meal1,
        title: 'Spicy seasoned seafood noodles',
        ordered: 200,
      },
      {
        cover: Meal2,
        title: 'Salted pasta with mushroom sauce',
        ordered: 120,
      },
      {
        cover: Meal3,
        title: 'Beef dumpling in hot and sour sdfsdfsdfsoup',
        ordered: 80,
      },
      {
        cover: Meal2,
        title: '1243',
        ordered: 20,
      },
      {
        cover: Meal3,
        title: '12433',
        ordered: 2020,
      },
      {
        cover: Meal2,
        title: '1243',
        ordered: 20,
      },
      {
        cover: Meal3,
        title: '12433',
        ordered: 2020,
      },
    ],
    infoCards: [
      {
        cover: Card1,
        percent: 32.4,
        totalcount: '10,243.00',
        text: 'Total Revenue',
      },
      {
        cover: Card2,
        percent: -12.4,
        totalcount: '23,456',
        text: 'Total Dish Ordered',
      },
      {
        cover: Card3,
        percent: 2.4,
        totalcount: '1,234',
        text: 'Total Customer',
      },
    ],
    orderReport: [
      {
        cover: Avatar1,
        name: 'Eren Jaegar',
        date: new Date('December 17, 2020 03:24:00'),
        payment: 125,
        status: 'completed',
      },
      {
        cover: Avatar2,
        name: 'Reiner Braunn',
        date: new Date('December 17, 2020 03:24:00'),
        payment: 13,
        status: 'preparing',
      },
      {
        cover: Avatar3,
        name: 'Levi Ackerman',
        date: new Date('December 17, 2020 03:24:00'),
        payment: 1245,
        status: 'pending',
      },
      {
        cover: Avatar4,
        name: 'Levi Ackerman',
        date: new Date('December 17, 2020 03:24:00'),
        payment: 134,
        status: 'canceled',
      },
      {
        cover: Avatar5,
        name: 'Hanji Zoe',
        date: new Date('December 17, 2020 03:24:00'),
        payment: 1555,
        status: 'completed',
      },
      {
        cover: Avatar1,
        name: 'Armin Arlert',
        date: new Date('December 17, 2020 03:24:00'),
        payment: 54,
        status: 'completed',
      },
      {
        cover: Avatar2,
        name: 'Eren Jaegar',
        date: new Date('December 17, 2020 03:24:00'),
        payment: 95,
        status: 'completed',
      },
    ],
    mostOrderedChart:[
      {
        color: "#65B0F6",
        title: "delivery",
        count: 266,
      },
      {
        color: "#FFB572",
        title: "to go",
        count: 122,
      },
      {
        color: "#FF7CA3",
        title: "dine in",
        count: 200,
      },
    ],
  },
  
  reducers: {
    // меняется набор редьюсеров
    changeTheme: (state, action) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
});

// меняются только названия переменных
const dashboardReducer = dashboardSlice.reducer;
// экспорт экшенов в компоненты
export const { changeTheme } = dashboardSlice.actions;
// из слайса мы забираем редьюсер чтобы его экспортировать в стор
export default dashboardReducer;
