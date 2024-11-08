import React from "react";
import { useSwiper } from "swiper/react";

import { ArrowUpOutlined } from "@ant-design/icons";

export default function SwiperButtonPrev() {
  const swiper = useSwiper();

  return (
    <ArrowUpOutlined
      onClick={() => {
        swiper.slidePrev();
      }}
      className="arrow-down"
    />
  );
}
