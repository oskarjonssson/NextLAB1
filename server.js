const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

<<<<<<< HEAD
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
=======
app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })
>>>>>>> a9aa2473d8806f8578817b7b82a3f5a765835521

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
