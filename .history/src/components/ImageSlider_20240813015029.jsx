import { useState, useCallback, useEffect } from 'react'
import sliderContent from '../SliderContent'

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to previous slide function
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderContent.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Go to next slide function
  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === sliderContent.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, setCurrentIndex]);

  // Auto change slide every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, nextSlide]);

  return (
    <div className="max-w-[1920px] h-[780px] w-full xl:w-[90%] mx-auto shadow-md shadow-gray-700 rounded-br-md  relative group">
      <div
        style={{ backgroundImage: `url(${sliderContent[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        {/* Overlay */}
        <div className="hero__overlay absolute top-0 bottom-0 left-0 right-0 lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 bg-black/20 "></div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[80%] lg:top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/70 text-white cursor-pointer z-40">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[80%] lg:top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer z-40">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
    </div>
  );
}

export default ImageSlider