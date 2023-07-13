////   API gateway name need to be changed here like DEV,local
const API_GATEWAY = process.env.REACT_APP_PUBLIC_URL;

export default {
  // Header
  getProductOrderListURL: `${API_GATEWAY}/GetProductOrder`,
  // DT
  getPlantNumberListURL: `${API_GATEWAY}/GetPlantNumber`,
  getUserDetailsURL: `${API_GATEWAY}/GetUserDetails`,
  getSoftBillURL: `${API_GATEWAY}/softbill`,
  getPictureListNewURL: `${API_GATEWAY}/picturelistNew`,
  getWorkOrderDetailsURL: `${API_GATEWAY}/GetWorkOrderDetails`,

  // Admin
  getRaiseFlagListURL: `${API_GATEWAY}/GetRaiseFlagListData`,
  addRaiseFlagURL: `${API_GATEWAY}/addRaiseFlag`,
};
