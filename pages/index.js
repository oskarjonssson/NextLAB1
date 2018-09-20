import FetchData from '../components/FetchData.js'
import AddProduct from '../components/AddProduct.js'
import Nav from '../components/Nav.js'
import Link from 'next/link'
import GlobalStyle from './GlobalStyle';
//CSS Start.
  const containerHead = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
//CSS End.
const Index = props => (
  <div style={containerHead}>
    <GlobalStyle />
    <Nav />
    <FetchData/>
  </div>


)




export default Index
