import React, {useState} from 'react';
import './Work.css';
import {IoIosArrowDropleftCircle} from 'react-icons/io';
import {IoIosArrowDroprightCircle} from 'react-icons/io';
import { ApiSlider } from '../../API/SliderApi';

function Work() {
    
    const [slides] = useState(ApiSlider)
    const [activeSlide, setActiveSlide] = useState(0)

    const nextSlide =()=>{
        if(activeSlide === slides.length - 1){
            setActiveSlide(0)
        }
        else{
            setActiveSlide(activeSlide + 1)
        }
    }
    const prevSlide =()=>{
        if(activeSlide === 0){
            setActiveSlide(slides.length - 1)
        }
        else{
            setActiveSlide(activeSlide - 1)
        }
    }

    // Mobile Responsive
    const mobile = window.innerWidth <=768 ? true : false;

  return (
    <div className='Work' id='work'>


            {/* Heading */}
        <div className="work-heading">
            <span>My Work</span>
            <span>Check out some of my recent work</span>
        </div>


            {/* Slide */}

        <div className="slide">
            
                {/* Left Arrow */}
            <div className="leftArrow">
            <IoIosArrowDropleftCircle 
                className='arrow'
                style={{fontSize: mobile ? "30px" : "40px", marginRight: mobile? "2px" : "12px", cursor: "pointer", color: "var(--secondary)"}}
                onClick={prevSlide}
            />
            </div>


                {/* Slides */}
            {slides.map((slide, index)=>{
            if(index === activeSlide){
                return(
                    <div className='slider'>
                  <div className="slide-item">
                    <div className="forImage">
                        <img src={slide.src} alt="Project_Image" />
                     </div>
                        <div className="desc">
                            <h2>{slide.h2}</h2>
                            <p>{slide.p}</p>
                            <a 
                                href={slide.href} target={'blank'}
                                className='btn demo-btn'>Demo</a>
                      </div>
                     </div>
                  </div>
                )
            }
        })}
            

                {/* Right Arrow */}
            <div className="rightArrow">
            <IoIosArrowDroprightCircle 
                style={{fontSize: mobile ? "30px" : "40px", marginLeft: mobile? "2px" : "12px", cursor: "pointer", color: "var(--secondary)"}}
                onClick={nextSlide}
                />
            </div>
            </div>
    </div>
  )
}

export default Work;