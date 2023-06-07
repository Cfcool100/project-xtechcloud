import React from "react";
import NavBar from "../components/navBar";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="back">
        <h1>Contact</h1>
      </div>
      <div className="formulaire">
        <div id="text">
          <h1>Un besoin ? </h1>
          <h5>Remplissez ce formulaire 👉🏾</h5>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
