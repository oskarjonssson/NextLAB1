import React, { Component } from 'react';
import EditProductButton from './EditProductButton.js'
import Head from 'next/head'

const API = 'http://localhost:3001/api/getproducts';

//CSS Styles Start.
const buttonStyle = {
  position: 'relavtive',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '200px',
  height: '350px',
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '5px',
  color: 'lightgray',
  margin: '10px',
  padding: '20px',
  fontFamily: 'Montserrat',
  WebkitBoxShadow:'0px 0px 19px 0px rgba(0,0,0,0.2)',
  MozBoxShadow:' 0px 0px 19px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 0px 19px 0px rgba(0,0,0,0.2)'
}


const containerInfo = {
  width: '100%',
  heiht: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '15px'
}

const containerInfoText = {
  margin: '2px',
  color: '#5e5e5e',
}

const containerFetch = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '70%',
  marginTop: '30px',
  flexWrap: 'wrap',
  position: 'relavtive'
}

const containerButtons = {
  width: '100%',
  position: 'relavtive'
}

const buttonsStyle = {
  fontFamily: 'Montserrat',
  width: '100%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  outline: 'none',
  borderBottom: '0.5px solid lightgray',
  marginTop: '10px',
}

const imgTag = {
  heiht: '50px',
  width: '100%',
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


  render() {

  {/*Skriver ut all data vi har hämtat hem och gör om den till JSX-element*/}
  const list = this.state.apiData.map(data =>
    <div style={buttonStyle} key={data.name}>
      <div><img style={imgTag} src={data.img}></img></div>
      <div style={containerInfo}>
        <p style={containerInfoText}>{data.product}</p>
        <p style={containerInfoText}>{data.name}</p>
        <p style={containerInfoText}>{data.type}</p>
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
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      </Head>
          {list.length > 0 ? list : noRes}


      </div>
    );
  }
}

export default FetchData;
