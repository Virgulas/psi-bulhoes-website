import Child from '../assets/child.jpg';
import Online from '../assets/online.jpg';
import Presencial from '../assets/presencial.jpg';
import Teenager from '../assets/teenager.jpg';

function More() {
    return (
    <div className='more__out'>
        <h1 className='more__title'>Descubra mais!</h1>
        <div className="more">
            <div className="more__container">
                <div className="more__card">
                    <img src={Presencial} alt='' className="more__card--img" />
                    <div className="more__card--content">
                        <h1 className="more__card--content-title">Terapia Presencial</h1>
                        <p className="more__card--content-text">
                        As consultas presenciais acontecem em meu consultório, localizado em 
                        São Paulo capital, na rua Guaipá. As sessões são 
                        agendadas com duração média de 50 minutos.
                        </p>
                        <a aria-current="page" href={'/atendimento_presencial'}>
                            <button className="more__card--content-button btn-custom">Saiba Mais</button>
                        </a>
                    </div>
                </div>
                <div className="more__card">
                    <img src={Online} alt='' className="more__card--img" />
                    <div className="more__card--content">
                        <h1 className="more__card--content-title">Terapia Online</h1>
                        <p className="more__card--content-text">
                        A terapia psicológica online é uma modalidade 
                        de atendimento autorizado pelo conselho federal de 
                        psicologia. As sessões são agendadas e duram em torno 
                        de 50 minutos, visa atender adolescentes e adultos.
                        </p>
                        <a aria-current="page" href={'/atendimento_online'}>
                            <button className="more__card--content-button btn-custom">Saiba Mais</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="more__container">
                <div className="more__card">
                    <img src={Child} alt='' className="more__card--img" />
                    <div className="more__card--content">
                        <h1 className="more__card--content-title">Terapia Infantil</h1>
                        <p className="more__card--content-text">
                        A psicoterapia realizada com crianças, 
                        só podem ser realizadas pela modalidade presencial, 
                        no consultório localizado em São Paulo capital, 
                        na rua Guaipá. As sessões são agendadas com duração 
                        média de 50 minutos.</p>
                        <a aria-current="page" href={'/atendimento_presencial#terapiaInfantil'}>
                        <button className="more__card--content-button btn-custom">Saiba Mais</button>
                        </a>
                    </div>
                </div>
                <div className="more__card">
                    <img src={Teenager} alt='' className="more__card--img" />
                    <div className="more__card--content">
                        <h1 className="more__card--content-title">Terapia com Adolescentes</h1>
                        <p className="more__card--content-text">
                        Consultas com adolescentes podem ser realizada online
                         ou no consultório localizado em São Paulo capital, 
                        na rua Guaipá. As sessões são agendadas com duração 
                        média de 50 minutos.
                        </p>
                        <a aria-current="page" href={'/atendimento_presencial#terapiaAdolescente'}>
                        <button className="more__card--content-button btn-custom">Saiba Mais</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default More