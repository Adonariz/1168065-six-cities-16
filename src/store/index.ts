import { configureStore } from '@reduxjs/toolkit';
import { sortingSlice } from '@src/store/slices/sorting-slice';
import { offersSlice } from '@src/store/slices/offers-slice';
import { createAPI } from '@src/services/api';
import { userSlice } from '@src/store/slices/user-slice';
import { offerSlice } from './slices/offer-slice';
import { commentsSlice } from './slices/comments-slice';
import { favoritesSlice } from './slices/favorites-slice';

export const api = createAPI();

/**
 * Хранилище
 */
const store = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [offersSlice.name]: offersSlice.reducer,
    [sortingSlice.name]: sortingSlice.reducer,
    [offerSlice.name]: offerSlice.reducer,
    [commentsSlice.name]: commentsSlice.reducer,
    [favoritesSlice.name]: favoritesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
