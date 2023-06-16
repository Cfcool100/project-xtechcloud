import React, { useState } from 'react'
import { Container, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const ContactForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [object, setObject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:4000/contact', {
        name,
        email,
        object,
        message
      });
      console.log(res.data);
      // Réinitialisez les champs du formulaire après avoir envoyé les données
      setName('');
      setEmail('');
      setObject('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container id='contact-form'>
          <Form id='form' onSubmit={handleSubmit}>
            <Form.Group controlId="input">
              <Form.Label>Nom :</Form.Label>
              <FormControl type="text" placeholder="Entrez votre nom" value={name} onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="mail">
              <Form.Label>Email :</Form.Label>
              <FormControl type="email" placeholder="Entrez votre email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="input">
              <Form.Label>Objet :</Form.Label>
              <FormControl type="text" placeholder="Entrez votre objet" value={object} onChange={(e) => setObject(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="text-area">
              <Form.Label>Message :</Form.Label>
              <FormControl as="textarea" rows={4} placeholder="Entrez votre message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit" >Envoyer</Button>
          </Form>
    </Container>
    </>
  )
}

export default ContactForm
