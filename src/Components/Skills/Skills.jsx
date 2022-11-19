import React from 'react';
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import Tailwind from '../../assets/tailwind.png'
import Bootstrap from '../../assets/bootstrap.png'
import JavaScript from '../../assets/javascript.png'
import ReactImg from '../../assets/react.png'
import Github from '../../assets/github.png'
import Firebase from '../../assets/firebase.png'
import './Skills.css';

function Skills() {
  return (
    <div className='Skills' id='skills'>
        <div className="skills-heading">
            <div>
                <h1>Skills</h1>
                <p>These are the technologies I've worked with</p>
            </div>
        </div>
        <div className="skills-items">
            <div className="s-items">
                <img src={HTML} alt="" />
                <p>HTML</p>
            </div>
            <div className="s-items">
                <img src={CSS} alt="" />
                <p>CSS</p>
            </div>
            <div className="s-items">
                <img src={Tailwind} alt="" />
                <p>TAILWIND CSS</p>
            </div>
            <div className="s-items">
                <img src={Bootstrap} alt="" />
                <p>BOOTSTRAP</p>
            </div>
            <div className="s-items">
                <img src={JavaScript} alt="" />
                <p>JAVASCRIPT</p>
            </div>
            <div className="s-items">
                <img src={ReactImg} alt="" />
                <p>REACT JS</p>
            </div>
            <div className="s-items">
                <img src={Github} alt="" />
                <p>GITHUB</p>
            </div>
            <div className="s-items">
                <img src={Firebase} alt="" />
                <p>FIREBASE</p>
            </div>
        </div>
    </div>
  )
}

export default Skills;