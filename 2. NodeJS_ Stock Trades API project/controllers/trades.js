const CRUDService = require("../services/CRUDservice");


const middleWares = {
  error405: function (req, res, next) {
    res.status(405).send('The server has received your request, but the resource you are requesting doesn\'t support the request method.');
  },

  postValidationCheck: function (req, res, next) {
    if (!req.body?.shares || !req.body?.type || req.body?.shares > 100 || req.body?.shares < 0 ||
      !['sell', 'buy'].includes(req.body?.type)) {
      res.status(400).send('Invalid aruments.');
    }
    else next();
  },

  error404: function (req, res, next) {
    if (!req.params?.id) res.status(404).send('the trade ID does not exist');
    else next();
  }

}

tradesController = {
  tradeGet: async function (req, res, next) {
    const { user_id, type } = req.query;
    const data = await CRUDService.findAll({ user_id, type });
    const result = data.map(el => {
      const { createdAt, updatedAt, ...res } = el.dataValues;
      return res
    })
    res.status(200).send(result);
  },

  tradeGetOne: [middleWares.error404, async function (req, res, next) {
    const { id } = req.params;
    const result = await CRUDService.findOne(id);
    if (!result) res.status(404).send('ID not found')
    const { createdAt, updatedAt, ...data } = result?.dataValues
    res.status(200).send(data);
  }],


  tradePost: [middleWares.postValidationCheck, async function (req, res, next) {
    const result = await CRUDService.create(req.body);
    const { createdAt, updatedAt, ...data } = result.dataValues
    res.status(201).send(data);
  }],

  tradePut: [middleWares.error404, middleWares.error405],

  tradeDelete: [middleWares.error404, middleWares.error405],

  tradePatch: [middleWares.error404, middleWares.error405]
}

module.exports = tradesController;