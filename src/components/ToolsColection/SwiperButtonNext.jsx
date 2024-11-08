import React from "react";
import { useSwiper } from "swiper/react";

import { ArrowDownOutlined } from "@ant-design/icons";

export default function SwiperButtonNext() {
  const swiper = useSwiper();

  return (
    <ArrowDownOutlined
      onClick={() => {
        swiper.slideNext();
      }}
      className="arrow-up"
    />
  );
}
