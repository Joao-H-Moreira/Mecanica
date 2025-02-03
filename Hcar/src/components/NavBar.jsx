import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import zap from "../assets/whatsapp.png"

import './NavBar.css'

const NavBar = () => {
return (
    <div>
    <div className="navBar">
      <menu className="menuBar">
        <p>HCar</p>

      <div className='Foto'>
        <img src={Perfilfoto} alt="" />
     </div>

     <div className='ctn'>
        <a href="https://wa.me/5511949094912" target="_blank"> <img src={zap} alt="" /> </a>
      </div>

      </menu>

      <p className="text">Bem-vindo! </p>
    </div>
    </div> 
  )
}

export default NavBar