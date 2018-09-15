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

app.listen(port, () => console.log('Example app listening on port ', + port))
