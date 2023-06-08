import React, { useEffect, useState } from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import { Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ServicesCards from '../components/cards_services'
import BlogCards from '../components/cards_blog';
import axios from 'axios';

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
            <Form id='form'>
              <Form.Group controlId="input">
                <Form.Label>Nom :</Form.Label>
                <FormControl type="text" placeholder="Entrez votre nom" autocomplete="off"/>
              </Form.Group>

              <Form.Group controlId="mail">
                <Form.Label>Email :</Form.Label>
                <FormControl type="email" placeholder="Entrez votre email" />
              </Form.Group>

              <Form.Group controlId="input">
                <Form.Label>Objet :</Form.Label>
                <FormControl type="text" placeholder="Entrez votre objet" />
              </Form.Group>

              <Form.Group controlId="text-area">
                <Form.Label>Message :</Form.Label>
                <FormControl as="textarea" rows={4} placeholder="Entrez votre message" />
              </Form.Group>

              <Button variant="primary" type="submit" >Envoyer</Button>
            </Form>

          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default Acceuil