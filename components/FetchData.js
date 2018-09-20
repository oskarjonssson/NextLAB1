import React, { Component } from 'react';
import EditProductButton from './EditProductButton.js'
import AddProduct from './AddProduct.js'
import Head from 'next/head'

const API = 'http://localhost:3001/api/getproducts';

//CSS Styles Start.
const buttonStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '200px',
  height: '300px',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '5px',
  color: 'lightgray',
  margin: '10px',
  padding: '20px',
<<<<<<< HEAD
  fontFamily: 'Courier'
=======
  fontFamily: 'Muli',
  WebkitBoxShadow:'0px 0px 19px 0px rgba(0,0,0,0.2)',
  MozBoxShadow:' 0px 0px 19px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 0px 19px 0px rgba(0,0,0,0.2)'
>>>>>>> c7126d553090c0d5e5b5aa68081ea35e8e1bbc13
};

const divWrapper = {
  display: 'flex',
  justifyContent: 'center',
}

const containerInfo = {
  width: '90%',
  heiht: '100px'
}

const containerFetch = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const containerButtons = {
  width: '100%',
}

const buttonsStyle = {
  fontFamily: 'Muli',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '0.5px solid lightgray',
  marginTop: '10px',
  ':hover': {
   borderBottom: '0.5px solid black'
 }
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
    let newData = [...this.state.apiData];
    let index = newData.findIndex(p => p.name === name);
    newData[index].product = product;
    this.setState({ data: newData})
  }

  updateApi = (name) => {
    let result = this.state.apiData.find( product => product.name === name );
    console.log(result.product, result.name);
    fetch('http://localhost:3001/api/update/' + name,
    {
      method: 'POST',
      body: JSON.stringify(result)
    })
  }

  deleteData = (name, product) => {
    fetch('http://localhost:3001/api/delete/' + name,  { method: 'DELETE' })
    .then(res => res.json())
    .then(res=> {
      let newData = [...this.state.apiData];
      let index = newData.findIndex(p => p.name === name);
      newData[index].product = product;
      newData.splice(index, 1);
      this.setState({ apiData: newData})
      console.log(JSON.stringify(res) + ' removed successfuly');
    })
  }

  addProduct = (name, product , type) => {
        let obj = {product, type, name}
        let newData = [...this.state.apiData];
        newData.push(obj);
        this.setState({ apiData: newData})

        fetch('http://localhost:3001/api/addproduct/' + name,
        {
          method: 'POST',
          body: JSON.stringify(obj),
        })
    /*  .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
      */

  }

  render() {

  {/*Skriver ut all data vi har hämtat hem och gör om den till JSX-element*/}
  const list = this.state.apiData.map(data =>
    <div style={buttonStyle} key={data.name}>

      <div style={containerInfo}>
        <p>Product: {data.product}</p>
        <p>Name: {data.name}</p>
        <p>Type: {data.type}</p>
      </div>
      <div style={containerButtons}>
      <EditProductButton
          updateProduct={this.updateApi}

          editProduct={this.editProduct}
          passProduct={data.product}
          passName={data.name}
          passType={data.type}
        />
        <button style={buttonsStyle} onClick={ () => this.deleteData(data.name)}>REMOVE</button>
      </div>
    </div>
  );

  const noRes = <div>"Du har inte startat serven till API'et"</div>
    return (
      <div style={containerFetch}>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet" />
      </Head>
        <AddProduct
          addProduct={this.addProduct}
          apiData={this.state.apiData}
        />
        <div style={divWrapper}>
          {list.length > 0 ? list : noRes}
        </div>

      </div>
    );
  }
}

export default FetchData;
