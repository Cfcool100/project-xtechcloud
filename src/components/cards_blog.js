import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import '../components_css/cards_blog.css'

const Cards_blog = () => {

const [data, setData] = useState([]);

  const fetchData = async () => {
    const d = await axios.get("https://databasetest-0054f78e8f57.herokuapp.com/blog")
    console.log(d);
    setData(d.data);
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <section id='blog'>
        <Link to={'/blog'}><h2>Actualités</h2></Link>
        <div className="cards_blog">
          {data.map((d) => (
            <div className="card_blog ">
            <h4>{d.title}</h4>
          </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Cards_blog
