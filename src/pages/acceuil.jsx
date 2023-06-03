import React from 'react'
import NavBar from '../components/navBar'
import img_marketer from '../img/market-home.png'
import Footer from '../components/footer'
import { Link } from 'react-router-dom'
import ContactForm from '../components/contact-form'

function Acceuil() {
  return (
    <>
      <NavBar />
      <section className="accueils">
        <div className="left">
          <p>Le marketing numérique, également connu sous le nom de marketing en ligne ou marketing digital, désigne l'utilisation de canaux numériques tels que les moteurs de recherche, les médias sociaux, les sites web, les courriels et les applications mobiles pour promouvoir des produits ou des services et atteindre un public cible.</p>
          <p>Le marketing numérique offre de nombreux avantages par rapport aux méthodes traditionnelles de marketing. Il permet aux entreprises d'atteindre un public mondial sans avoir à investir dans des emplacements physiques coûteux. De plus, il offre une mesure plus précise des résultats grâce à des outils d'analyse avancés, ce qui permet aux spécialistes du marketing de prendre des décisions éclairées et d'optimiser leurs campagnes en temps réel.</p>
        </div>
        <div className="right">
          <img src={img_marketer} alt="" />
        </div>
      </section>
      <section className='extern'>
      <section id='service'>
        <Link to={'/services'}><h2>Nos Services</h2></Link>
        <div className="cards">
          <div className="card card-crm">
            <h4>Stratégie de CRM</h4>
          </div>
          <div className="card card-strategie">
            <h4>Stratégie digitale</h4>
          </div>
          <div className="card card-auto">
            <h4>Automatisation</h4>
          </div>
        </div>
      </section>
      <section id='blog'>
        <h2>Actualités</h2>
      </section>
      <section id='contact'>
        <div className='text-contact'>
          <h1>Contactez nous</h1>
        </div>
        <ContactForm/>
      </section>
      </section>
      <Footer />
    </>
  )
}

export default Acceuil