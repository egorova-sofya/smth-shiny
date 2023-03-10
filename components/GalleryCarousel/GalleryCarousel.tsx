import React from "react";
import CarouselComponent from "../Carousel/Carousel";
import s from "./GalleryCarousel.module.scss";
import galleryItems from "./gallery-items.json";
import Image from "next/image";
import ExpandingButton from "../Button/ExpandingButton";
import Link from "next/link";

const GalleryCarousel = () => {
  return (
    <>
      <CarouselComponent
        autoPlay={false}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={20}
      >
        {galleryItems.map((item) => (
          <div key={item.id} className={s.imageWrapper}>
            <Image
              className={s.image}
              src={item.thumb_photo}
              alt="Next.js Logo"
              fill
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw"
            />
          </div>
        ))}
      </CarouselComponent>
      <ExpandingButton as={"a"} href="/gallery" className={s.expandedButton}>
        Go to the gallery
      </ExpandingButton>
    </>
  );
};

export default GalleryCarousel;
