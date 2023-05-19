import { Link } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from 'react';
import Loader from "react-loaders";
import computer from "../../assets/images/computer.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFigma,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ["j", "e", "t", "i", "l"];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r"
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoS} alt="Web Developer Kjetil Melby" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer / Business Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="image-wrapper">
        <div className="icon-wrapper">
  <FontAwesomeIcon icon={faFigma} style={{ color: "#F24E1E" }} />
  <FontAwesomeIcon icon={faCss3} style={{ color: "#1572B6" }} />
  <FontAwesomeIcon icon={faGitAlt} style={{ color: "#F05032" }} />
  <FontAwesomeIcon icon={faHtml5} style={{ color: "#E34F26" }} />
  <FontAwesomeIcon icon={faJsSquare} style={{ color: "#F7DF1E" }} />
  <FontAwesomeIcon icon={faReact} style={{ color: "#61DAFB" }} />
</div>

        </div>
        <img src={computer} alt="Computer" className="computer" />
      </div>
      
      <Loader type="pacman" />
    </>
  );
}

export default Home;
