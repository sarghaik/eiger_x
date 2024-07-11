const Trade = require("../models/trades");

const CRUDService = {
  create: async function (data) {
    return Trade.create(data);
  },

  findAll: async function ({ user_id, type }) {
    const where = {};
    if (user_id) where.user_id = user_id;
    if (type) where.type = type;
    return Trade.findAll({
      where,
    });
  },

  findOne: async function (id) {
    return Trade.findByPk(id);
  }
}


module.exports = CRUDService;