export type IPlantNumberResponse = {
  PlantId: string;
};
export type IWorkOrderResponse = {
  WorkOrderNum: string;
};
export interface IDefaultResponse {
  loading: boolean;
  error: boolean;
  success: boolean;
  message: string | null;
}
export interface IPlantNumberListResponse extends IDefaultResponse {
  PlantList: IPlantNumberResponse[] | [];
  WorkOrder: IWorkOrderResponse[] | [];
}
export interface IDefaultPlantNumberResponse extends IDefaultResponse {
  defaultPlantNumber: number | null;
}
export interface IDefaultPlantNumberRequest {
  userid: number;
}
export interface IPlantNumberReducer {
  plantNumberList: IPlantNumberListResponse;
  defaultPlantNumber: IDefaultPlantNumberResponse;
}
interface IGetPlantNumberListAction {
  type: string;
  payload: IPlantNumberListResponse;
}
interface IGetDefaultPlantNumberAction {
  type: string;
  payload: IDefaultPlantNumberResponse;
}

export type IPlantNumberActions = IGetPlantNumberListAction | IGetDefaultPlantNumberAction;
