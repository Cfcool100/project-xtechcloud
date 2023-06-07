import React from 'react'
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactForm = () => {
  return (
    <>
      <Container id='contact-form'>
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
    </Container>
    </>
  )
}

export default ContactForm
