import React, { Component } from 'react';

const containerForm = {
  marginTop: '10px',
  display: 'flex',
  width: '410px',
  height: '50px',
  flexDirection: 'row',
  flexWrap: 'wrap'
}

const submitButton = {
  width: '400px',
  margin: '0',
  padding: '0',
  border: 'none',
  outline: 'none',
  borderRadius: '2px',
  cursor: 'pointer',
  backgroundColor: 'deepskyblue',
  color: 'white'
}

const inputs = {
  height: '20px',
  width: '129px',
  margin: '0',
  padding: '0'
}

class AddProduct extends Component {
  constructor(props){
    super(props);
    this.state={
      productAdd: '',
      nameAdd: '',
      typeAdd: ''
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value }); // Handler for all inputs
  }

  handleSubmit = () => {
    if (!this.props.apiData.filter(e => e.name === this.state.nameAdd).length > 0) {
      this.props.addProduct(this.state.nameAdd, this.state.productAdd, this.state.typeAdd)
    }
  }
  render(){

    return(
      <div style={containerForm}>
        <input style={inputs} placeholder="Product" type="text" name="productAdd" value={this.state.productAdd} onChange={this.handleChange}/>
        <input style={inputs} placeholder="Name" type="text" name="nameAdd" value={this.state.nameAdd} onChange={this.handleChange}/>
        <input style={inputs} placeholder="Type" type="text" name="typeAdd" value={this.state.typeAdd} onChange={this.handleChange}/>
        <button style={submitButton} onClick={this.handleSubmit}>ADD PRODUCT</button>
      </div>

    )
  }
}


export default AddProduct;
