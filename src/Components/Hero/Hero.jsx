import React from 'react';
import './Hero.css';
import portImage from '../../assets/imtiazshawn.jfif';
import Typed from 'react-typed';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <div className='Hero' id='home'>
        <div className="wrapper">
                <img src={portImage} alt="" />
                <div className="typed">
                <h1>I'm</h1>
                <span><Typed strings={['Imtiaz Shawn', 'A React JS Developer']} typeSpeed={100} backSpeed={30} loop/></span>
                </div>
        <div className="social-icons">
          <a href="https://github.com/imtiazshawn"
          target={'_blank'}>
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/imtiazshawn/"
          target={'_blank'}>
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/ImtiazShawn01"
          target={'_blank'}>
            <i class="fa-brands fa-twitter"></i>
          </a>
            <i class="fa-solid fa-envelope"></i>
        </div>
        <Link to='contact' smooth={true} duration={1200} className="btn hero-btn">Contact Me</Link>
        </div>
    </div>
  )
}

export default Hero;