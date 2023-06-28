import React, { useEffect, useState } from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import axios from 'axios'
import Loader from '../components/loader'

const Services = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const d = await axios.get("https://databasetest-0054f78e8f57.herokuapp.com/services")
    setData(d.data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);


  const url = "https://databasetest-0054f78e8f57.herokuapp.com/";

  return (
    <>
      {loading ? <Loader /> :
        <>
          <NavBar />
          <div className='back'>
            <h1>Nos Sevices</h1>
          </div>
          <div className='Services'>
            <div className="crm">
              <div className="left-crm service text">
                <h3>{data && data[0].title}</h3>
                <p>
                  {data && data[1].desc}<br /><br />
                  {data && data[1].desc}
                </p>
              </div>
              <div className="right-crm">
                <img src={url + data[0].url_img} alt="" />
              </div>
            </div>
            <div className="strategie">
              <div className="left-strategie">
                <img src={url + data[1].url_img} alt="" />
              </div>
              <div className="right-strategie text">
                <h3>{data && data[1].title}</h3>
                <p>
                  {data && data[1].desc}<br /><br />
                  {data && data[1].desc}
                </p>
              </div>
            </div>
            <div className="auto">
              <div className="left-auto text">
                <h3>{data && data[2].title}</h3>
                <p>
                  {data && data[2].desc}<br /><br />
                  {data && data[2].desc}
                </p>
              </div>
              <div className="right-auto">
                <img src={url + data[2].url_img} alt="" />
              </div>
            </div>
          </div>
          <Footer />
        </>
      }

    </>
  )
}

export default Services;