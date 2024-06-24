// импорт устаревшего метода legacy_createStore + переименование
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './slicers/CounterSlice';
// import productReducer from './slicers/ProductSlice';
// import categoryReducer from './slicers/CategorySlice';
import authSlicer from '../../App/redux/slicers/AuthSlicer';
import ProfileSlicer from './slicers/ProfileSlicer';


export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // products: productReducer,
    // categories: categoryReducer,
    auth: authSlicer,
    profileIndividual: ProfileSlicer,
  
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Типизация и экспорт хуков для работы с store
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;