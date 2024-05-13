import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'
const InfoBox = ({text,link,btnText}) =>(
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="" className='w-4 h-4 object-contain' />
        </Link>
    </div>
)
const renderContent = {
    1: (
        <h1 className="sm:text-xl sm: leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hola, Mi nombre es <span className="font-semibold">Andrés</span> ✌🏻
        <br/>
        Un desarrollador Entuciasta Front-end de México 🇲🇽!
        </h1>
    ),
    2: (
        <InfoBox
        text="Como Desarrollador front-end siempre me esmero en aprender tecnologias de punta para el diseño y la implementacion de las Paginas Web"
        link='/about'
        btnText='Saber mas'
        />
        ),
    3: (
        <InfoBox
        text= "He dirigido y creado multiples proyectos a lo largo de los años."
        link='/projects'
        btnText='Visita mi Portafolio'
        />
        ),
    4:(
        <InfoBox
        text="Necesitas una pagina web digna o buscas un desarrollador experimentado con vision para el desarrollo web? Estoy a un click de distancia. "
        link='/contact'
        btnText='Contactame'
        />
        ),
    };


const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo