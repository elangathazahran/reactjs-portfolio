import React, { useState, useEffect, useRef } from "react";
import './about.css';
import Image from '../../assets/me-2.png';
import AboutBox from './AboutBox';

const About = () => {
  const [buttonText, setButtonText] = useState("Download CV");
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef(null);

  const handleDownload = () => {
    setButtonText("Downloading...");
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1PrEvZjwlex-7OicFummaSZ57V7bVMPyu";
    link.setAttribute("download", "Elang_Atha_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setButtonText("Download CV"), 3000);
  };

  useEffect(() => {
    if (!skillsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.disconnect();
    };
  }, [skillsRef]);

  const skills = [
    { name: "HTML 5", value: 90, class: "html" },
    { name: "CSS 3", value: 85, class: "css" },
    { name: "PHP", value: 75, class: "php" },
    { name: "JavaScript", value: 80, class: "js" },
  ];

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="Profile" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              As a Fullstack Web Developer, I develop scalable web applications with HTML5, CSS3, Bootstrap 5, JavaScript, PHP, Laravel, MySQL, React.js. I enjoy working in a team and continuing to learn to keep up with technology.
            </p>
            <button className="btn" onClick={handleDownload}>{buttonText}</button>
          </div>

          <div className="about__skills grid" ref={skillsRef}>
            {skills.map((skill, index) => (
              <div className="skills__data" key={index}>
                <div className="skills__titles">
                  <h3 className="skills__name">{skill.name}</h3>
                  <span className="skills__number">
                    {skillsVisible ? `${skill.value}%` : "0%"}
                  </span>
                </div>
                <div className="skills__bar">
                  <span
                    className={`skills__percentage ${skill.class}`}
                    style={{ width: skillsVisible ? `${skill.value}%` : "0%" }}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
