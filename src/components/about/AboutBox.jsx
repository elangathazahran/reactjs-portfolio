import React from 'react'

const AboutBox = () => {
  return (
    <div className="about__boxes grid">

        {/* projects */}
        <div className="about__box">
            <i className="about__icon icon-fire"></i>
            <div>
                <h3 className="about__title">100+</h3>
                <span className="about__subtitle">Projects</span>
            </div>
        </div>

        {/* coffe */}
        <div className="about__box">
            <i className="about__icon icon-cup"></i>
            <div>
                <h3 className="about__title">398</h3>
                <span className="about__subtitle">Cup of coffe</span>
            </div>
        </div>

        {/* client */}
        <div className="about__box">
            <i className="about__icon icon-people"></i>
            <div>
                <h3 className="about__title">71~</h3>
                <span className="about__subtitle">Users</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-clock"></i>
            <div>
                <h3 className="about__title">2931</h3>
                <span className="about__subtitle">Time works</span>
            </div>
        </div>

    </div>
  )
}

export default AboutBox
