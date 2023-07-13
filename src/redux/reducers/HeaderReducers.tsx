import { ActionTypes } from '../../constants/ActionTypeConstants';
import {
  IHeaderReducer,
  IProductOrderActions,
  IProductOrderResponse,
} from '../../models/HeaderModels';

const initialState: IHeaderReducer = {
  productOrderList: {} as IProductOrderResponse,
};

const reducer = (state = initialState, action: IProductOrderActions) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT_ORDER_LIST: {
      return {
        ...state,
        productOrderList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
