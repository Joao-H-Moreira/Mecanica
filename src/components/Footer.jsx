import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from 'react-router-dom';

import './footer.css';

const footer = () => {
  return (
    <footer>

        <p className='email'>
          <AiOutlineMail /> seu email aqui
        </p>
      

      <div className='social-media'>
        <Link to="wa.me" target='_Blank'><FaWhatsapp/></Link>
      </div>
    </footer>
  )
}

export default footer