
// import './App.css';
// import { Navbar } from './components/Navbar/Navbar';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import { ShopCategory } from './pages/ShopCategory';
// import LoginSignup from './pages/LoginSignup';
// import Product from './pages/Product';
// import Shop from './pages/Shop';
// import Cart from './pages/Cart';

// function App() {
//   return (
//     <div >
//       <BrowserRouter>
//     <Navbar/>
    
//     <Routes>
//   <Route path='/' element ={<Shop/>}/>
//       <Route path='/mens' element={<ShopCategory category="mens"/>}/>
//       <Route path='/womens' element={<ShopCategory category="womens"/>}/>
//       <Route path='/kids' element={<ShopCategory category="kids"/>}/>
//       <Route path='/product' element={<Product/>}> 
//       <Route path=':productId' element={<Product/>}/>
//       </Route>
     
//       <Route path='/cart' element={<Cart/>}></Route>
//       <Route path='/login' element={<LoginSignup/>}></Route>
//     </Routes>
   
//      </BrowserRouter>
//          </div>
//   );
// }

// export default App;
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  ShopCategory  from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import { Footer } from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
// import all_product from '../components/Assets/all_product'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            {/* Nested route for product ID */}
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          
        </Routes>
        <Footer/>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
