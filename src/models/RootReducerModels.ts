import rootReducer from '../redux/reducers';

export type IRootStateType = ReturnType<typeof rootReducer>;

export type IReactSelectedOption = {
  value: string;
  label: string;
};

export type IReactSelectOptionList = IReactSelectedOption[];
