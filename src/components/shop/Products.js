import React from 'react';
import './Shop.css';

function Products() {
    return (
    <div className='container-fluid'>
    <div className="input-group ">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" className="btn btn-outline-primary">search</button>
    </div>
    <br/>
    <div className="container"style={{paddingTop:'20px',textJustify:"auto"}}>
    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
       </p>
    </div>
    </div>
    );
}
export default Products;