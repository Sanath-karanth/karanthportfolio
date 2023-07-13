export interface INotificationModel {
  success: boolean;
  error: boolean;
  warning: boolean;
  info: boolean;
  none: boolean;
}
export interface INotificationType {
  msg: string | null | undefined;
  type: any;
  show: boolean;
}
export interface INotificationAction {
  type: string;
  payload: INotificationType;
}
export interface INotificationReducer {
  notificationData: INotificationType;
}
