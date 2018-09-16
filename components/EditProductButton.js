import React, { Component } from 'react';

class EditProductButton extends Component{
  constructor(props){
    super(props);
    this.state = {
      editData: this.props.apiData,
      isToggleOn: true,
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }


  render(){
    return(
      <div>
        <button onClick={this.handleToggleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <button>Edit</button>
      </div>
    )
  }
}


export default EditProductButton
