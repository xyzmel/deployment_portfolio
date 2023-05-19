import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="melby" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact={true} activeClassName="active" to="/" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeClassName="active" className="about-link" to="/about" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeClassName="active" className="portfolio-link" to="/portfolio" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink activeClassName="active" className="contact-link" to="/contact" onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        
      </nav>
      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/kjetil-melby-7a47921b1/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href="https://www.facebook.com/kjetil.melby.7/">
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href="https://www.instagram.com/kjetilmelby/">
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;
