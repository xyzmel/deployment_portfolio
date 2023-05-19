import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import  ParticlesComponent from  "../Particles/config"

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParticles(true);
    }, 3000); // 4000ms = 5s

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="particles-container">
      {showParticles && <ParticlesComponent id="aboutParticles" />}
      </div>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for freelance work or a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quite confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
          I'm a 21-year-old tech enthusiast hailing from the beautiful country of Norway. 
          Ever since I was a child, I have been intrigued by how things work, which quickly developed into a fascination with the world of technology. 
          The ever-evolving nature of the tech industry keeps me constantly engaged and eager to learn more. 
          Over the years, I have developed a deep understanding and proficiency in a variety of tech-related areas. 
          I am passionate about leveraging this knowledge to solve complex problems and create innovative solutions that can improve the way we live and work. 
          The journey so far has been exciting, and I look forward to what the future holds in this ever-evolving landscape.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About