import { useEffect, useState, useContext, useRef } from "react";

import band1 from "../../images/band1.png";
import band3 from "../../images/band3.png";
import band4 from "../../images/band4.png";
import band5 from "../../images/band5.png";

function Carrusel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [band1, band3, band4, band5];
  const extendedCarouselImages = [...carouselImages, ...carouselImages];
  const slideRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % extendedCarouselImages.length
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [extendedCarouselImages.length]);

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transition = "transform 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${
        currentSlide * (100 / extendedCarouselImages.length)
      }%)`;
    }
  }, [currentSlide, extendedCarouselImages.length]);

  return (
    <div className="overflow-hidden w-full h-64">
      <div
        ref={slideRef}
        className="flex w-full"
        style={{ width: `${extendedCarouselImages.length * 100}%` }}
      >
        {extendedCarouselImages.map((image, index) => (
          <div
            key={index}
            className="flex-none w-full h-full"
            style={{ width: `${100 / extendedCarouselImages.length}%` }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrusel