import React from 'react'
import Banner from '../components/about/Banner';
import Mission from '../components/about/Mission';
import Teams from '../components/about/Teams';
import History from '../components/about/History';
import Challenge from '../components/reading_challenge/Challenge';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


function AboutUs() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Mission/>
      <br/>
      <Teams/>
      <br/>
      <History/>
      <Challenge/>
      <Footer/>
    </div>
  );
}
export default AboutUs;
