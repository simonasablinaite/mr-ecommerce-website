import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

import press_banner from './Components/Assets/spaudos-baneris.jpg';
import engraving_banner from './Components/Assets/graviravimo-baneris.jpg';
import presents_banner from './Components/Assets/dovanos-baneris.png';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/spauda' element={<ShopCategory banner={press_banner} category="spauda" />} />
          <Route path='/graviravimas' element={<ShopCategory banner={engraving_banner} category="graviravimas" />} />
          <Route path='/dovanų idėjos' element={<ShopCategory banner={presents_banner} category="dovanos" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <br />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
