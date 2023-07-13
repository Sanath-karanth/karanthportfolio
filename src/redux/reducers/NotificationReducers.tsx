import { ActionTypes } from '../../constants/ActionTypeConstants';
import {
  INotificationType,
  INotificationAction,
  INotificationReducer,
} from '../../models/NotificationModels';

const initialState: INotificationReducer = {
  notificationData: {} as INotificationType,
};

const reducer = (state = initialState, action: INotificationAction) => {
  switch (action.type) {
    case ActionTypes.SHOW_NOTIFICATION: {
      return {
        ...state,
        notificationData: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
