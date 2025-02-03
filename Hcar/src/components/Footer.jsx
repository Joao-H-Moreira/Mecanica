import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import {Link} from 'react-router-dom';

import './footer.css';

const footer = () => {
  return (
    <footer>
        <p>
            Texto generico
        </p>
        <p className='email'>
          <AiOutlineMail /> seuemail.com
        </p>
    </footer>
  )
}

export default footer