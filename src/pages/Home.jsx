import React from 'react'
import Perfilfoto from '../assets/perfil.jpg'


import "./Home.css"
import linke from "../assets/based/linkedin.png"
import github from "../assets/based/github.png"
import zap from "../assets/based/whatsapp.png"
import insta from "../assets/based/instagram.png"

const Home = () => {
  return (
    <div>
    <div className='Home'>
      <div className='Sobre-mim'>
      <div className='font-5 title margin-1'>ANALISTA E DESENVOLVEDOR DE SISTEMAS JUNIOR</div>
        <h2 className='Eu-1'> Um pouco sobre </h2>   
        <h2 className='Eu'> João Henrique</h2>
        <h3 className='Texto'> Eu sou João Henrique de Assis Moreira, um entusiasta da tecnologia com paixão pelo
                        desenvolvimento de software. Minha jornada começou com HTML, CSS e JavaScript, criando
                        interfaces intuitivas. Com formação em Análise e Desenvolvimento de Sistemas e habilidades em
                        TypeScript, Java e Python, crio soluções inteligentes para atender às necessidades dos usuários.
                        Minha proficiência em MySQL e design de bancos de dados me permite estruturas eficazes. Com o
                        Visual Studio Code, busco constante aprendizado e me adapto a diferentes ferramentas.</h3>


          <div className='btn-d'>
          <a href="https://drive.google.com/file/d/18NraWwCqu9gZo__CEUCpDzSwm-c7uXJ4/view?usp=sharing" target="_blank">Download CV </a>
          </div>              

      
      </div>
     
     
     <div className='Foto'>
        <img src={Perfilfoto} alt="" />
     </div>
    </div>
      <div className='Contatos'>
          <div className='font-5 title'> CONTATOS
          </div>
      </div>   
      <div className='Conteudo'>

      <div className='ctn'> 
        <a href="https://www.linkedin.com/in/joão-h-moreira/ " target="_blank">  <img src={linke} alt="" />  </a>
      </div>

        
      <div className='ctn'> 
        <a href="https://github.com/Joao-H-Moreira" target="_blank"> <img src={github} alt="" /> </a>
      </div>

      <div className='ctn'>
        <a href="https://wa.me/5511949094912" target="_blank"> <img src={zap} alt="" /> </a>
      </div>

      <div className='ctn'>
        <a href="https://www.instagram.com/jao_hm_" target="_blank"><img src={insta} alt="" /></a>
      </div>
      </div>
      
    </div>
  )
}

export default Home
