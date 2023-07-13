import { ActionTypes } from '../../constants/ActionTypeConstants';
import { IPlantNumberActions, IPlantNumberReducer } from '../../models/PlantNumberModels';

const initialState: IPlantNumberReducer = {
  defaultPlantNumber: {
    message: null,
    success: false,
    loading: false,
    error: false,
    defaultPlantNumber: 10,
  },
  plantNumberList: {
    loading: false,
    message: null,
    PlantList: [],
    WorkOrder: [],
    error: false,
    success: false,
  },
};

const reducer = (state = initialState, action: IPlantNumberActions) => {
  switch (action.type) {
    case ActionTypes.GET_SOFTBILL_DATA: {
      return {
        ...state,
      };
    }
    case ActionTypes.UPDATE_SOFTBILL_DATA: {
      return {
        ...state,
      };
    }
    case ActionTypes.GET_PLANT_NUMBER_LIST: {
      return {
        ...state,
        plantNumberList: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
