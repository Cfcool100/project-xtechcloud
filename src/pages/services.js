import React from 'react'
import strategie from '../img/strategie-digital.png'
import crm from '../img/strategie-crm.png'
import automatisation from '../img/automatisation.png'
import NavBar from '../components/navBar'
import Footer from '../components/footer'

const Services = () => {
  return (
    <>
      <NavBar />
      <div className='back'>
        <h1>Nos Sevices</h1>
      </div>
      <div className='Services'>
        <div className="crm">
          <div className="left-crm service text">
            <h3>Stratégie de CRM et tunnels de vente</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro excepturi expedita itaque in, magni quia error doloremque dolorum cum accusantium cupiditate suscipit ea. Repellendus quis tempore repudiandae eaque quisquam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quis ea animi consequuntur vel. Eligendi, doloribus reiciendis voluptas numquam dolores animi officiis odit eaque. Odit corporis sint rem numquam alias. <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi, laborum delectus itaque repellendus, nesciunt voluptate repellat architecto tempora neque dignissimos fugiat officiis expedita qui earum dolorum similique esse atque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit asperiores dolore. Itaque, accusantium. Sit vitae voluptates consequatur aliquam minus cupiditate itaque consectetur nulla beatae in ducimus molestiae, fugiat impedit.
            </p>
          </div>
          <div className="right-crm">
            <img src={crm} alt="" />
          </div>
        </div>
        <div className="strategie">
          <div className="left-strategie">
            <img src={strategie} alt="" />
          </div>
          <div className="right-strategie text">
            <h3>Stratégie digitale</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro excepturi expedita itaque in, magni quia error doloremque dolorum cum accusantium cupiditate suscipit ea. Repellendus quis tempore repudiandae eaque quisquam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quis ea animi consequuntur vel. Eligendi, doloribus reiciendis voluptas numquam dolores animi officiis odit eaque. Odit corporis sint rem numquam alias.<br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi, laborum delectus itaque repellendus, nesciunt voluptate repellat architecto tempora neque dignissimos fugiat officiis expedita qui earum dolorum similique esse atque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit asperiores dolore. Itaque, accusantium. Sit vitae voluptates consequatur aliquam minus cupiditate itaque consectetur nulla beatae in ducimus molestiae, fugiat impedit.
            </p>
          </div>
        </div>
        <div className="auto">
          <div className="left-auto text">
            <h3>Automatisation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet porro excepturi expedita itaque in, magni quia error doloremque dolorum cum accusantium cupiditate suscipit ea. Repellendus quis tempore repudiandae eaque quisquam.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quis ea animi consequuntur vel. Eligendi, doloribus reiciendis voluptas numquam dolores animi officiis odit eaque. Odit corporis sint rem numquam alias.<br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi, laborum delectus itaque repellendus, nesciunt voluptate repellat architecto tempora neque dignissimos fugiat officiis expedita qui earum dolorum similique esse atque.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit asperiores dolore. Itaque, accusantium. Sit vitae voluptates consequatur aliquam minus cupiditate itaque consectetur nulla beatae in ducimus molestiae, fugiat impedit.
            </p>
          </div>
          <div className="right-auto">
            <img src={automatisation} alt="" />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Services;