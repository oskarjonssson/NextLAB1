const express = require('express')
const cors = require('cors')
const getProducts = require('./products.js');
const app = express()
const port = 3001;

app.use(cors())

app.get('/api/:products', (req, res) => {
  console.log('params: ', req.params.products);
  let getProductsWithParam = req.params.products
  if(getProductsWithParam === 'getproducts'){
    res.send(getProducts(getProductsWithParam))
    res.end();
  }else{
    console.log('Wrong param..')
  }
});

app.get('/api/getproducts/find', (req, res) => {  //Exempel http://localhost:3001/api/getproducts/find?product=TheOne
  console.log('product query: ', req.query.product);
  let productName = req.query.product
  res.send(getProducts(productName));
  res.end();
});

app.listen(port, () => console.log('Example app listening on port ', + port))
