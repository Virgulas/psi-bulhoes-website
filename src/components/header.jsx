import background from "../assets/background.mp4";
import { TfiLocationPin } from "react-icons/tfi";
import { IoIosPeople } from "react-icons/io"
import { CgGirl } from 'react-icons/cg'

function Header() {
    return (
      <div className="header">
        <div className="header-container">
          <div className="header__buttons">
            <div className="header__buttons-container">
              <a href="#SobreMim" className="header__buttons--1 header__buttons--icon">
                <CgGirl />
              </a>
              <p className="header__buttons--text">Sobre mim</p>
            </div>
            <div className="header__buttons-container">
              <a href="#Depoimentos" className="header__buttons--2 header__buttons--icon">
                <IoIosPeople />
              </a>
              <p className="header__buttons--text">Depoimentos</p>
            </div>
            <div className="header__buttons-container">
              <a href="#Rodape" className="header__buttons--3 header__buttons--icon">
                <TfiLocationPin />
              </a>
              <p className="header__buttons--text">Localização</p>
            </div>
          </div>
          <div className="header__text">
            <p>
              <span className="header__text--1 text-animation-fix">
              Ajudando você 
              </span>
              <span className="header__text--2 text-animation-fix">
              a viver 
              </span>
              <span className="header__text--3 text-animation-fix">
              com autenticidade e clareza
              </span>
            </p>
          </div>
          <div className="bg-video">
            <div className="bg-overlay" />
            <video
              src={background}
              className="bg-video__content"
              type="video/mp4"
              autoPlay
              loop
              muted
            />
          </div>
        </div>
        <div className="shadow-container">
            <div className="header-shadow"></div>
            <div className="header-shadow-2"></div>
            {//<div className="header-brand">#Resiliência #Equilíbrio #Aceitação</div>
            //<div className="header-brand-2">#Paz #Vida #Progresso</div>
            }
        </div>
      </div>
    );
  }
  
  export default Header;