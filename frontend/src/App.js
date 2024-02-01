
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Product from './Pages/Product';
import ShopCategory from './Pages/ShopCategory';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Shop from './Pages/Shop'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element ={<Shop/>}/>
       <Route path='/mens' element ={<ShopCategory category="mens"/>}/>
       <Route path='/womens' element ={<ShopCategory category="womens"/>}/>
       <Route path='/kids' element ={<ShopCategory category="kids"/>}/>
       <Route path="product" element={<Product/>}>
       <Route path=':productId'element ={<Product/>}/>      
       </Route>
     <Route path='/cart' element={<Cart/>}/>
     <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
      <Product/>
 
    </div>
  );
}

export default App;
