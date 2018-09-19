let products = [
  {product: 01, type: 'type1', name: 'TheOne'},
  {product: 02, type: 'type2', name: 'TheTwo'},
  {product: 03, type: 'type3', name: 'TheThree'},
  {product: 04, type: 'type4', name: 'TheFour'},
]


module.exports = function(fetchProducts){
  if(fetchProducts === 'getproducts'){
    return products
  }else{
    let result = products.find( product => product.name === fetchProducts );
    console.log('result: ', result);
    products.splice(products.findIndex(product => product.name === fetchProducts), 1);
    return result;
  }
}

//Skriv klart objectet med get, delete och update funktionenera. Rätt funktion skall köras vid rätt request.
/*
{
  get: 'get function',
  delete: 'delete function',
  update: 'update function'
}
*/
