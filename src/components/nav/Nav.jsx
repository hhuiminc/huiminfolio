import React from 'react'
import {useState} from 'react'
import {BiHomeAlt, BiUser, BiBookmarkAlt} from 'react-icons/bi'
import { RiChat3Line } from "react-icons/ri";
import {CgBriefcase} from 'react-icons/cg'
import {FiPhone} from 'react-icons/fi'
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');



  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={"home " + (activeNav === '#' ? 'active' : '')}><BiHomeAlt/></a>
      {/* <a href="#about" onClick={() => setActiveNav('#about')} className={"about " + (activeNav === '#about' ? 'active' : '')}><BiUser/></a> */}
      {/* <a href="#experience" onClick={() => setActiveNav('#experience')} className={"experience " + (activeNav === '#experience' ? 'active' : '')}><CgBriefcase/></a> */}
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={"portfolio " + (activeNav === '#portfolio' ? 'active' : '')}><BiBookmarkAlt/></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={"testimonials " + (activeNav === '#testimonials' ? 'active' : '')}><RiChat3Line/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={"contact " + (activeNav === '#contact' ? 'active' : '')}><FiPhone/></a>
    </nav>
  )
}

export default Nav