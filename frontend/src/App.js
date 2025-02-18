import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  const ProtectedRoute = ({ element }) => {
    const isAuthenticated = localStorage.getItem("user");
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
