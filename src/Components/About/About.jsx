import React from 'react';
import './About.css';
import Card from '../Card/Card';
import Resume from '../../assets/resume.pdf'
import {motion} from 'framer-motion';


function About() {

    const transition = {duration : 1, type: 'spring'}

  return (
    <div className='About' id='about'>

            {/* Left side */}
        <div className="awesome">
            <span>About Me &</span>
            <span>Service</span>
            <span>Hi. I'm Shawn, nice to meet you. Please take a look around.
            I am passionate about building excellent software that improves  
            the lives of those around me. I specialize in creating software for  
            clients ranging from individuals and small-businesses all the way  
            to large enterprise corporations. What would you do if you had a  
            software expert available at your fingertips?. I’m specializing in 
            building (and occasionally designing) exceptional digital experiences.  
            Currently, I'm focused on building responsive web applications.</span>
            <a href={Resume} download>
            <button className="btn a-btn">Download CV</button>
            </a>
        </div>

            {/* Right Side */}
        <div className="cards">
            <motion.div
                whileInView={{left: '30rem'}}
                initial={{left: '25rem'}}
                transition={transition}
                style={{left: "22rem"}}>
                <Card 
                    heading = {'UI/UX Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe XD"}
                />
            </motion.div>
               <div style={{ top: '12rem', left: '2rem'}}>
                    <Card 
                            heading = {'Frontend Developer'}
                            detail = {"HTML, CSS, JavaScript, React JS"}
                        />
               </div>
               <motion.div 
                    whileInView={{left: '24rem'}}
                    initial={{left: '25rem'}}
                    transition={transition}
                    style={{ top: '19rem', left: '18rem'}}>
                    <Card 
                            heading = {'Basic Backend'}
                            detail = {"Node JS, Express JS & MongoDB"}
                        />
               </motion.div>
        </div>
    </div>
  )
}

export default About;