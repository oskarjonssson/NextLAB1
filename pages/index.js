import FetchData from '../components/FetchData.js'
import AddProduct from '../components/AddProduct.js'
//CSS Start.
  const headerWrapper = {
    fontFamily: 'Arial',
    fontSize: '36px',
    textAlign: 'center'
  }
//CSS End.
const Index = props => (
  <div>
    <div style={headerWrapper}>
      <p>Welcome to an awesome API</p>
    </div>
    <FetchData/>
  </div>
)



export default Index
