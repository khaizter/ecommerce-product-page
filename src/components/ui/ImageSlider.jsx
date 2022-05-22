import "../../styles/ui/ImageSlider.scss";
import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlideHandler = () => {
    setCurrentSlide((prevValue) => {
      return prevValue === slides.length - 1 ? 0 : prevValue + 1;
    });
  };

  const prevSlideHandler = () => {
    setCurrentSlide((prevValue) => {
      return prevValue === 0 ? slides.length - 1 : prevValue - 1;
    });
  };

  return (
    <div className="image-slider">
      {slides.map((slide, index) => {
        return (
          <img
            key={slide.id}
            src={slide.imagePath}
            alt={slide.alt}
            className={`image-slider__slide ${
              index === currentSlide ? "image-slider__slide--active" : ""
            }`}
          />
        );
      })}
      <button
        className="image-slider__button image-slider__button--previous"
        onClick={prevSlideHandler}
      >
        <img src="./images/icon-previous.svg" alt="previous" />
      </button>
      <button
        className="image-slider__button image-slider__button--next"
        onClick={nextSlideHandler}
      >
        <img src="./images/icon-next.svg" alt="next" />
      </button>
    </div>
  );
};

export default ImageSlider;
