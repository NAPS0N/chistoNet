// импорт устаревшего метода legacy_createStore + переименование
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './slicers/CounterSlice';
// import categoryReducer from './slicers/CategorySlice';

import MessageReducer from './slicers/MessageSlicer';

import authSlicer from './slicers/AuthSlicer';
import ProfileSlicer from './slicers/ProfileSlicer';

import productReducer from './slicers/ProductSlice';
import shopSlicer from './slicers/ShopSlice';

import categoryReducer from './slicers/CategorySlice';
import productByCategoryReducer from './slicers/ProductByCategorySlice';
import NewsReducer from './slicers/NewsSlicer';

export const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authSlicer,
    shop: shopSlicer,
    message: MessageReducer,

    profileIndividual: ProfileSlicer,
    news: NewsReducer,
    categories: categoryReducer,
    productsByCategory: productByCategoryReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Типизация и экспорт хуков для работы с store
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
