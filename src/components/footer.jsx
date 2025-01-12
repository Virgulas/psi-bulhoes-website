import wppIcon from '../assets/WhatsApp_icon.png';
import instaIcon from '../assets/instagram.png';
import { Link, useHref } from 'react-router-dom';

function Footer() {
    return (
        <div id='Rodape' className="footer">
            <div className="footer__container">
                <div className="footer__address">
                    <h1 className="footer__address--title">
                        COMO CHEGAR NO CONSULTÓRIO?
                    </h1>
                    <h3 className="footer__address--description">
                        Os atendimentos presenciais acontecem no edifício 
                        Winner da Av. Imperatriz Leopoldina, 957 - Cj 1604.
                    </h3>
                    <iframe className='footer__address--map' title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.067039169538!2d-46.7312631!3d-23.530091099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8bc36aff625%3A0x8e658e0559c60a79!2sWinner%20Office%20-%20Av.%20Imperatriz%20Leopoldina%2C%20957%20-%20cj%201604%20-%20Vila%20Leopoldina%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005305-001!5e0!3m2!1spt-BR!2sbr!4v1722948845399!5m2!1spt-BR!2sbr" >
                    </iframe>
                </div>
                <div className="footer__discover">
                    <div className="footer__discover--explore">
                        <h1 className="footer__discover--explore-title">Explore</h1>
                        <a aria-current="page" href='/qualificacoes'>
                            <button className="footer__discover--explore-button">Formação profissional</button>
                        </a>
                        <Link aria-current="page" to={'/inicio#Psicologa'}>
                            <button className="footer__discover--explore-button">Sobre a psicóloga</button>
                        </Link>
                        <a href={useHref('/politica_de_privacidade')}>
                            <button className="footer__discover--explore-button">Política de privacidade</button>
                        </a>
                    </div>
                    <div className="footer__discover--media">
                        <h1 className="footer__discover--media-title">Redes sociais</h1>
                        <div className='footer__discover--media-link'>
                            <a className='footer__discover--media-link-1 no-dragg' href='https://www.instagram.com/psi.isabellebulhoes' target='_new'>
                                <img src={instaIcon} alt='' className='footer__discover--media-link-1__img no-dragg' />
                            </a>
                            <a className='footer__discover--media-link-2 no-dragg' href='https://api.whatsapp.com/send/?phone=5511959142000&text&type=phone_number&app_absent=0' target='_new'>
                                <img src={wppIcon} alt='' className='footer__discover--media-link-2__img no-dragg' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__workdays">
                    <h1 className='footer__workdays--title'>HORÁRIO DE FUNCIONAMENTO</h1>
                    <ul className='footer__workdays--container'>
                        <li className='footer__workdays--day'>
                            <span className='footer__workdays--day__week'>segunda:</span>
                            <span className='footer__workdays--day__hours'>09:00 - 21:00</span>
                        </li>
                        <li className='footer__workdays--day'>
                            <span className='footer__workdays--day__week'>terça:</span>
                            <span className='footer__workdays--day__hours'>09:00 - 21:00</span>
                        </li>
                        <li className='footer__workdays--day'>
                            <span className='footer__workdays--day__week'>quarta:</span>
                            <span className='footer__workdays--day__hours'>09:00 - 21:00</span>
                        </li>
                        <li className='footer__workdays--day'>
                            <span className='footer__workdays--day__week'>quinta:</span>
                            <span className='footer__workdays--day__hours'>09:00 - 21:00</span>
                        </li>
                        <li className='footer__workdays--day'>
                            <span className='footer__workdays--day__week'>sexta:</span>
                            <span className='footer__workdays--day__hours'>09:00 - 17:00</span>
                        </li>
                    </ul>
                </div>
            </div>
            <small className="footer__disclaimer">© 2023 Todos os direitos reservados à Psicóloga Isabelle Bulhões</small>
        </div>
    )
}

export default Footer