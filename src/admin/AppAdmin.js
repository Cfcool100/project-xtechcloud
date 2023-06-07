import React from 'react';
import { Routes, Route } from 'react-router-dom'
import AdminHome from './pages/AdminHome';
import LoginForm from './components/LoginForm';

const AppAdmin = () => {
  return (
    <>
      <Routes>
          <Route exact path="/admin/login" element={<LoginForm/>} />
          <Route path="/admin/home" element={<AdminHome/>} />
      </Routes>

    </>
  )
}

export default AppAdmin
