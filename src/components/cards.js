import React from 'react'
import '../components/cards.css'
import { Link } from 'react-router-dom'

const ServicesCards = () => {
  return (
    <>
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
    </>
  )
}

export default ServicesCards