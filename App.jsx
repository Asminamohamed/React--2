import React,{useState} from 'react'
import Nav from './Content/Nav'
import Header from './Content/Header'
import cards from './Content/Cards'
import Footer from './Content/Footer'

function App() {
  let [cart,setCart] = useState(0);
  return <>
  {/* <!-- Navigation--> */}
  <Nav cart ={cart}/>
        {/* <!-- Header--> */}
        <Header/>
        {/* <!-- Section--> */}
      <Cards setCart={setCart}/>
        {/* <!-- Footer--> */}
        <Footer/>
  </>
}

export default App