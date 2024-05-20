import React, { useState, useEffect } from 'react'
import SliderData from './Sliderdata'
import './Slider.css' // Import the custom CSS file

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000) // Change slide every 5 seconds

      return () => clearInterval(interval)
    }
  }, [currentSlide, isHovered])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === SliderData.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SliderData.length - 1 : prev - 1))
  }

  return (
    <>
      <div
        className="slider "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="div">
          <svg
            aria-hidden="true"
            className=" arrow-left e-font-icon-svg e-eicon-chevron-left w-[25px] h-[25px] cursor-pointer"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            onClick={prevSlide}
          >
            <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z"></path>
          </svg>
        </div>

        <div>
          {SliderData.map((slide, index) => (
            <div
              className={index === currentSlide ? 'slide current' : 'slide'}
              key={index}
            >
              {index === currentSlide && (
                <>
                  <img src={slide.img} alt="bg-pic" className="image" />
                  <div className="content">
                    <h2 className=" font-black text-[27px]">{slide.heading}</h2>
                    <p className="slide-description">{slide.description}</p>
                    <button className=" border-[2px] p-2 border-[white] hover:cursor-pointer">
                      Explore More Properties
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="indicators">
            {SliderData.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? 'current-indicator'
                    : 'current-indicator inactive-indicator'
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        <div className="div">
          <svg
            aria-hidden="true"
            className=" arrow-right e-font-icon-svg e-eicon-chevron-right w-[25px] h-[25px] cursor-pointer"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            onClick={nextSlide}
          >
            <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z"></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default Slider
