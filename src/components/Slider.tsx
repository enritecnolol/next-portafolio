'use client'

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";
import Autoplay from 'embla-carousel-autoplay'

type Props = { options?: EmblaOptionsType } & PropsWithChildren;

const Slider = ({ children, options }: Props) => {
  const [emblaRef] = useEmblaCarousel({
    slidesToScroll: 1,
    align: "start",
    loop: false,
    ...options,
  }, [Autoplay()]);

  return (
    <div className="overflow-hidden py-2" ref={emblaRef}>
      <div className="flex gap-10">{children}</div>
    </div>
  );
};
export default Slider;