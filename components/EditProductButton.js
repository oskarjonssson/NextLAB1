import React, { Component } from 'react';
import Head from 'next/head'

//CSS Start.
const toggleDiv = {
  fontFamily: 'Muli',
  width: '400px',
  position: 'absolute',
  left: '0',
  right: '0',
  margin: 'auto',
  border: '1px solid black',
  zIndex: '1px',
  backgroundColor: 'green'
}

const buttonsStyle = {
  fontFamily: 'Muli',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '0.5px solid lightgray',
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
      <Head>>
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet" />
      </Head>
        <button style={buttonsStyle} onClick={this.handleToggleClick}>
          {this.state.show ? 'CLOSE' : 'EDIT'}
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
