import Carousel from "react-multi-carousel";
import React from "react";
import PackageCard from "../Packages/PackageCard";

const PromoCarousel = () => {
  return (
    <>
      <h3 className="text-heading-3 text-white font-label font-bold pt-14 mb-4">
        Promo Liburan
      </h3>
      
      <Carousel
        className="py-5"
        containerClass="carousel-container"
        arrows
        centerMode={false}
        draggable
        swipeable
        customRightArrow={
          <button type="button" aria-label="Go To Next Slide" className="absolute z-50 right-0 opacity-50 hover: opacity-100">
            <img 
            src="/assets/icons/right-arrow-rounded.svg"
            height={75}
            width={75}
            />
          </button>
        }
        customLeftArrow={
          <button type="button" aria-label="Go To Next Slide" className="absolute z-50 right-0 opacity-50 hover: opacity-100">
            <img 
            src="/assets/icons/left-arrow-rounded.svg"
            height={75}
            width={75}
            />
          </button>
        }
        partialVisible
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 720
            },
            items: 2,
            partialVisibilityGutter: 100
          },
        }}
      >
      <PackageCard />
      <PackageCard />
      <PackageCard />
        
      </Carousel>
    </>
  );
};

export default PromoCarousel;
