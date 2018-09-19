import React, { Component } from 'react';


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
      <div>
        <input placeholder="Product" type="text" name="productAdd" value={this.state.productAdd} onChange={this.handleChange}/>
        <input placeholder="Name" type="text" name="nameAdd" value={this.state.nameAdd} onChange={this.handleChange}/>
        <input placeholder="Type" type="text" name="typeAdd" value={this.state.typeAdd} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Add</button>
      </div>

    )
  }
}


export default AddProduct;
