import React, { useState, useEffect } from 'react';
import './home.css';
import Avatar from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={`home ${isMobile ? 'container' : ''}`} id="home">
      <div className="intro">
        <img src={Avatar} alt="" className="home__img" />
        <h1 className="home__name">Elang Atha Zahran</h1>

        <span className="home__education">
          <span>I'm a, </span>
          <TypeAnimation
            sequence={[
              "Fullstack Web Developer",
              2000,
              "UI/UX Designer",
              2000,
              "Web Developer",
              2000,
            ]}
            wrapper="span"
            speed={60}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </span>

        <HeaderSocials />

        <a href="https://wa.me/6287788612930" target="_blank" rel="noopener noreferrer" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
