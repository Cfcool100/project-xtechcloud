import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import { Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ServicesCards from '../components/cards'

function Acceuil() {
  return (
    <>
      <NavBar />
      <section className="accueils">
        <div className="left">
          <p>Le marketing numérique, également connu sous le nom de marketing en ligne ou marketing digital, désigne l'utilisation de canaux numériques tels que les moteurs de recherche, les médias sociaux, les sites web, les courriels et les applications mobiles pour promouvoir des produits ou des services et atteindre un public cible.</p>
          <p>Le marketing numérique offre de nombreux avantages par rapport aux méthodes traditionnelles de marketing. Il permet aux entreprises d'atteindre un public mondial sans avoir à investir dans des emplacements physiques coûteux. De plus, il offre une mesure plus précise des résultats grâce à des outils d'analyse avancés, ce qui permet aux spécialistes du marketing de prendre des décisions éclairées et d'optimiser leurs campagnes en temps réel.</p>
        </div>
      </section>
      <section className='extern'>
      <ServicesCards/>
      <section id='blog'>
        <h2>Actualités</h2>
      </section>
      <section id='contact'>
        <div className='text-contact'>
          <h1>Contactez-nous</h1>
        </div>
        <div className='form-contact'>
        <Form id='form'>
            <Form.Group controlId="formName">
              <Form.Label>Nom :</Form.Label>
              <FormControl type="text" id='input' placeholder="Entrez votre nom" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email :</Form.Label>
              <FormControl type="email" id='input' placeholder="Entrez votre email" />
            </Form.Group>

            <Form.Group controlId="formObject">
              <Form.Label>Objet :</Form.Label>
              <FormControl type="email" id='input' placeholder="Entrez votre objet" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message :</Form.Label>
              <FormControl as="textarea" rows={4} id='text-area' placeholder="Entrez votre message" />
            </Form.Group>

            <Button variant="primary" type="submit" id='submit'>Envoyer</Button>
          </Form>
        </div>
      </section>
      </section>
      <Footer />
    </>
  )
}

export default Acceuil