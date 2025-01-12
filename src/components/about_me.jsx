import React, { useState, useRef, useEffect } from 'react';
import { CiPlay1, CiPause1 } from 'react-icons/ci';
import { ImVolumeMedium } from 'react-icons/im'
import Slider1 from '../assets/slider_1.png';
import Slider2 from '../assets/slider_2.png';
import Audio1 from '../assets/aysia_1.mp3';
import Audio2 from '../assets/aysia_2.mp3';

function AboutMe() {
    const [currentSlider, setCurrentSlider] = useState(false); 
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null); 
  
    useEffect(() => {
        let toggleP = () => {
            setIsPlaying(!isPlaying);
          }

        audioRef.current.addEventListener('ended', toggleP);

        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
        return () => {
            audioRef.current?.removeEventListener('ended', toggleP);
        };
      }, [isPlaying]);

    useEffect(() => {
        if (isPlaying) {
            setIsPlaying(false)
        }
    }, [currentSlider]);

    const disableButton = () => {
        setButtonDisabled(true);

        setTimeout(() => {
          setButtonDisabled(false);
        }, 600); 
      };

    function handleClick(event) {
        if (!isButtonDisabled) {
            setCurrentSlider(event);
            disableButton()
        }
    }

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
      };

    const audio_1 = ( 
    <div className='aboutMe__audioPlayer--container'>
        <audio ref={audioRef} src={ currentSlider? Audio2 : Audio1} className='aboutMe__audioPlayer' controls autoPlay={false} />
        <ImVolumeMedium className='aboutMe__audioPlayer--button-2' size={30} />
        <button onClick={togglePlay} className='aboutMe__audioPlayer--button'>
        {isPlaying ? <CiPause1 size={30} /> : <CiPlay1 size={30} />}
        </button>
    </div>
    );

    const t1 = (
        <p className='aboutMe__text aboutMe__text-anim-1'>
            Acredito no poder da <b>autenticidade para transformar</b> vidas, 
            cada indivíduo é único, com suas próprias experiências, desafios e aspirações. 
            Minha abordagem terapêutica é pautada inicialmente na <b>escuta empática e 
            no respeito incondicional pela individualidade de cada cliente</b>. 
            Através de um ambiente acolhedor e confidencial, exploraremos os pensamentos, 
            sentimentos e padrões comportamentais que podem estar limitando seu crescimento e autenticidade.
            <br /> <br />
            Quando nos permitimos ser verdadeiros com nós mesmos, criamos espaço para o <b>florescimento pessoal e a liberdade emocional</b>. Durante nossas sessões, você será 
            incentivado a explorar quem realmente é, cultivando uma <b>conexão mais profunda</b> consigo mesmo e com os outros. 
        </p>
    )

    const t2 = (
        <p className='aboutMe__text aboutMe__text-anim-2'>
           Meu objetivo é ajudá-lo a superar desafios, fortalecer sua 
           resiliência emocional e desenvolver habilidades para enfrentar as 
           dificuldades da vida de forma mais assertiva. Juntos, vamos trabalhar
            para que você se sinta capacitado a <b>tomar decisões alinhadas com seus valores e 
            objetivos</b>, vivendo uma vida autêntica e gratificante.
            <br /> <br />
            Se você está pronto para iniciar essa 
            jornada de autodescoberta, estou aqui para ajudar. <b>Entre em contato para agendar uma consulta experimental
            gratuita e dar o primeiro passo em direção a uma vida mais 
            autêntica e libertadora.</b>
        </p>
    )

    return (
        <div id='SobreMim' className="aboutMe">
            <h1 className='aboutMe__title'>Sobre mim</h1>
            <div className='aboutMe__container'>
                <div id="carouselExampleIndicators" className="carousel slide aboutMe__carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active aboutMe__carousel--indicator" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className='aboutMe__carousel--indicator' aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Slider1} className="aboutMe__carousel--img" alt="Foto da profissional em uma cafeteria" />
                        </div>
                        <div className="carousel-item">
                            <img src={Slider2} className="aboutMe__carousel--img" alt="Foto da profissional com o marido e dos gatos" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" onClick={() => handleClick(!currentSlider)} data-bs-slide="prev">
                        <span className="carousel-control-prev-icon aboutMe__carousel--icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" onClick={() => handleClick(!currentSlider)} data-bs-slide="next">
                        <span className="carousel-control-next-icon aboutMe__carousel--icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className='aboutMe__text-container'>
                    {currentSlider? t2 : t1}
                </div>
            </div>
            {audio_1}
        </div>
    )
}

export default AboutMe