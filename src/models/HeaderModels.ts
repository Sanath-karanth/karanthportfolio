export interface IDefaultResponse {
  loading: boolean;
  error: boolean;
  success: boolean;
  message: string | null;
}
export type IProductOrderRequest = {
  ProductID?: string | number;
};
export interface IProductOrderDetailsData {
  ProductOrderType?: string | number | null;
  ProductOrderId: number;
  ProductOrderCode?: string | number | null;
  ProductName?: string | null;
  OrderQuantity?: string | null;
  PinCode?: number;
  UserName?: string | null;
}
export interface IProductOrderResponse extends IDefaultResponse {
  data: IProductOrderDetailsData[] | [];
}

// Reducers and actions
export interface IHeaderReducer {
  productOrderList: IProductOrderResponse;
}
export interface IGetProductOrderListAction {
  type: string;
  payload: IProductOrderResponse;
}

export type IProductOrderActions = IGetProductOrderListAction;
