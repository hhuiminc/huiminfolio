import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section id="footer" className="ignore">
      <small>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </small>



      <div className="footer__copyright">
        <small>&copy; <a href="#" className="footer__logo">HUIMINFOLIO</a> &#124; October 2022 
          {/* <a href="https://www.flaticon.com/free-icons/think" title="think icons">Flaticon Icon</a> */}
          </small>
      </div>
      

    </section>
  )
}

export default Footer