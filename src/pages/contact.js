import React from "react";
import NavBar from "../components/navBar";
import ContactForm from "../components/contact-form";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="back">
        <h1>Contact</h1>
      </div>
      <div className="formulaire">
        <ContactForm/>
      </div>
    </>
  );
};

export default Contact;
