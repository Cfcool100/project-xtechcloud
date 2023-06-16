import React, { useEffect, useState } from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ServicesCards from '../components/cards_services'
import BlogCards from '../components/cards_blog';
import axios from 'axios';
import ContactForm from '../components/contact-form';

function Acceuil() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/home")
      .then((res) => {
        const data = res.data;
        console.log(data);
        setData(data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



  return (
    <>
      <NavBar />
      <section className="accueils">
        <div className="left">
          <p>{data.desc}</p>
        </div>
      </section>
      <section className='extern'>
        <ServicesCards />

        <BlogCards />

        <section id='contact'>
          <div className='text-contact'>
            <h1>Contactez-nous</h1>
          </div>
          <div className='form-contact'>
          <ContactForm/>
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default Acceuil