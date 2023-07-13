export interface IDefaultResponse {
  loading: boolean;
  error: boolean;
  success: boolean;
  message: string | null;
}
export interface IInitialStateOfUserForm {
  fullName: string;
  emailID: string;
  phoneNo: string;
  productCode: number | string;
  error: {
    fullName: boolean;
    emailID: boolean;
    phoneNo: boolean;
    productCode: boolean;
    emailValid: boolean;
  };
}
export interface AddUser {
  fullName?: string;
  emailID?: string;
  phoneNo?: string;
  productCode?: number | string;
}
export interface IUserListResponse extends IDefaultResponse {
  addUserList: [];
}
export interface IEnquiryReducer {
  addUserList: IUserListResponse;
}
interface IGetUserListAction {
  type: string;
  payload: IUserListResponse;
}

export type IEnquiryActions = IGetUserListAction;
