import React, { Component } from 'react';
import Head from 'next/head'

const containerForm = {
  marginTop: '50px',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  flexDirection: 'row',
  flexWrap: 'wrap'
}

const submitButton = {
  fontFamily: 'Montserrat',
  width: '404px',
  paddingTop: '5px',
  paddingBottom: '5px',
  marginTop: '5px',
  border: 'none',
  outline: 'none',
  borderRadius: '2px',
  cursor: 'pointer',
  backgroundColor: 'deepskyblue',
  color: 'white',
  WebkitBoxShadow:'0px 0px 10px 0px rgba(0,0,0,0.2)',
  MozBoxShadow:' 0px 0px 10px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)'
}

const formHolder = {
  width: '410px',
  height: '200px'
}
const inputs = {
  fontFamily: 'Montserrat',
  paddingLeft: '5px',
  borderRadius: '5px',
  outline: 'none',
  border: '0.5px solid lightgray',
  height: '25px',
  width: '400px',
  marginTop: '5px',
  WebkitBoxShadow:'0px 0px 10px 0px rgba(0,0,0,0.2)',
  MozBoxShadow:' 0px 0px 10px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)'
}

const formText = {
  fontFamily: 'Montserrat',
  margin: '0'
}
class AddProduct extends Component {
  constructor(props){
    super(props);
    this.state={
      productAdd: '',
      nameAdd: '',
      typeAdd: '',
    }
  }
  addProduct = (name, product , type) => {
    let obj = {product, type, name, img: '//cdn.shopify.com/s/files/1/0362/2465/products/Audeze_Mobius_Copper_1024x1024_2000x.png'}

    fetch('http://localhost:3001/api/addproduct/' + name,{
      method: 'POST',
      body: JSON.stringify(obj),
    })
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }); // Handler for all inputs
  }

  handleSubmit = () => {
      this.addProduct(this.state.nameAdd, this.state.productAdd, this.state.typeAdd)
  }


  render(){

    return(
      <div style={containerForm}>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      </Head>
        <div style={formHolder}>
          <p style={formText}>Add a product:</p>
          <input style={inputs} placeholder="Product" type="text" name="productAdd" value={this.state.productAdd} onChange={this.handleChange}/>
          <input style={inputs} placeholder="Name" type="text" name="nameAdd" value={this.state.nameAdd} onChange={this.handleChange}/>
          <input style={inputs} placeholder="Type" type="text" name="typeAdd" value={this.state.typeAdd} onChange={this.handleChange}/>
          <button style={submitButton} onClick={this.handleSubmit}>ADD PRODUCT</button>
        </div>
      </div>

    )
  }
}


export default AddProduct;
