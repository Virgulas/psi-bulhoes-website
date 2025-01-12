import React, { useState } from 'react';
import { FiPhoneCall, FiMail, FiInstagram } from 'react-icons/fi'
import { TbWorldWww } from 'react-icons/tb'
import { TiLocationOutline } from 'react-icons/ti'
import aysiaPic from '../assets/aysia_pic_nob.png';
import aysiaLogo from '../assets/logo.png';
import qrCode from '../assets/qr_code.png';
import wppIcon from '../assets/WhatsApp_icon.png';

function About() {
const [activeTab, setActiveTab] = useState("contato"); 
const id_card = 'cartão';
const id_contact = 'contato'

function handleClick(event) {
    setActiveTab(event);
}
  
const contact = (
    <div className="card-body about-section__contact">
        <h5 className="card-title about-section__contact--title">Psicóloga Isabelle Bulhões</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary about-section__contact--subtitle">CRP 06/178365</h6>
        <p className="card-text about-section__contact--text">
        Psicóloga comportamental há 2 anos, guiando pessoas a se libertarem 
        e trilharem um caminho autêntico e mais significativo em suas vidas. 
        </p>
        <a href="https://api.whatsapp.com/send/?phone=5511959142000&text&type=phone_number&app_absent=0" target='_new' className="btn btn-primary about-section__contact--button">Agendar Consulta</a>
    </div>
)

const card = (
    <div className="about-section__card card-body">
        <div className={`about-section__card__side about-section__card__side--front`}>
        <div className='about-section__contact__card--logo'>
            <img src={aysiaLogo} className='about-section__contact__card--logo-img' alt="Logo do cartão"/>
            <h1 className='about-section__contact__card--logo-h1'>Isabelle Bulhões</h1>
            <h2 className='about-section__contact__card--logo-h2'>Psicologia</h2>
        </div>
        </div>
        <div className={`about-section__card__side about-section__card__side--back`}>
            <div className='about-section__card__side--back-header'>
                <h1 className='about-section__card__side--back-header__title'>Isabelle Bulhões</h1>
                <small className='about-section__card__side--back-header__small'>Psicologia para crianças, adolescentes e adultos - CRP 06/178365</small>
            </div>
            <div className='about-section__card__side--back-content'>
                <ul className='about-section__card__side--back-content__ul'>
                    <li>
                        <a href='tel:(11)95914-2000'>
                        <FiPhoneCall className='about-section__card__side--back-content__ul-icon' style={{marginRight: '15px'}} /> 
                        (11) 95914-2000
                        </a>
                    </li>
                    <li>
                        <a href='https://mail.google.com/mail/?view=cm&to=bulhoesisabelle@gmail.com' target='_new'>
                        <FiMail  className='about-section__card__side--back-content__ul-icon' style={{marginRight: '15px'}} /> 
                        bulhoesisabelle@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/psi.isabellebulhoes' target='_new'>
                        <FiInstagram className='about-section__card__side--back-content__ul-icon' style={{marginRight: '15px'}} /> 
                        @psi.isabellebulhoes
                        </a>
                    </li>
                    <li>
                        <a href='https://linktr.ee/psibulhoes' target='_new'>
                        <TbWorldWww className='about-section__card__side--back-content__ul-icon' style={{marginRight: '15px'}} />
                        www.linktr.ee/psibulhoes
                        </a>
                    </li>
                    <li>
                        <a href='https://www.google.com/maps?ll=-23.52173,-46.722944&z=17&t=m&hl=en&gl=US&mapclient=embed&q=R.+Guaip%C3%A1,+51+-+Lapa+S%C3%A3o+Paulo+-+SP+05089-001' target='_new'>
                        <TiLocationOutline className='about-section__card__side--back-content__ul-icon' style={{marginRight: '15px'}} /> 
                        Rua Guaipá 51 - Vila Leopoldina <br />
                        <span style={{paddingLeft: '40px'}}>São Paulo - SP</span>
                        </a>
                    </li>
                </ul>
                <img src={qrCode} className='about-section__card__side--back-content__img no-dragg' alt='Qr code' />
            </div>
        </div>
        </div>
)

    return (
        <div id='Psicologa' className="about-section">
            <h1 className='about-section__title'>Contato profissional</h1>
            <div className="about-section__container">
            <div className="card text-center about-section__card-control">
                <div className="card-header">
                    <ul className="nav nav-tabs gap-2 card-header-tabs">
                    <li className="nav-item">
                        <button className={`nav-link btn-custom--brown ${activeTab === id_contact? 'btn-custom--brown__active' : ''}`} onClick={(ev) => handleClick(ev.currentTarget.id)} id={id_contact} aria-current="true" href="#">Profissão</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link btn-custom--brown ${activeTab === id_card? 'btn-custom--brown__active' : ''}`} onClick={(ev) => handleClick(ev.currentTarget.id)} id={id_card} href="#">Cartão</button>
                    </li>
                    </ul>
                </div>
                {activeTab === id_contact? contact : card}
            </div>
                <a href='https://api.whatsapp.com/send/?phone=5511959142000&text&type=phone_number&app_absent=0' target='_new' className='wppIcon no-dragg'><img src={wppIcon} className='about-section__img-2 rounded no-dragg' alt="Icon wpp"/></a>
                <img src={aysiaPic} className='about-section__img rounded no-dragg' alt="Foto da profissional"/>
            </div>
        </div>
    )
}

export default About    