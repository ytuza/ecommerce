const express = require('express');
const app = express();

const products = [
  {
    name: 'Samsung Galaxy',
    category: 'electronics',
  },
  {
    name: 'Samsung A10',
    category: 'electronics',
  },
  {
    name: 'Samsung A20',
    category: 'electronics',
  },
  {
    name: 'Motorola V3',
    category: 'electronics',
  },
  {
    name: 'Motorola V2',
    category: 'electronics',
  },
  {
    name: 'iPhone 12',
    category: 'electronics',
  },
  {
    name: 'iPhone 14',
    category: 'electronics',
  },
  {
    name: 'Skippy',
    category: 'grocery store',
  },
  {
    name: 'Sublime',
    category: 'grocery store',
  },
  {
    name: 'Sublime Doble',
    category: 'grocery store',
  },
];

// GET /products?filter=:filter
// Ejemplo:
// http://localhost:3000/products?filter=sublime

app.get('/products', (req, res) => {
  const filter = req.query.filter;

  const found = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const suggested = products
    .filter(
      (product) =>
        product.category === found[0].category &&
        !found.includes(product)
    ).slice(0, 2);

  const response = {
    product: [...found, ...suggested],
  };

  res.json(response);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});