let products = [
  {product: 'Headphones', type: 'Wireless', name: 'Audeze Mobius', img: '//cdn.shopify.com/s/files/1/0362/2465/products/Audeze_Mobius_Copper_1024x1024_2000x.png'},
  {product: 'Headphones', type: 'Wireless', name: 'Sennheiser HD 1', img: '//cdn.shopify.com/s/files/1/0362/2465/products/product_detail_x1_desktop_HD_1_BT_AE_black-sq-01_1200x_ccbb03bd-9f7d-4447-88be-33af967e736e_2000x.jpg'},
  {product: 'Headphones', type: 'Wireless ', name: 'Sennheiser HD 4.40 BT ', img: '//cdn.shopify.com/s/files/1/0362/2465/products/product_detail_x2_desktop_HD_4_40_AE_BT-sennheiser-01_2000x.jpg'},
  {product: 'Headphones', type: 'Wireless Noise ', name: 'Sennheiser Momentum ', img: '//cdn.shopify.com/s/files/1/0362/2465/products/square_louped_MOMENTUM_II_BT_AE_ivory-sq-01-sennheiser_2000x.jpeg'},
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
