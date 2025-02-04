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
        <h1>HCar</h1>

        <div className='Logo'>
        <img src={Logo} alt="" />
        </div>

        <Link to="https://wa.me/5511949094912" target="_blank"> <img src={zap} alt="" /> </Link>

      </menu>
    </div>
    </div> 
  )
}

export default NavBar