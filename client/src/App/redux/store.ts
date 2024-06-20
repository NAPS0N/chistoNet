// импорт устаревшего метода legacy_createStore + переименование
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './slicers/ProductSlice';
// import counterReducer from './slicers/CounterSlice';
// import productReducer from './slicers/ProductSlice';
// import categoryReducer from './slicers/CategorySlice';

export const store = configureStore({
  reducer: {
    // products: productReducer,
    // counter: counterReducer,

    // categories: categoryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Типизация и экспорт хуков для работы с store
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
