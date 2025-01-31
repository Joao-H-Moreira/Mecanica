import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import {Link} from 'react-router-dom';

import './footer.css';

const footer = () => {
  return (
    <footer>

        <p className='email'>
          
        </p>
      
          <p className='email menos'>     
            
          </p>

      <div className='social-media'>
        {/* <Link to="https://github.com/Joao-H-Moreira" target='_Blank'><FaGithub/></Link>
        <Link to="https://www.linkedin.com/in/jo%C3%A3o-henrique-de-assis-moreira-22a6ab1ba/" target='_Blank'><FaLinkedin/></Link> */}
      </div>
    </footer>
  )
}

export default footer