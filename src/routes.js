const express = require('express');

const router = express();

router.get('/products', (request, response) => {
  response.json({ opa: 'Amigo estou aqui' });
});
router.get('/products/:id', (request, response) => {
  response.json({ opa: 'Amigo estou aqui' });
});
router.post('/products', (request, response) => {
  response.json({ opa: 'Amigo estou aqui' });
});
router.put('/products/:id', (request, response) => {
  response.json({ opa: 'Amigo estou aqui' });
});
router.delete('/products/:id', (request, response) => {
  response.json({ opa: 'Amigo estou aqui' });
});

module.exports = router;
