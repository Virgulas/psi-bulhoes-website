import React, { useState, useEffect } from 'react';
import { BiPlus, BiMinus } from 'react-icons/bi'
import Andreia from '../assets/b_3.png'
import Felipe from '../assets/b_2.png'
import Jonathan from '../assets/b_1.png'

function Reviews() {
    const [textToggle, toggleText] = useState({
        jonathan: false,
        andreia: false,
        felipe: false
    });
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const txt_felipe = "ou satisfatória, trabalhou comigo como quem se importa e quer ajudar. O que faz a diferença e assim consegui recuperar a confiança, disposição e bons hábitos que havia perdido, especialmente por ser alguém que entendia as coisas que sempre me pesavam, hoje consigo recomendar ela a meus amigos com confiança de que ela pode ajudar."
    const txt_jonathan = "a qual foi capaz de criar um ambiente seguro, respeitoso e confidencial, onde eu pude me sentir a vontade para compartilhar meus pensamentos e sentimentos com ela. Tenho absoluta confiança que a Isa seguirá ajudando a melhorar a qualidade de vida de muitos pacientes assim como melhorou substancialmente a minha."
    const txt_andreia =  "e superar um TOC. Cada sessão foi uma oportunidade de crescimento pessoal e autoconhecimento. Hoje, me sinto tão mais forte, resilente e alinhada com os meus valores. Sou grata por ter encontrado  uma profissional tão empática e comprometida em me auxiliar a caminhar em direção a uma vida melhor."

    function handleClick(event) {
        toggleText((oldValue) => ({...oldValue, [event]: !oldValue[event]}))
    }

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);

        return () => {
          window.removeEventListener('resize', updateWindowWidth);
        };
      }, []);

    const isMobile = windowWidth <= 768;

    const review_1 = (
        <div className="reviews__review">
            <img src={Felipe} alt='Ícone genérico de homem' className="reviews__review--image no-dragg" />
            <h1 className="reviews__review--title">Felipe</h1>
            <p className="reviews__review--text">
            Sempre fui cético sobre psicólogos, mas
            felizmente a Isa fez valer minha confiança,
            me ajudou a me recuperar de um episódio muito difícil
            e o fez de uma maneira mais do que apenas profissional{textToggle['felipe'] || isMobile? txt_felipe : '...'}
            </p>
            {!isMobile && <button className='reviews__review--button' id='felipe' onClick={(ev) => handleClick(ev.currentTarget.id)}>{textToggle['felipe']? <BiMinus size={20} />: <BiPlus size={20} />}</button>}
        </div>
    );
    
    const review_2 = (
        <div className="reviews__review">
            <img src={Jonathan} alt='Ícone genérico de homem' className="reviews__review--image no-dragg" />
            <h1 className="reviews__review--title">Jonathan</h1>
            <p className="reviews__review--text">
            Serei eternamente grato a Isa por me ajudar a lidar com
            minha angústia e ansiedade. Ela não é apenas uma profissional competente,
            com uma abordagem clara e eficaz, mas também uma pessoa doce e empática{textToggle['jonathan'] || isMobile? txt_jonathan : '...'}
            </p>
            {!isMobile && <button className='reviews__review--button' id='jonathan' onClick={(ev) => handleClick(ev.currentTarget.id)}>{textToggle['jonathan']? <BiMinus size={20} />: <BiPlus size={20} />}</button>}
        </div>
    );
    
    const review_3 = (
        <div className="reviews__review">
            <img src={Andreia} alt='Ícone genérico de mulher' className="reviews__review--image no-dragg" />
            <h1 className="reviews__review--title">Andreia</h1>
            <p className="reviews__review--text">
            Agradeço de coração a Isa por seu apoio e dedicação,
            desde o primeiro contato, ela me explicou de modo claro
            como seu trabalho funcionava e como poderia me ajudar. Isa me ajudou a resgatar minha confiança{textToggle['andreia'] || isMobile? txt_andreia : '...'}
            </p>
            {!isMobile && <button className='reviews__review--button' id='andreia' onClick={(ev) => handleClick(ev.currentTarget.id)}>{textToggle['andreia']? <BiMinus size={20} />: <BiPlus size={20} />}</button>}
        </div>
    );

    const reviewsDesktop = (
        <div className="reviews__container">
            {review_1}
            {review_2}
            {review_3}
        </div>
    );

    const reviewsMobile = (
        <div id="reviewsMobile" className="carousel slide" data-bs-touch="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#reviewsMobile" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#reviewsMobile" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#reviewsMobile" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                {review_1}
                </div>
                <div className="carousel-item">
                {review_2}
                </div>
                <div className="carousel-item">
                {review_3}
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#reviewsMobile" data-bs-slide="prev">
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#reviewsMobile" data-bs-slide="next">
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )

    return (
    <div id='Depoimentos' className='reviews__bg'>
        <div className='reviews'>
            <h1 className='reviews__title'>Depoimentos</h1>
            {isMobile? reviewsMobile : reviewsDesktop}
        </div>
    </div>
    )
}

export default Reviews