import Link from "next/link";
import React, { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import CarouselComponent from "../Carousel/Carousel";
import promotions from "./promotions.json";
import s from "./Promotion.module.scss";

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
    <Link href={id.toString()} className={s.promotionLink}>
      <article
        className={s.promotion}
        style={{
          backgroundImage: `linear-gradient(211deg, rgba(0,0,0,0) 2%, rgba(0,0,0,0.39548319327731096) 24%, rgba(0,0,0,0.7792366946778712) 81%, rgba(33,37,41,1) 100%),url(${thumb_photo})`,
        }}
      >
        <h3 className={s.title}>{title}</h3>
        <p className={s.description}>{description}</p>
      </article>
    </Link>
  );
};

interface IPromotionListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const PromotionList: FC<IPromotionListProps> = ({ className, ...props }) => {
  return (
    <section className={className} {...props}>
      <h2></h2>
      <CarouselComponent>
        {promotions.map((item) => (
          <Promotion key={item.id} {...item} />
        ))}
      </CarouselComponent>
    </section>
  );
};

export default PromotionList;
