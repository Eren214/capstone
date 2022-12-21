import React from "react";
import './About.css';

function Banner(){
    return (
      <div className="container-fluid">
      <div style={{backgroundImage:"url(./banner2.jpg)",backgroundSize:"cover"}}id="banner" className="row vh-100">
      <div className="col">
      <h1 className="about-us">The Company</h1>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum." 
      </p>
      </div>
      <div className="col"></div>
      </div>
      </div>
    );
    }

export default Banner;