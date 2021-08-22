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

  store(request, response) {
    const { name, price, urlImage } = request.body;

    if (!name) {
      return response.status(400).json({ errr: 'Name is required' });
    }

    const newUser = {
      id: products[products.length - 1].id + 1,
      name,
      price,
      urlImage,
    };

    products.push(newUser);

    response.json(newUser);
  }
}

module.exports = new ProductsController();
