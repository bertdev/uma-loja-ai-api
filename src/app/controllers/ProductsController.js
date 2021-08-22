let products = require('../mocks/products');

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

  update(request, response) {
    const { id } = request.params;
    const { name, price, urlImage } = request.body;

    const productExists = products.find((product) => product.id === Number(id));

    if (!productExists) {
      return response.status(404).json({ error: 'Product not found' });
    }

    products = products.map((product) => {
      if (product.id === Number(id)) {
        const newProduct = {
          id,
          name,
          price,
          urlImage,
        };
        return newProduct;
      }
      return product;
    });

    response.json({
      id, name, price, urlImage,
    });
  }

  delete(request, response) {
    const { id } = request.params;

    const productExists = products.find((product) => product.id === Number(id));

    if (!productExists) {
      return response.status(404).json({ error: 'Product not found' });
    }

    products = products.filter((product) => (
      product.id !== Number(id)
    ));

    response.json(204);
  }
}

module.exports = new ProductsController();
