import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import aysiaLogo from '../assets/aysia_logo.png';
import { useLocation } from 'react-router-dom';

function Navb() {
  const tabsTitles = [{name:"Página Inicial", link_to: "inicio"}, {name:"Qualificações", link_to: "qualificacoes"}, {name:"Atendimento Online", link_to: "atendimento_online"}, {name:"Atendimento Presencial", link_to: "atendimento_presencial"}];
  let currentUrl = window.location.pathname;
  if (currentUrl === "/") {
    currentUrl = "/inicio"
  }
  const currentTab = tabsTitles.filter(tab => tab.link_to === currentUrl.slice(1))
  const [activeTab, setActiveTab] = useState(currentTab[0]?.name || "Página Inicial"); 
  const location = useLocation()

  useEffect(() => {
    let locationPath = location.pathname.slice(1)

    if (locationPath === "politica_de_privacidade") {
      setActiveTab('None')
    }

    let _URL = window.location.href
    let matchULR = _URL.match(/#/);
    if(matchULR) {
      const id = _URL.slice(matchULR.index + 1);
      if (id.length > 0) {
        const element = document.getElementById(id)
        element.scrollIntoView({ behavior: "smooth" })
      }
    }

    let currentPath = tabsTitles.filter(tab => tab.link_to === locationPath)
    
    if (currentPath[0]?.name && currentPath[0].name !== activeTab) {
      setActiveTab(currentPath[0].name || "Página Inicial")
    }
  }, [location, activeTab, tabsTitles])
  
  function handleClick(event) {
    if (event === "Psicóloga Comportamental") {
      event = "Página Inicial";
    }
    setActiveTab(event);
  }
  
  const tabs = tabsTitles.map(tab => {
    return (<a onClick={(ev) => handleClick(ev.currentTarget.textContent)} key={tab.name + tab.link_to} className={`nav-link nav--hyperlink${activeTab === tab.name? "_active" : ""}`} aria-current="page" href={tab.link_to}>{tab.name}</a>)
  })

  return (
  <nav className="nav navbar nav-min fixed-top navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link onClick={(ev) => handleClick(ev.currentTarget.textContent)} className="navbar-brand nav--logo" to={"/"}>
      <img src={aysiaLogo} alt="Bootstrap" height="30" />
        <span className='nav--logo-text'>Psicóloga Comportamental</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="nav_con collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="nav_li navbar-nav">
          {tabs}
        </div>
      </div>
    </div>
  </nav>
  );
}

export default Navb;
