import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Projetos from './pages/Projetos.jsx'
import Contato from './pages/Contato.jsx'


createRoot(document.getElementById('root')).render(
<StrictMode>
    <BrowserRouter>
      <NavBar/>

      <Routes>
          {/* <Route element={<App/>}/> */}
          <Route path='/meu-portfolio' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/projetos' element={<Projetos/>}/>
          <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
