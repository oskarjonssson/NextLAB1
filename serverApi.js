const express = require('express')
const cors = require('cors')
const getProducts = require('./products.js');
const { parse } = require('querystring');
const app = express()
const port = 3001;

app.use(cors())

app.get('/api/:products', (req, res) => {
  let getProductsWithParam = req.params.products
  if(req.params.products === 'getproducts'){
    res.send(getProducts(getProductsWithParam))
  }else{
    console.log('Wrong param..')
  }
})

app.delete('/api/:z/:x', (req, res) => {
  console.log('delete product param: ', req.params.x);
  console.log('req.params.z (method): ', req.params.z);
  let productName = req.params.x
  let method = req.params.z
  res.send(getProducts(productName, method));
});

app.post('/api/:z/:x', (req, res) => {
  console.log('update/added product param ', req.params.x);
  console.log('req.params.z (method): ', req.params.z);
  let productName = req.params.x
  let method = req.params.z
  let body = [];
    req.on('data', chunk => {
        body += chunk;
    });
    req.on('end', () => {
      res.send(getProducts(productName, method, body));
        res.end('ok');
    });
});


app.listen(port, () => console.log('Example app listening on port ', + port))
