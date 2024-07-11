const express = require('express');
const router = express.Router();
const tradesController = require('../controllers/trades');

router.get('/', tradesController.tradeGet);
router.get('/:id', ...tradesController.tradeGetOne);
router.post('/', ...tradesController.tradePost);
router.put('/:id', ...tradesController.tradePut);
router.delete('/:id', ...tradesController.tradeDelete);
router.patch('/:id', ...tradesController.tradePatch);

module.exports = router;
