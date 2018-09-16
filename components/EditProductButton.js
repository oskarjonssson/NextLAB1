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
  }

  handleToggleClick() {
      const { show } = this.state;
      this.setState( { show : !show } )
    }

  render(){

    return(
      <div>
        <button onClick={this.handleToggleClick}>
          {this.state.show ? 'ON' : 'OFF'}
        </button>
        { this.state.show &&
          <div style= {toggleDiv}>
            <button onClick={this.handleToggleClick}>
              {this.state.show ? 'X' : 'X'}
            </button>
            <div>Product: {this.props.passProduct}</div>
            <div>Name: {this.props.passName}</div>
            <div>Type: {this.props.passType}</div>
          </div>
        }
      </div>
    )
  }
}


export default EditProductButton
