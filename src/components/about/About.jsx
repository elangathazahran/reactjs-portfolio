import React from 'react'
import './about.css'
import Image from '../../assets/avatar-2.svg'
import AboutBox from './AboutBox'

const About = () => {
  return (
    <section className="about container section" id="about">

      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              As a Fullstack Web Developer, I develop scalable web applications with HTML5, CSS3, Bootstrap 5, JavaScript, TypeScript, PHP, Laravel, MySql , React.js, Next.js, and Vue.js. I enjoy working in a team and continuing to learn to keep up with technology.
            </p>
            <a href="/" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            
            {/* HTML */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML 5</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage html"></span>
              </div>
            </div>

            {/* CSS 3 */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">CSS 3</h3>
                <span className="skills__number">85%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage css"></span>
              </div>
            </div>

            {/* PHP */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">PHP</h3>
                <span className="skills__number">75%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage php"></span>
              </div>
            </div>

            {/* Javascript */}
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage js"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox />

    </section>
  )
}

export default About
