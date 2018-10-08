import React, { Component } from 'react';
import Head from 'next/head'

//CSS Start.
const toggleDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Montserrat',
  width: '170px',
  height: '90px',
  margin: '0',
  marginTop: '-200px',
  border: 'none',
  backgroundColor: 'white',
  padding:'10px',
  borderRadius: '5px',
  WebkitBoxShadow:'0px 0px 19px 0px rgba(0,0,0,0.2)',
  MozBoxShadow:' 0px 0px 19px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 0px 19px 0px rgba(0,0,0,0.2)'
}

const buttonsStyle = {
  marginTop:'5px',
  fontFamily: 'Montserrat',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '0.5px solid lightgray',
}

const buttonSave = {
  marginTop:'5px',
  fontFamily: 'Montserrat',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '1px solid green',
}


const buttonClose = {
  marginTop:'5px',
  fontFamily: 'Montserrat',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '1px solid red',
}

const inputStyle = {
  fontFamily: 'Montserrat',
  textAlign: 'center',
  marginTop: '5px',
  padding: '0',
  width: '100%',
  height: '20px',
  border: '0.5px solid lightgray',
  borderRadius: '5px'
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
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      </Head>
        <button style={buttonsStyle} onClick={this.handleToggleClick}>
          {this.state.show ? 'CLOSE' : 'EDIT'}
        </button>
        { this.state.show &&
          <div key={this.props.passName} style= {toggleDiv}>
            <form >
              <div>
                <input
                  style={inputStyle}
                  type='text'
                  value={this.props.passProduct}
                  onChange={this.handleChange} />
              </div>
              <button style={buttonSave} onClick={this.handleSubmit}>save</button>
              <button style={buttonClose} onClick={this.handleToggleClick}>
                {this.state.show ? 'X' : 'X'}
              </button>
            </form>
          </div>
        }
      </div>
    )
  }
}


export default EditProductButton
