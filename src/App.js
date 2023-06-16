import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Acceuil from './pages/acceuil';
import Services from './pages/services';
import Blog from './pages/blog';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Acceuil/>} />
        <Route path='/services' element ={<Services/>} />
        <Route path='/blog' element ={<Blog/>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
