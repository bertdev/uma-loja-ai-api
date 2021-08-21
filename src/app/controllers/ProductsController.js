const products = require('../mocks/products');

class ProductsController {
  index(request, response) {
    response.json(products);
  }
}

module.exports = new ProductsController();
