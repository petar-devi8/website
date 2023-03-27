import React, { useState } from 'react'
import hero1 from "./Images/hero1.webp"
import hero2 from "./Images/hero2.webp"
import hero3 from "./Images/hero3.webp"
import 'react-slideshow-image/dist/styles.css'
import classNames from './utils/classNames'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'


const Hero = ({ containerRef }) => {

  const slides = [
    {
      url: hero1,
    },
    {
      url: hero2,
    },
    {
      url: hero3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <main ref={containerRef} id="hero" className='relative h-screen w-screen overflow-hidden '>

      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full  bg-center bg-cover duration-500 brightness-75'
      ></div>

      {/* <div classNameName='absolute inset-0 w-max flex -z-10 '>
      <img classNameName='h-screen w-screen object-cover brightness-[0.6]' src={hero1} alt="" />
    </div>
    <div classNameName='absolute inset-0 w-max flex -z-10'>
      <img classNameName='h-screen w-screen object-cover brightness-[0.6]' src={hero2} alt="" />
    </div>
    <div classNameName='absolute inset-0 w-max flex -z-10'>
      <img classNameName='h-screen w-screen object-cover brightness-[0.6]' src={hero3} alt="" />
    </div> */}



      <div className="absolute max-w-6xl mx-auto sm:top-1/2 md:inset-x-0 sm:-translate-y-1/2 px-4 lg:px-0 pt-72 top-1/2 -translate-y-2/3 ">

        <h3 className="inline-block text-white text-lg md:text-xl relative after:bg-white after:w-[60px] sm:after:w-[80px] subheading-after uppercase mb-12 font-light">
          Добре дошли</h3>
        <h2 className="text-white text-2xl md:text-5xl mb-12 leading-[1.1]">Насладете се на удоволствието
        </h2>
        <a href='#rooms2' className="text-[#999] bg-white sm:px-6 sm:py-4 py-2 px-3 text-center hover:bg-transparent border-2 border-white  hover:text-white  tracking-[0.2rem] transition rounded-md">Стаи и Апартаменти</a>

      </div >



      <div className="flex flex-col absolute md:right-12 md:bottom-32 sm:right-16 right-8 bottom-24 items-end">
        <div className="py-2">
          <button onClick={prevSlide} id="prevSlide">
            <ArrowLeftIcon className='w-4 h-4 sm:w-6 sm:h-6 text-white' />

          </button>


        </div>

        <div className="py-2">
          <button onClick={nextSlide} id="nextSlide">
            <ArrowRightIcon className='w-4 h-4 sm:w-6 sm:h-6 text-white' />

          </button>


        </div>
        <div id='goToSlide' className="flex mt-8 goToSlide cursor-pointer ">
          {slides.map((slide, slideIndex) => (

            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={classNames(currentIndex === slideIndex ? "" : "opacity-30", " w-6 sm:w-12 h-0.5 bg-white")}></div>

          )

          )}
        </div>
      </div>


    </main >


  )
}

export default Hero