import React from 'react'
import Banner from '../components/contact/Banner';
import Navbars from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import FAQ from '../components/contact/FAQ';
import ContactForm from '../components/contact/ContactForm';




function ContactUs() {
  return (
    <div>
      <Navbars/>
     <Banner/>
     <FAQ/>
     <ContactForm/>
      <Footer/>
    </div>
  );
}

export default ContactUs;
