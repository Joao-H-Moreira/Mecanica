import React from 'react'


import "./Home.css"
// import linke from "../assets/based/linkedin.png"
// import github from "../assets/based/github.png"
import zap from "../assets/icons/whatsapp.png"
// import insta from "../assets/based/instagram.png"

const Home = () => {
  return (
    <div>
    <div className='Home'>
      <div className='Carrossel'>
      
      </div>
    </div>
      <div className='Servicos'>
          <div className='Servico-t'> SERVIÇOS
          
          </div>

        <div>
        </div>

      </div>   
      <div className='Contato'>

  

      <div className='ctn'>
        <a href="https://wa.me/5511949094912" target="_blank"> <img src={zap} alt="" /> </a>
      </div>

      </div>
      
    </div>
  )
}

export default Home
