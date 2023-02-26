import React, { CSSProperties, FC, ReactNode } from "react";
import { Carousel } from "react-responsive-carousel";
import s from "./Carousel.module.scss";
import cn from "classnames";

export interface Props {
  data: Array<{ id: number; children: ReactNode }>;
}

const indicatorStyles: CSSProperties = {};

const CarouselComponent: FC<Props> = ({ data }) => {
  return (
    <div className={s.mainWrapper}>
      <Carousel
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay
        interval={6000}
        width="100%"
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          if (isSelected) {
            return (
              <li
                className={cn(s.indicator, s.selectedIndicator)}
                style={{ ...indicatorStyles }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Selected: ${label} ${index + 1}`}
              />
            );
          }
          return (
            <li
              className={s.indicator}
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              title={`${label} ${index + 1}`}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
        renderArrowPrev={(clickHandler, hasPrev) =>
          hasPrev && (
            <button
              className={cn(s.carouselBtn, s.prevCarouselBtn)}
              onClick={clickHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext) =>
          //TODO remove buttons
          hasNext && (
            <button
              className={cn(s.carouselBtn, s.nextCarouselBtn)}
              onClick={clickHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )
        }
      >
        {data.map((item, index) => {
          return <React.Fragment key={item.id}>{item.children}</React.Fragment>;
        })}
      </Carousel>
      <style>{`
.carousel-slider {
  display: flex;
}
`}</style>
    </div>
  );
};

export default CarouselComponent;
