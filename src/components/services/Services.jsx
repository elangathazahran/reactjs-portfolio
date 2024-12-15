import React from 'react';
import './services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Web Application Development',
    description: 'Build scalable and responsive web applications using HTML5, CSS3, JavaScript, and frameworks like React.js, Next.js, and Vue.js. Provide a smooth user experience with responsive design.'
  },
  {
    id: 2,
    image: Image2,
    title: 'E-commerce Development',
    description: 'Helping you create an e-commerce platform with payment gateway integration, product management, and user authentication, using React.js for the frontend and Laravel for the backend.'
  },
  {
    id: 3,
    image: Image3,
    title: 'Custom Web Solutions & API Development',
    description: 'Providing custom web solutions and API integrations, with experience in developing RESTful APIs and connecting third-party services using PHP, Laravel, React.js, and Vue.js.'
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt={title} className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;