import React from "react";
import s from "./Gallery.module.scss";
import Image from "next/image";
import galleryItem from "./../GalleryCarousel/gallery-items.json";
import Title from "../Title/Title";

const Gallery = () => {
  return (
    <section className={s.galleryWrapper}>
      <Title level={1} className={s.sectionTitle}>
        Gallery
      </Title>
      <div className={s.imagesWrapper}>
        {galleryItem.map((item) => (
          <Image
            key={item.id}
            className={s.image}
            src={item.thumb_photo}
            alt={item.title}
            width={200}
            height={300}
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
