const express = require('express');
const ProductsController = require('./app/controllers/ProductsController');

const router = express();

router.get('/products', ProductsController.index);
// router.get('/products/:id', ProductsController.show);
// router.post('/products', ProductsController.store);
// router.put('/products/:id', ProductsController.update);
// router.delete('/products/:id', ProductsController.delete);

module.exports = router;
