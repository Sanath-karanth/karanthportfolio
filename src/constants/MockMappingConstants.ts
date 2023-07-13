import apiConstants from './APIURLConstants';

export default {
  [`${apiConstants.getPlantNumberListURL}`]: require('../mock/plantNumber.json'),

  // Get ProductOrder Details API
  [`${apiConstants.getProductOrderListURL}`]: require('../mock/header.json'),

  // User Details API
  [`${apiConstants.getUserDetailsURL}`]: require('../mock/plantNumber.json'),

  // Get SoftBill API
  [`${apiConstants.getSoftBillURL}`]: require('../mock/dtsoftbill.json'),

  // Get PictureListNew API
  [`${apiConstants.getPictureListNewURL}`]: require('../mock/dtpicturelistNew.json'),

  // Get Work Order Details API
  [`${apiConstants.getWorkOrderDetailsURL}`]: require('../mock/plantNumber.json'),

  // Get Raise Flag Search API
  [`${apiConstants.getRaiseFlagListURL}`]: require('../mock/adminRaiseFlagList.json'),
};
