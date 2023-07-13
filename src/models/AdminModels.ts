export interface IDefaultResponse {
  loading: boolean;
  error: boolean;
  success: boolean;
  message: string | null;
}
export interface IRaiseFlagSearchRequest {
  kitNumber: number | string;
}
export interface IRaiseFlagListData {
  kitNumber?: number | string;
  designflag?: boolean;
  selected?: boolean;
  selectedAll?: boolean;
}
export interface IAddRaiseFlagRequest {
  kitNumber: number | string | undefined;
  designflag: boolean;
}

export interface IRaiseFlagSearchResponse extends IDefaultResponse {
  data: IRaiseFlagListData[] | [];
}

export interface IAddRaiseFlagResponse extends IDefaultResponse {
  data: number | null | string;
}

////////   Test for Array

export type ITestRequest = {
  PlantId: string;
};
export type ITestData = {
  WorkOrderNum: string;
  description: string;
};
export interface ITestResponse extends IDefaultResponse {
  data: Array<ITestRequest>;
}

////////   Reducers and Actions

export interface IAdminReducer {
  raiseFlagSearchData: IRaiseFlagListData[];
  updatedSearchData: IRaiseFlagListData[];
  // addRaiseFlag: IAddRaiseFlagResponse;

  testReducer: ITestData[];
}
export interface IGetRaiseFlagDataListAction {
  type: string;
  payload: IRaiseFlagListData[] | null;
}
export interface IAddRaiseFlagAction {
  type: string;
  payload: IAddRaiseFlagResponse;
}

export interface ITestAction {
  type: string;
  payload: ITestData[];
}

export type IAdminActions = IGetRaiseFlagDataListAction | IAddRaiseFlagAction;
