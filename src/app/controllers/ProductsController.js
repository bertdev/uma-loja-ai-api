const products = require('../mocks/products');

class ProductsController {
  index(request, response) {
    response.json(products);
  }

  show(request, response) {
    const { id } = request.params;

    const productExists = products.find((product) => product.id === Number(id));

    if (!productExists) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(productExists);
  }
}

module.exports = new ProductsController();
