import React from "react";
import './Contact.css';

function Banner(){
    return (
      <div className="container-fluid">
      <div style={{backgroundImage:"url(./contact-banner.jpg)",backgroundSize:"cover"}}id="banner" className="row vh-100">
      <div className="col">
      <h1 className="contact-title">CONTACT US</h1>
      </div>
      <div className="col"></div>
      </div>
      </div>
    );
    }

export default Banner;