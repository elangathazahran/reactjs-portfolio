import React from 'react'

const HeaderSocials = () => {
  return (
    <div>
      <div className="home__socials">
        
        <a href="https://www.instagram.com/athazahrane/" className="home__social-link instagram" target='_blank'>
            <i className='fa-brands not__hover fa-instagram'></i>
            <i className='fa-brands hover fa-instagram'></i>
        </a>

        <a href="https://github.com/elangathazahran" className="home__social-link github" target='_blank'>
            <i className='fa-brands not__hover fa-github'></i>
            <i className='fa-brands hover fa-github'></i>
        </a>

        <a href="https://www.tiktok.com/@zaayeen_?_t=8sChT4YVjrF&_r=1" className="home__social-link tiktok" target='_blank'>
            <i className='fa-brands not__hover fa-tiktok'></i>
            <i className='fa-brands hover fa-tiktok'></i>
        </a>

        <a href="https://www.linkedin.com/in/elang-atha-zahran-100459220/" className="home__social-link linkedin" target='_blank'>
            <i className='fa-brands not__hover fa-linkedin'></i>
            <i className='fa-brands hover fa-linkedin'></i>
        </a>

      </div>
    </div>
  )
}

export default HeaderSocials
