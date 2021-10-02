// первая строчка не меняется
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

// импрорт редьюсеров
import dashboardReducer from './slices/dashboard';
import homeReducer from './slices/home';

// не меняется
const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
  reducer: {
    // меняется только набор редьюсеров 
    dashboard: dashboardReducer,
    home: homeReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});
