import apiConstants from './APIURLConstants';

const API_GATEWAY = process.env.REACT_APP_PUBLIC_URL;

export const APIEndpoints = {
  HEADER: {
    GET_PRODUCT_ORDER_LIST: `${apiConstants.getProductOrderListURL}`,
  },
  DESIGN_TECHNICIAN: {
    GET_SOFTBILL: `${apiConstants.getSoftBillURL}`,
    GET_PICTURELIST_NEW: `${apiConstants.getPictureListNewURL}`,
    GET_WORKORDER_DETAILS: `${apiConstants.getWorkOrderDetailsURL}`,
    GET_DEFAULT_PLANT: `${API_GATEWAY}/selectedPlant`,
    GET_USER_DETAILS: `${apiConstants.getUserDetailsURL}`,
  },
  PLANT_NUMBER: {
    GET_PLANT_NUMBER_LIST: `${apiConstants.getPlantNumberListURL}`,
  },
  ADMIN: {
    GET_RAISE_FLAG_SEARCH_LIST: `${apiConstants.getRaiseFlagListURL}`,
    ADD_RAISE_FLAG: `${apiConstants.addRaiseFlagURL}`,
  },
};
