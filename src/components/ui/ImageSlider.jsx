import "../../styles/ui/ImageSlider.scss";
import React, { Fragment, useState } from "react";
import Modal from "./Modal";
import useWindowSize from "../../hooks/useWindowSize";
import PreviousIcon from "../icon/PreviousIcon";
import NextIcon from "../icon/NextIcon";

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLightBox, setShowLightBox] = useState(false);
  const size = useWindowSize();

  if (size[0] < 900) {
    if (showLightBox) {
      setShowLightBox(false);
    }
  }

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

  const thumbnailHandler = (index) => {
    setCurrentSlide(index);
  };

  const showLightBoxHandler = () => {
    setShowLightBox(true);
  };

  const hideLightBoxHandler = () => {
    setShowLightBox(false);
  };

  return (
    <Fragment>
      <div className="image-slider">
        <div className="image-slider__slider" onClick={showLightBoxHandler}>
          {slides.map((slide, index) => {
            return (
              <img
                key={index}
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
            <PreviousIcon />
          </button>
          <button
            className="image-slider__button image-slider__button--next"
            onClick={nextSlideHandler}
          >
            <NextIcon />
          </button>
        </div>
        <div className="image-slider__thumbnails">
          {slides.map((slide, index) => {
            return (
              <button
                key={index}
                onClick={thumbnailHandler.bind(null, index)}
                className={`image-slider__thumbnail ${
                  index === currentSlide
                    ? "image-slider__thumbnail--active"
                    : ""
                }`}
              >
                <img key={index} src={slide.thumbnailPath} alt={slide.alt} />
              </button>
            );
          })}
        </div>
      </div>
      <Modal showModal={showLightBox}>
        <div className="image-slider__light-box">
          <button
            onClick={hideLightBoxHandler}
            className="image-slider__light-box-toggle"
          >
            <img src="./images/icon-close.svg" alt="" />
          </button>
          <div className="image-slider">
            <div className="image-slider__slider" onClick={showLightBoxHandler}>
              {slides.map((slide, index) => {
                return (
                  <img
                    key={index}
                    src={slide.imagePath}
                    alt={slide.alt}
                    className={`image-slider__slide ${
                      index === currentSlide
                        ? "image-slider__slide--active"
                        : ""
                    }`}
                  />
                );
              })}
              <button
                className="image-slider__button image-slider__button--previous"
                onClick={prevSlideHandler}
              >
                <PreviousIcon />
              </button>
              <button
                className="image-slider__button image-slider__button--next"
                onClick={nextSlideHandler}
              >
                <NextIcon />
              </button>
            </div>
            <div className="image-slider__thumbnails">
              {slides.map((slide, index) => {
                return (
                  <button
                    key={index}
                    onClick={thumbnailHandler.bind(null, index)}
                    className={`image-slider__thumbnail ${
                      index === currentSlide
                        ? "image-slider__thumbnail--active"
                        : ""
                    }`}
                  >
                    <img
                      key={index}
                      src={slide.thumbnailPath}
                      alt={slide.alt}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default ImageSlider;
