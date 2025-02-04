import React from 'react'

import tb1 from "../assets/tb1.png";
import tb2 from "../assets/tb1.png";
import tb3 from "../assets/tb1.png";

import "./Home.css"


const Home = () => {
  return (
    <div>

    <div className='Slide'>
    </div>

    <section className='Servicos'>
        <div className='Titulo'>
        <h1>Serviços</h1>
        </div>
        
        <article className='cards-servicos'>
          <article className='card-servicos'>
            <img src={tb1} alt="#" />
            <p>Exemplo de trabalho 1 </p>
          </article>
          <article className='card-servicos'>
            <img src={tb2} alt="#" />
            <p>Exemplo de trabalho 2 </p>
          </article>
          <article className='card-servicos'>
            <img src={tb3} alt="#" />
            <p>Exemplo de trabalho 3</p>
          </article>
        </article>
      </section>

    </div>
  )
}

export default Home