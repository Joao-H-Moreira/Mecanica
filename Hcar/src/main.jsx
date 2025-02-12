import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './index.css'

import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <NavBar/>
  
        <Routes>
            <Route element={<App/>}/>
            <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </StrictMode>,
  )