import React from 'react'
import './resume.css'
import { Datas } from './Data'
import Card from './Card'

const Resume = () => {
  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experiece</h2>
      <div className="resume__container grid">
        <div className="timeline grid">
          {Datas.map((val, index) => {
            if (val.category === 'education') {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}

        </div>

        <div className="timeline grid">
          {Datas.map((val, index) => {
            if (val.category === 'experience') {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Resume
