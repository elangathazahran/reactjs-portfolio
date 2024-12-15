import React, { useState } from 'react'
import './sidebar.css'
import Logo from '../../assets/logo.svg'

const Sidebar = () => {

  const [toogle, showMenu] = useState(false)

  return (
    <>
      <aside className={ toogle ? 'aside show-menu' : 'aside' }>
        <a href="#home" className='nav__logo'>
          ELS
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">

              <li className="nav__item">
                <a href="#home" className='nav__link'>
                  <i className='icon-home'></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className='nav__link'>
                  <i className='icon-user-following'></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className='nav__link'>
                  <i className='icon-briefcase'></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className='nav__link'>
                  <i className='icon-graduation'></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className='nav__link'>
                  <i className='icon-layers'></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className='nav__link'>
                  <i className='icon-bubble'></i>
                </a>
              </li>

            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2024 - 2025</span>
        </div>
      </aside>
      <div className={ toogle ? "nav__toogle nav__toogle-open" : "nav__toogle" } onClick={() => showMenu(!toogle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  )
}

export default Sidebar
