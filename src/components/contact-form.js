import React from 'react'

const ContactForm = () => {
  return (
    <>
      <div className="contact-form">
          <form>
            <label>Votre Nom :</label>
            <input type="text" id="name" />
            <label>Votre Email :</label>
            <input type="email" id="" />
            <label>Votre Objet :</label>
            <input type="text" id="" />
            <label>Votre Message :</label>
            <textarea name="" id="text-area" cols="30" rows="10"></textarea>
          </form>
        </div>
    </>
  )
}

export default ContactForm
