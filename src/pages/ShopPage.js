import React from 'react'
import Navbars from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import PaginationComponent from '../components/shop/PaginationComponent';
import Products from '../components/shop/Products';





function ShopPage() {
  return (
    <div>
      <Navbars/>
      <Products/>
     <PaginationComponent/>
      <Footer/>
    </div>
  );
}

export default ShopPage;