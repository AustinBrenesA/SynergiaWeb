import React, { useState } from "react";
import "../Styles/navbar.css";
import logo from "../assets/LogoHorizontal_color.svg";

function Navbar() {
  // Las constantes y los if/else son para que sea responsive
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        <img src={logo} alt="Synergia IT" className="logo"/>
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Inicio
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Nosotros
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Servicios
          </a>
        </li>        
        <button type="button" class="boton_contacto">
          Contacto
          <span>
            <i class="fas fa-phone-alt"></i>
          </span>
        </button>
        
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;