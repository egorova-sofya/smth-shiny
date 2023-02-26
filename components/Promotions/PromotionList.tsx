import Link from "next/link";
import React, { FC } from "react";
import CarouselComponent from "../Carousel/Carousel";
import promotions from "./promotions.json";

interface IPromotion {
  id: number;
  title: string;
  description: string;
  thumb_photo: string;
  date: number;
}

const Promotion: FC<IPromotion> = ({
  id,
  date,
  title,
  description,
  thumb_photo,
}) => {
  return (
    <article style={{ backgroundImage: `url(${thumb_photo})` }}>
      <Link href={id.toString()}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </article>
  );
};

const PromotionList = () => {
  return (
    <div>
      <CarouselComponent
        data={promotions.map((item) => ({
          id: item.id,
          children: <Promotion {...item} />,
        }))}
      />
    </div>
  );
};

export default PromotionList;
