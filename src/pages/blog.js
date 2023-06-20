import React, { useEffect, useState } from 'react'
import './blog.css';
import NavBar from '../components/navBar'
import Footer from '../components/footer';
import axios from 'axios';
import Loader from '../components/loader'

const Blog = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/blog");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error state or display an error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);



  return (
    <>
      {loading ? <Loader /> : (
        <>
          <NavBar />
          <div className='background'>
            <h1>Blog</h1>
          </div>
          <h1>Articles</h1>
          <div className="posts">

            {data.map((post) => (
              <div className="card" key={post._id}>
                <img className="card-img-top" src={post.url_img} alt="" />
                <div className="card-body">
                  <div className="card-title h5">{post.title}...</div>
                  <p className="card-text">{post.desc}</p>
                  <button type="button" className="btn"><a href="https://lesjoiesducode.fr/">lire plus 👉🏾</a></button>
                </div>
              </div>
            ))}

          </div>

          <Footer />
        </>
      )}
    </>
  )
}

export default Blog


