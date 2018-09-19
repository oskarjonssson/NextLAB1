import React, { Component } from 'react';
import EditProductButton from './EditProductButton.js'
import AddProduct from './AddProduct.js'

const API = 'http://localhost:3001/api/getproducts';

//CSS Styles Start.
const buttonStyle = {
  backgroundColor: '#80808099',
  border: '1px solid #6f6f6f',
  borderRadius: '5px',
  color: 'white',
  margin: '10px',
  padding: '20px',
  fontFamily: 'Arial'
};

const divWrapper = {
  display: 'flex',
  justifyContent: 'center',
}
//CSS Styles End.


class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
    }
    this.deleteData = this.deleteData.bind();
  }

  componentDidMount() {
    this.fetchFunction();
  }

  //Hämtar hem våran data från servern vi själva har startat upp med http://localhost:3001/api/getproducts
  fetchFunction(){
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ apiData: data }))
  }

  editProduct = (name, product, type) => {
    console.log(this.state.apiData);
    let newData = [...this.state.apiData];
    let index = newData.findIndex(p => p.name === name);
    newData[index].product = product;
    this.setState({ data: newData})
  }

  deleteData = (name, product) => {
    /*** DELETE REQUEST FETCH ***/
    fetch('http://localhost:3001/api/' + name,  { method: 'DELETE' })
    .then(res => res.json())
    .then(res=> {
      let newData = [...this.state.apiData];
      let index = newData.findIndex(p => p.name === name);
      newData[index].product = product;
      newData.splice(index, 1);
      this.setState({ apiData: newData})
      console.log(newData);
      console.log(JSON.stringify(res) + ' removed successfuly');
    })
  }

  addProduct = (name, product , type) => {
    let obj = {product, type , name}
/*
    fetch('http://localhost:3001/api/'+name, {
      method: 'POST',
      body: JSON.stringify(obj),
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))

        })*/
        let newData = [...this.state.apiData];
        newData.push(obj);
        console.log(newData)
        this.setState({ apiData: newData})
  }

  render() {

  {/*Skriver ut all data vi har hämtat hem och gör om den till JSX-element*/}
  const list = this.state.apiData.map(data =>
    <div style={buttonStyle} key={data.name}>
      <EditProductButton
          editProduct={this.editProduct}
          passProduct={data.product}
          passName={data.name}
          passType={data.type}
      />
    <button onClick={ () => this.deleteData(data.name)}>Remove</button>
      <div>Product: {data.product}</div>
      <div>Name: {data.name}</div>
      <div>Type: {data.type}</div>
    </div>
  );

  const noRes = <div>"Du har inte startat serven till API'et"</div>
    return (
      <div>
        <div style={divWrapper}>
          {list.length > 0 ? list : noRes}
        </div>
        <AddProduct
          addProduct={this.addProduct}
        />
      </div>
    );
  }
}

export default FetchData;
