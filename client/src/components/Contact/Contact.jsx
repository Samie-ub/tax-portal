import React from "react";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@mui/material";
import "./Contact.css"
import ContactLocation from "./ContactLocation";
import Footer from '../footer/Footer'
function Contact() {
  return (
    <main>
      <Navbar />
      <div className="contact-top-container">
      <Grid container justifyContent="space-evenly">
        <Grid item lg={5.5} sm={12}>
          <p className="contact-p-main">Contact Us</p>
          <p className="contact-p-one">Feel free to get <span className="contact-p-span">in touch <br /> with us.</span> </p>
          <p className="contact-p-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <input type="email" name="name" placeholder="Your Email Adress" autoComplete="off" className="input-field"/>
          <input type="name" name="name" placeholder="Full Name" autoComplete="off" className="input-field"/>
          <input type="subject" name="name" placeholder="Subject" autoComplete="off" className="input-field"/>
          <textarea className="textarea" placeholder="Your Message Here"></textarea>
          <div className="contact-btton"> 
          <button className="contact-btton-one">Send</button>
          </div>
        </Grid>
        <Grid item lg={5.5} sm={12}>
         <img src="./Assets/home.png" alt="contact" style={{width:"100%", marginTop:"2rem"}}/>
        </Grid>
      </Grid>
      </div>
      <ContactLocation />
      <Footer />
    </main>
  );
}

export default Contact;
