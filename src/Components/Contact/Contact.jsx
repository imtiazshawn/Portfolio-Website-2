import React from 'react';
import './Contact.css';
import {motion} from 'framer-motion'

function Contact() {

    const transition = {type: 'spring', duration: '3'};
    const mobile = window.innerWidth <=768 ? true : false;

  return (
    <div className='Contact' id='contact'>


            {/* Left Side of Contact */}
        <div className="left-contact">
            <div className="contact-heading">
                <span>Contact</span>
            
            <div className="contact-ad">
                <motion.div
                    initial={{left: mobile ? "165px" : "265px"}}
                    whileInView={{left: '8px'}}
                    transition={{...transition, type: 'tween'}}
                 ></motion.div>
                <span>The service of Frontend development</span>
            </div>
            </div>
        </div>



            {/* Right Side of Contact */}
        <div className="right-contact">
            <input type="text"  placeholder='Enter Your Name'/>
            <input type="email" placeholder='Enter Your E-mail'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
            <button className="btn contact-btn">Contact</button>
        </div>
    </div>
  )
}

export default Contact;