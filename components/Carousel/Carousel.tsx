import React, { CSSProperties, FC, ReactNode } from "react";
import { Carousel, CarouselProps } from "react-responsive-carousel";
import s from "./Carousel.module.scss";
import cn from "classnames";

export interface Props extends Partial<CarouselProps> {
  children: React.ReactChild[];
  showIndicators?: boolean;
  autoPlay?: boolean;
}

const indicatorStyles: CSSProperties = {};

const CarouselComponent: FC<Props> = ({
  showIndicators = true,
  autoPlay = true,
  ...props
}) => {
  return (
    <div className={s.mainWrapper}>
      <Carousel
        {...props}
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={showIndicators}
        autoPlay={autoPlay}
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
      />

      <style>{`
.carousel-slider {
  display: flex;
}
`}</style>
    </div>
  );
};

export default CarouselComponent;
