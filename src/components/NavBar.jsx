import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='nav'>
      <Link to="meu-portfolio"> Home
      </Link>

      <Link to="sobre"> Sobre 
      </Link>

      <Link to="projetos"> Projetos
      </Link>

      <Link to="contato"> Contatos
      </Link>
    </div>
  )
}

export default NavBar
