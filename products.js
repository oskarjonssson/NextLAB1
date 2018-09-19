let products = [
  {product: 01, type: 'type1', name: 'TheOne'},
  {product: 02, type: 'type2', name: 'TheTwo'},
  {product: 03, type: 'type3', name: 'TheThree'},
  {product: 04, type: 'type4', name: 'TheFour'},
]

module.exports = function(fetchProducts, method, body){
  if(fetchProducts === 'getproducts'){
    return products

  }else if(method === 'delete'){
    let result = products.find( product => product.name === fetchProducts );
    products.splice(products.findIndex(product => product.name === fetchProducts), 1);
    return result;

  }else if(method === 'update'){
    let index = products.findIndex(p => p.name === fetchProducts);
    products[index] = JSON.parse(body)
    return products

  }else if (method === 'addproduct'){
    products.push(JSON.parse(body));
  }
}
