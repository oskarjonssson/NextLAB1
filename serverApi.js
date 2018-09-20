const express = require('express')
const cors = require('cors')
const getProducts = require('./products.js');
const app = express()
const port = 3001;

app.use(cors())

app.get('/api/:products', (req, res) => {
  console.log('params: ', req.params.products);
  let getProductsWithParam = req.params.products
  if(req.params.products === 'getproducts'){
    res.send(getProducts(getProductsWithParam))
  }else{
    console.log('Wrong param..')
  }
})

app.delete('/api/:x', (req, res) => {
  console.log('delete product param: ', req.params.x);
  let productName = req.params.x
  res.send(getProducts(productName));
});

app.post('/api/:x', (req, res) => {
  console.log('delete product param: ', req.params.x);
  let productName = req.params.x
  res.send(getProducts(productName));
});

app.listen(port, () => console.log('Example app listening on port ', + port))
