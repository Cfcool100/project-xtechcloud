import React from 'react'
import { Link } from 'react-router-dom'
import '../components_css/cards_blog.css'

const Cards_blog = () => {
  return (
    <>
      <section id='blog'>
        <Link to={'/blog'}><h2>Actualités</h2></Link>
        <div className="cards_blog">
          <div className="card_blog ">
            <h4>Stratégie de CRM</h4>
          </div>
          <div className="card_blog">
            <h4>Stratégie digitale</h4>
          </div>
          <div className="card_blog">
            <h4>Automatisation</h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cards_blog
