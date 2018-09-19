import React, { Component } from 'react';

//CSS Start.
const toggleDiv = {
  width: '400px',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  border: '1px solid black',
  zIndex: '1px',
  backgroundColor: 'green'
}
//CSS End.

class EditProductButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      editData: this.props.apiData,
      show: false,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToggleClick() {
      const { show } = this.state;
      this.setState( { show : !show } )
    }

    handleChange(event) {
      let newProduct = event.target.value;
      this.props.editProduct(this.props.passName, newProduct)
    }

    handleSubmit(event) {
      event.preventDefault();
      this.props.updateProduct(this.props.passName)
    }

  render(){


    return(
      <div>
        <button onClick={this.handleToggleClick}>
          {this.state.show ? 'Close' : 'Edit'}
        </button>
        { this.state.show &&
          <div key={this.props.passName} style= {toggleDiv}>
            <button onClick={this.handleToggleClick}>
              {this.state.show ? 'X' : 'X'}
            </button>
            <form >
              <button onClick={this.handleSubmit}>save</button>
              <div>Product:
                <input
                  type='text'
                  value={this.props.passProduct}
                  onChange={this.handleChange} />
              </div>
              <div>Name: {this.props.passName}</div>
              <div>Type: {this.props.passType}</div>
            </form>
          </div>
        }
      </div>
    )
  }
}


export default EditProductButton
