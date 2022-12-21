import React from "react";
import './Contact.css';

function ContactForm(){
    return (
    <section id="contact-form" className="container-fluid">
        <div id="contact-formcontent" className="container ">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <form>
        <div class="form-group">
            <label for="fullname">Name:</label>
            <input type="text" class="form-control" id="contact-fullname" aria-describedby="fullnameHelp" placeholder=" "/>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Email:</label>
            <input type="email" class="form-control" id="contact-email" placeholder=" "/>
            
        </div>
        <div class="form-group">
            <label for="contact-commentbox">What's on your mind?</label>
            <textarea class="form-control" id="contact-commentbox" rows="3"></textarea>
        </div>
       <br/>
        <button id="contact-submit" type="submit" class="btn btn-primary">SUBMIT</button>
        </form>
        </div>
    </section>
);
}
export default ContactForm;
