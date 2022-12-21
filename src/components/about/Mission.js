import React from "react";
import './About.css';
//import Target from '../../assets/target.png'

function Mission(){
  return (
    <section id="legacy">
    <div id="company-goals" className="container-fluid">
    <div id="company-objectives" className="row">
      <div id="mission-content" className="col-md-6">
       <h2>Mission</h2>
       <img id="mission" src="target.png"/>
       <br />
       <p>
       The Excelente Learning Academy prepare students to understand, contribute to, and succeed in a rapidly changing
       society, thus making the world a better and more just place.We will ensure that our students develop both the
       skill that a sound education provides and the competencies essential for success and leadership in the emerging
       creative economy.We will also lead in generating practical and theoretical knowledge that enables people
       to better understand our world and improve conditions for local and global communities.
       </p>
       </div>
        <br />
      <div id="vision-content" className="col-md-6">
      <h2>Vision</h2>
      <img id="vision" src="target.png"/>
      <br/>
      <p>Our vision is to empower students to acquire, demonstrate, articulate and value knowledge and skills that
        will support them, as life-long learners, to participate in and contribute to the global world and 
        practise the core values of the school: respect, tolerance and inclusion, and excellence.           
       </p>
      </div>
      <br />
    </div>
    </div>
    </section>
    );
   }
export default Mission;