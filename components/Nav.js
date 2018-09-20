import React, { Component } from 'react';
import Link from 'next/link'
import Head from 'next/head'




//CSS

const containerNav = {
  fontFamily: 'Montserrat',
  backgroundColor: '#fffff',
  margin: '0',
  padding: '0',
  width: '100%',
  height: '35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  WebkitBoxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)',
  MozBoxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)',
  BoxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)'
}

const links = {
  color: 'black',
  textDecoration: 'none',
  marginRight: '10px',
  marginLeft: '10px',
  fontSize: '15px',
  letterSpacing: '0.5px'
}


class Nav extends Component{


  render(){
    return(
      <div style={containerNav}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" />
      </Head>
        <Link href="/">
          <a style={links}>HOME</a>
        </Link>
        <Link href="/test">
          <a style={links}>TEST</a>
        </Link>
      </div>
    )
  }
}


export default Nav;
