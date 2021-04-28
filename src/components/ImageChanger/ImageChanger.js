import React, { useState, useEffect } from "react";
import classNames from 'classnames';

import * as css from "./ImageChanger.module.css";

function ImageChanger(props) {
  const { images, presentationTime, className } = props;
  const slidePresentationTime = presentationTime ?? 3000 // 3s
  const [currentSlide, setCurrentSlide] = useState(0) // set currrent slide index

  let [changeImage, setChangeImage] = useState(false);

  useEffect(() => {
    let sliderInterval;
    if (changeImage) {
      sliderInterval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % images.length); // change current slide to next after 3s
      }, slidePresentationTime);
      return () => {
        clearInterval(sliderInterval)
      }
    }
    else {
      clearInterval(sliderInterval)
    }
  })

  return (
    <div className={classNames(css.root, className)}>
      <div className={css.content}>
        <div aria-hidden="true" onMouseOutCapture={() => setChangeImage(true)} onMouseLeave={() => setChangeImage(false)}>
          {images.map((image, index) => (
            <img
              id={index}
              key={index}
              className={index === currentSlide ? css.active : css.image}
              src={image}
              loading="lazy"
              alt={`${index} hobby`}
              style={{
                zIndex: `${index + 1}`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default ImageChanger;
