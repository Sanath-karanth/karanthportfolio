import { store } from './';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ThunkAction, Action } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export type IRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

///  Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<IRootStateType> = useSelector;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  IRootStateType,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store.getState>;
