import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import { Fragment } from 'react';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ShopPage from './pages/ShopPage';

function App(){
  return (
    <>
    <Fragment>
    <div>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<AboutUs/>}/>
      <Route  path='/contact-us' element={<ContactUs/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
    </Routes>
  </BrowserRouter>
  </div>
  </Fragment>
  </>
);
}
export default App;