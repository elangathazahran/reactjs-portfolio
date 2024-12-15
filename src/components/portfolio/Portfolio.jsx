import React, { useState } from 'react';
import './portfolio.css';
import { projectsData as Datas } from './Data';

const Portfolio = () => {
  const [items, setItems] = useState(Datas);
  const filterItem = (categoryItem) => {
    const updatedItems = Datas.filter((curElem) => {
      return curElem.category === categoryItem;
    })
    setItems(updatedItems)
  }

  return (
    <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__filters">
        <div className="work__item" onClick={() => setItems(Datas) }>All</div>
        <div className="work__item" onClick={() => filterItem('Websites') }>Websites</div>
        <div className="work__item" onClick={() => filterItem('Certifications')}>Certifications</div>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumnail">
                <img src={image} alt={title} className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href="#" className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
