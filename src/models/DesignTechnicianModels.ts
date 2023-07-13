//////   Default Response

export interface IDefaultResponse {
  loading?: boolean;
  error: boolean;
  success: boolean;
  message: string | null;
}

//////   Response Data parameter Variables

export interface ISoftBillData {
  productid: number | string | null;
  productName: string | null;
  description: string;
  quantity: number;
  uom: string;
  capCodes: string;
  expireDate?: string;
  image?: string;
  selected?: boolean;
}
export interface IPictureListNewData {
  frameNo: string | number;
  frameName?: string | null;
  productId: string | null;
  quantity: number;
  expireDate?: string | null;
  UID?: number | string;
  image?: string;
  selected?: boolean;
}
export interface IWorkOrderDetailsComponents {
  ComponentName: string;
  ComponentCode: string;
  ComponentDesc: string;
  CapCode: string;
  ExpirationDate: string;
  SequenceNumber: string;
  PhotoName: string;
  ImgPath: string;
  SpecialInstruction: string;
  Quantity: string;
  uom: string;
  SterCode: string;
  StationId: string;
  PickupWarehouse: string;
  MasterSeqId: string;
}
export interface IPictureList extends IWorkOrderDetailsComponents {
  Frame: number;
  ImageAdded?: boolean;
  Selected?: boolean;
  UID?: string;
  ComponentGroupUID?: string;
}
export interface IUserDetails {
  plantNumber: string;
  dtName: string;
}

//////   Request and Response Variables

export interface ISoftBillRequest {
  userid: number;
}

export interface ISoftBillResponse extends IDefaultResponse {
  data: ISoftBillData[];
}
export interface IPictureListNewResponse extends IDefaultResponse {
  data: IPictureListNewData[];
}
export interface IWorkOrderDetailsResponse extends IDefaultResponse {
  WONumber: string | null;
  TypeOfOrder: string | null;
  KitNumber: string | null;
  ImageKitNumber: string | null;
  OrderQuantity: string | null;
  PlantNumber: string | null;
  SterilizationMethod: string | null;
  PreviousWODetails: string | null;
  Components: IWorkOrderDetailsComponents[];
}
export interface IWorkOrderDetailsRequest {
  WONumber: string;
}

export interface IUserDetailsResponse extends IDefaultResponse {
  data: IUserDetails;
}

//////   Actions and Reducers

interface IGetSoftBillAction {
  type: string;
  payload: ISoftBillResponse;
}
interface IUpdateSelectedSoftBillListItem {
  type: string;
  payload: ISoftBillData;
}
interface IPictureListNewAction {
  type: string;
  payload: IPictureListNewData[];
}
interface IUpdateSelectedPictureListNewItem {
  type: string;
  payload: IPictureListNewData;
}
interface IPictureListAction {
  type: string;
  payload: IPictureList[];
}
interface IGetUserDetailsAction {
  type: string;
  payload: IUserDetailsResponse;
}
interface IWorkOrderDetailsAction {
  type: string;
  payload: IWorkOrderDetailsResponse;
}
interface IUpdateSelectedPictureListItem {
  type: string;
  payload: IPictureList;
}

export interface IDesignTechnicianReducer {
  userDetails: IUserDetailsResponse;
  softBillData: ISoftBillResponse;
  selectedSoftBillListItem: ISoftBillData;
  pictureListNew: IPictureListNewData[];
  updatedPictureListNew: IPictureListNewData[];
  selectedPictureListItemNew: IPictureListNewData;

  workOrderDetails: IWorkOrderDetailsResponse;
  pictureList: IPictureList[];
  selectedPictureListItem: IPictureList | null;
  selectedComponentItem: IWorkOrderDetailsComponents | null;
}
export type IDesignTechnicianActions =
  | IGetSoftBillAction
  | IUpdateSelectedSoftBillListItem
  | IPictureListNewAction
  | IUpdateSelectedPictureListNewItem
  | IGetUserDetailsAction
  | IWorkOrderDetailsAction
  | IPictureListAction
  | IUpdateSelectedPictureListItem;
