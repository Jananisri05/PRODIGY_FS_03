import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Product from './Product';
import Home from './Home';
import Shoppingcart from './Shoppingcart';
import CustomerSupport from './CustomerSupport'
import './App.css'

function App() 
{
  const [count, setCount] = useState(0)
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/getProduct' element={<Product/>}/>
        <Route path='/cart' element={<Shoppingcart/>}/>
         <Route path="/support" element={<CustomerSupport />} />
      </Routes>
      </BrowserRouter>
    </div>
  );


  
}

export default App;
