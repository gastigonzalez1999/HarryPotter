const { totalRegister } = require('./../services/common');

const paginationInfo = ({ req, model }) => {
  try {
    const { baseUrl: endpoint } = req;
    const total = totalRegister(model);
    const moreInfo = {
      next: null,
      prev: null,
    };

    if (total > process.env.LIMIT_RESPONSE) {
      if (req.query.page && total > process.env.LIMIT_RESPONSE) {
        const page = parseInt(req.query.page);
        if (page > 1) {
          moreInfo.prev = `${process.env.BASE_URL}${endpoint}?page=${page - 1}`;
          moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=${page + 1}`;
        } else {
          moreInfo.prev = null;
          moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=${page + 1}`;
        }
      } else {
        moreInfo.prev = null;
        moreInfo.next = `${process.env.BASE_URL}${endpoint}?page=2`;
      }
      moreInfo.limit = process.env.LIMIT_RESPONSE;
      moreInfo.total = total;
    } else {
      moreInfo.limit = process.env.LIMIT_RESPONSE;
      moreInfo.total = total;
    }
    return moreInfo;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { paginationInfo };
